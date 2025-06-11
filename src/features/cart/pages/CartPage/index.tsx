'use client';

import SimpleLayout from '@/layouts/SimpleLayout';
import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';
import { useCart } from '../../context/CartContext';
import {
    CartContainer,
    CartTitle,
    EmptyMessage,
    CartItemsContainer,
} from './styles';

function CartPage() {
    const { state } = useCart();
    const { products } = state;

    return (
        <CartContainer aria-label="Shopping Cart">
            <CartTitle aria-description="Number of items in cart">
                CART ({products.length})
            </CartTitle>
            {products.length === 0 ? (
                <EmptyMessage>Your cart is empty.</EmptyMessage>
            ) : (
                <CartItemsContainer>
                    {products.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                    <CartSummary />
                </CartItemsContainer>
            )}
        </CartContainer>
    );
}

CartPage.getLayout = (page: React.ReactNode) => {
    return <SimpleLayout>{page}</SimpleLayout>;
};

CartPage.metadata = () => {
    return {
        title: `Shopping Cart`,
        description: 'Review your selected products and proceed to checkout.',
    };
};

export default CartPage;
