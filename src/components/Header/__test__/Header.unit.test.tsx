import { render, screen } from '@testing-library/react';
import Header from '../index';
import { CartProvider } from '@/features/cart/context/CartContext';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} />;
    },
}));

describe('Header component', () => {
    const renderWithProvider = (cartState = { products: [] as any }) => {
        render(
            <CartProvider initialState={cartState}>
                <Header />
            </CartProvider>,
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
