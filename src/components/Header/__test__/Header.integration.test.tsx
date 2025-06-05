// __tests__/Header.test.tsx
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

describe('<Header />', () => {
    const renderWithProvider = (cartState = { products: [] as any }) => {
        render(
            <CartProvider initialState={cartState}>
                <Header />
            </CartProvider>,
        );
    };

    it('displays correct product count in cart', () => {
        renderWithProvider({ products: [{ id: 1 }, { id: 2 }] as any[] });

        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('does not fill cart icon if no items', () => {
        renderWithProvider({ products: [] });

        const icon = screen
            .getByLabelText(/navigate to shopping cart/i)
            .querySelector('svg');
        expect(icon?.getAttribute('data-filled')).toBe('false');
    });

    it('fills cart icon if items are in cart', () => {
        renderWithProvider({ products: [{ id: 1 }] });

        const icon = screen
            .getByLabelText(/navigate to shopping cart/i)
            .querySelector('svg');
        expect(icon?.getAttribute('data-filled')).toBe('true');
    });
});
