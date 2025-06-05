/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { render } from '@testing-library/react';
import Header from '../index';
import { CartProvider } from '@/features/cart/context/CartContext';
import '@testing-library/jest-dom';
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
    it('matches snapshot', () => {
        const { asFragment } = render(
            <ThemeProvider theme={theme}>
                <CartProvider initialState={{ products: [] }}>
                    <Header />
                </CartProvider>
            </ThemeProvider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
