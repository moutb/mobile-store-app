import { render } from '@testing-library/react';
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
    it('matches snapshot', () => {
        const { asFragment } = render(
            <CartProvider initialState={{ products: [] }}>
                <Header />
            </CartProvider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
