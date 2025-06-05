import { render } from '@testing-library/react';
import Header from '../index';
import { CartProvider } from '@/features/cart/context/CartContext';
import '@testing-library/jest-dom';
import { axe } from 'jest-axe';

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} />;
    },
}));

describe('<Header />', () => {
    it('has no accessibility violations', async () => {
        const { container } = render(
            <CartProvider initialState={{ products: [] }}>
                <Header />
            </CartProvider>,
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
