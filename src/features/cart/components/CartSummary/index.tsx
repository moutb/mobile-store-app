'use client';
import { useCart } from '../../context/CartContext';
import {
    SummaryContainer,
    TotalLabel,
    TotalRow,
    TotalPrice,
    Actions,
    OutlinedButton,
    FilledButton,
} from './styles';

const CartSummary = () => {
    const { state } = useCart();
    const total = state.products.reduce((acc, p) => acc + p.storage.price, 0);

    return (
        <SummaryContainer>
            <Actions>
                <TotalRow>
                    <TotalLabel>TOTAL</TotalLabel>
                    <TotalPrice>{total} EUR</TotalPrice>
                </TotalRow>
                <OutlinedButton href="/">Continue Shopping</OutlinedButton>
                <FilledButton>Pay</FilledButton>
            </Actions>
        </SummaryContainer>
    );
};

export default CartSummary;
