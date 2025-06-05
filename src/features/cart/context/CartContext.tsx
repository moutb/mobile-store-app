'use client';
import { createContext, useContext, useReducer } from 'react';
import { CartProduct, CartReducerState } from '../types';
import { cartReducer } from '../modules/reducer';

const initialReducerState: CartReducerState = {
    products: [],
};

const CartContext = createContext<{
    state: CartReducerState;
    addToCart: (product: CartProduct) => void;
    removeFromCart: (product: CartProduct) => void;
} | null>(null);

export function CartProvider({
    children,
    initialState = initialReducerState,
}: {
    children: React.ReactNode;
    initialState?: CartReducerState;
}) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product: CartProduct) => () =>
        dispatch({ type: 'ADD', payload: product });
    const removeFromCart = (product: CartProduct) => () =>
        dispatch({ type: 'REMOVE', payload: product });

    return (
        <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used inside CartProvider');
    return context;
}
