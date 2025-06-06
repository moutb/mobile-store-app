/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    render,
    screen,
    fireEvent,
    waitFor,
    act,
} from '@testing-library/react';
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

afterAll(() => {
    jest.useRealTimers();
});

const renderWithTheme = (ui: React.ReactNode) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('<ProductListPage /> integration', () => {
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

    it('filters products using debounce and triggers fetchMore via sentinel', async () => {
        renderWithTheme(
            <ProductListPage
                initialPage={{ list: [], limit: 10, offset: 0 }}
                pageSize={10}
                debounceDelay={500}
            />,
        );

        const searchInput = screen.getByRole('textbox', { name: /search/i });
        expect(searchInput).toBeInTheDocument();

        act(() => {
            fireEvent.change(searchInput, { target: { value: 'Galaxy' } });
            jest.advanceTimersByTime(500);
        });

        const sentinel = screen.getByTestId('infinite-scroll-sentinel');

        expect(sentinel).toBeInTheDocument();

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
            expect(
                screen.getAllByText(/Galaxy/i).length,
            ).toBeGreaterThanOrEqual(3);
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
        });

        act(() => {
            jest.advanceTimersByTime(defaultProps.debounceDelay);
        });

        await waitFor(() => {
            expect(screen.getByRole('alert')).toHaveTextContent(
                /No products found/i,
            );
        });
    });
});
