'use client';
import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react';
import { CartProduct, CartReducerState } from '../types';
import { cartReducer } from '../modules/reducer';
import { useRouter } from 'next/navigation';

const initialReducerState: CartReducerState = {
    products: [],
};

const LOCAL_STORAGE_KEY = 'cart_state';

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
    const router = useRouter();
    const [isLoaded, setIsLoaded] = useState(false);
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                dispatch({ type: 'LOAD', payload: parsed });
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            // console.error('Failed to load cart state from localStorage:', e);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
        }
    }, [state, isLoaded]);

    if (!isLoaded) return null;
    // avoid rendering the context provider until the initial state is loaded

    const addToCart = (product: CartProduct) => {
        dispatch({ type: 'ADD', payload: product });
        router.push('/cart');
    };
    const removeFromCart = (product: CartProduct) =>
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
