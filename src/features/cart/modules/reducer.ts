import { CartAction, CartReducerState } from '../types';

export function cartReducer(
    state: CartReducerState,
    action: CartAction,
): CartReducerState {
    switch (action.type) {
        case 'LOAD':
            return action.payload;
        case 'ADD':
            return { products: [...state.products, action.payload] };
        case 'REMOVE':
            return {
                products: state.products.filter(
                    (product) =>
                        !(
                            product.id === action.payload.id &&
                            product.color.name === action.payload.color.name &&
                            product.storage.capacity ===
                                action.payload.storage.capacity
                        ),
                ),
            };
        default:
            return state;
    }
}
