/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    render,
    screen,
    fireEvent,
    waitFor,
    act,
} from '@testing-library/react';
import { mockPush, mockSearchParams } from '@/__test__/mocks/next-navigation';
import ProductListPage from '..';
import { server } from '@/__test__/mocks/server';
import { rest } from 'msw';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import '@/__test__/mocks/intersection-observer';
import { intersectionCallback } from '@/__test__/mocks/intersection-observer';

// Common props used across tests
import defaultProps from './default-props';

beforeAll(() => {
    jest.useFakeTimers();
});

afterAll(async () => {
    jest.useRealTimers();
});

const renderWithTheme = (ui: React.ReactNode) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('<ProductListPage /> integration', () => {
    beforeEach(() => {
        mockPush.mockClear();
        mockSearchParams.mockImplementation(() => new URLSearchParams());
    });

    it('renders the initial list of products', async () => {
        renderWithTheme(<ProductListPage {...defaultProps} />);

        act(() => {
            jest.advanceTimersByTime(600);
        });

        await waitFor(() => {
            expect(screen.getByText(/Galaxy S24 Ultra/i)).toBeInTheDocument();
            expect(screen.getByText(/Galaxy A25 5G/i)).toBeInTheDocument();
        });
    });
    it('displays sentinel when there are more products to load', async () => {
        await act(async () => {
            renderWithTheme(<ProductListPage {...defaultProps} />);
        });

        const sentinel = screen.getByTestId('infinite-scroll-sentinel');

        expect(sentinel).toBeInTheDocument();
    });

    it('triggers fetchMore when sentinel is intersected (infinite scroll)', async () => {
        let pageCallCount = 0;

        server.use(
            rest.get('/api/products', (req, res, ctx) => {
                const offset = Number(req.url.searchParams.get('offset') || 0);
                const limit = defaultProps.pageSize;
                pageCallCount++;

                const products = Array.from({ length: limit }, (_, i) => ({
                    id: `${offset + i + 1}`,
                    name: `Product ${offset + i + 1}`,
                    basePrice: 10,
                    brand: `Brand ${offset + i + 1}`,
                    imageUrl: '/test.jpg',
                }));

                return res(
                    ctx.json({
                        list: products,
                        offset,
                        limit: products.length,
                    }),
                );
            }),
        );

        renderWithTheme(<ProductListPage {...defaultProps} />);

        const sentinel = screen.getByTestId('infinite-scroll-sentinel');

        act(() => {
            intersectionCallback([
                {
                    isIntersecting: true,
                    target: sentinel,
                    intersectionRatio: 1,
                    time: 0,
                    boundingClientRect: {} as any,
                    intersectionRect: {} as any,
                    rootBounds: {} as any,
                },
            ]);
        });

        await waitFor(() =>
            expect(screen.getByText(/Product 4/i)).toBeInTheDocument(),
        );

        expect(pageCallCount).toBeGreaterThan(0);
    });

    it('shows loading status while fetching products', async () => {
        server.use(
            rest.get('/api/products', async (req, res, ctx) => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                return res(ctx.json({ list: [], offset: 0, hasMore: false }));
            }),
        );

        renderWithTheme(<ProductListPage {...defaultProps} />);

        const sentinel = screen.getByTestId('infinite-scroll-sentinel');

        act(() => {
            intersectionCallback([
                {
                    isIntersecting: true,
                    target: sentinel,
                    intersectionRatio: 1,
                    time: 0,
                    boundingClientRect: {} as any,
                    intersectionRect: {} as any,
                    rootBounds: {} as any,
                },
            ]);
        });

        await waitFor(() => {
            expect(screen.getByRole('status')).toHaveTextContent(
                /loading products/i,
            );
        });
    });

    it('calls router.push with correct search param when search is submitted', async () => {
        renderWithTheme(<ProductListPage {...defaultProps} />);

        const input = screen.getByRole('textbox');

        act(() => {
            fireEvent.change(input, { target: { value: 'oppo' } });
            jest.advanceTimersByTime(defaultProps.debounceDelay);
        });

        await waitFor(() => {
            expect(mockPush).toHaveBeenCalledWith('?q=oppo', { scroll: false });
        });
    });

    it('loads search value from URL on initial render', async () => {
        mockSearchParams.mockImplementation(() => {
            const params = new URLSearchParams();
            params.set('q', 'galaxy');
            return params;
        });
        renderWithTheme(
            <ProductListPage
                {...{ ...defaultProps, initialSearch: 'galaxy' }}
            />,
        );

        const searchInput = screen.getByRole('textbox', { name: /search/i });

        await waitFor(() => {
            expect(searchInput).toHaveValue('galaxy');
            expect(screen.queryAllByText(/Galaxy/i).length).toBeGreaterThan(0);
        });
    });

    it('shows no results message when empty results', async () => {
        server.use(
            rest.get('/api/products', async (req, res, ctx) => {
                await new Promise((resolve) => setTimeout(resolve, 300));
                return res(ctx.json({ list: [], offset: 0, hasMore: false }));
            }),
        );

        renderWithTheme(<ProductListPage {...defaultProps} />);

        const searchInput = screen.getByRole('textbox', { name: /search/i });

        act(() => {
            fireEvent.change(searchInput, { target: { value: 'Galaxy' } });
            jest.advanceTimersByTime(defaultProps.debounceDelay);
        });

        await waitFor(() => {
            expect(screen.getByRole('alert')).toHaveTextContent(
                /No products found/i,
            );
        });
    });
});
