/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { render, screen } from '@testing-library/react';
import Header from '../index';
import { CartProvider } from '@/features/cart/context/CartContext';
import '@testing-library/jest-dom';
import { CartProduct } from '@/features/cart/types';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import '@/__test__/mocks/next-image';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        back: jest.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
}));

describe('<Header />', () => {
    const renderWithProvider = (
        cartState = { products: [] as CartProduct[] },
    ) => {
        render(
            <ThemeProvider theme={theme}>
                <CartProvider initialState={cartState}>
                    <Header showCart clear />
                </CartProvider>
            </ThemeProvider>,
        );
    };

    beforeEach(() => {
        localStorage.clear();
    });

    it('displays correct product count in cart', () => {
        renderWithProvider({
            products: [{ id: 1 }, { id: 2 }] as unknown as CartProduct[],
        });

        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('does not fill cart icon if no items', () => {
        renderWithProvider({ products: [] });

        const icon = screen
            .getByLabelText(/navigate to shopping cart/i)
            .querySelector('img');
        expect(icon?.getAttribute('src')).not.toContain('filled');
    });

    it('fills cart icon if items are in cart', () => {
        renderWithProvider({
            products: [{ id: 1 }] as unknown as CartProduct[],
        });

        const icon = screen
            .getByLabelText(/navigate to shopping cart/i)
            .querySelector('img');
        expect(icon?.getAttribute('src')).toContain('filled');
    });
});
