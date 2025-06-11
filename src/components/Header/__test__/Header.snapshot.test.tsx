/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import { render } from '@testing-library/react';
import Header from '../index';
import { CartProvider } from '@/features/cart/context/CartContext';
import '@testing-library/jest-dom';
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
    it('matches snapshot', () => {
        const { asFragment } = render(
            <ThemeProvider theme={theme}>
                <CartProvider initialState={{ products: [] }}>
                    <Header showCart clear />
                </CartProvider>
            </ThemeProvider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
