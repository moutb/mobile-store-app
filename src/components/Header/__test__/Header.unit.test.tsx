/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { render, screen } from '@testing-library/react';
import Header from '../index';
import { CartProvider } from '@/features/cart/context/CartContext';
import '@testing-library/jest-dom';
import type { ImageProps } from 'next/image';
import { CartProduct } from '@/features/cart/types';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: ImageProps) => {
        return (
            <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
        );
    },
}));

describe('Header component', () => {
    const renderWithProvider = (
        cartState = { products: [] as CartProduct[] },
    ) => {
        render(
            <ThemeProvider theme={theme}>
                <CartProvider initialState={cartState}>
                    <Header />
                </CartProvider>
            </ThemeProvider>,
        );
    };

    it('renders logo and cart link', () => {
        renderWithProvider();

        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(
            screen.getByRole('link', { name: /navigate to home page/i }),
        ).toBeInTheDocument();
        expect(
            screen.getByRole('link', { name: /navigate to shopping cart/i }),
        ).toBeInTheDocument();
    });
});
