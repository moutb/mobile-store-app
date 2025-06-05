/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { render, waitFor } from '@testing-library/react';
import Header from '../index';
import { CartProvider } from '@/features/cart/context/CartContext';
import '@testing-library/jest-dom';
import { axe } from 'jest-axe';
import type { ImageProps } from 'next/image';
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

describe('<Header />', () => {
    it('has no accessibility violations', async () => {
        const { container } = await waitFor(() =>
            render(
                <ThemeProvider theme={theme}>
                    <CartProvider initialState={{ products: [] }}>
                        <Header />
                    </CartProvider>
                </ThemeProvider>,
            ),
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
