import { CartAction, CartReducerState } from '../types';

export function cartReducer(
    state: CartReducerState,
    action: CartAction,
): CartReducerState {
    switch (action.type) {
        case 'ADD':
            return { products: [...state.products, action.payload] };
        case 'REMOVE':
            return {
                products: state.products.filter(
                    (products) => products.id !== action.payload.id,
                ),
            };
        default:
            return state;
    }
}
