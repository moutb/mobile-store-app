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
            const indexToRemove = state.products.findIndex(
                (product) =>
                    product.id === action.payload.id &&
                    product.color.name === action.payload.color.name &&
                    product.storage.capacity ===
                        action.payload.storage.capacity,
            );

            if (indexToRemove === -1) return state;

            return {
                products: [
                    ...state.products.slice(0, indexToRemove),
                    ...state.products.slice(indexToRemove + 1),
                ],
            };
        default:
            return state;
    }
}
