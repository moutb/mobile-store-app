import { CartProduct } from './cart';

export type CartReducerState = { products: CartProduct[] };

export type AddToCartAction = { type: 'ADD'; payload: CartProduct };

export type RemoveFromCartAction = { type: 'REMOVE'; payload: CartProduct };

export type CartAction = AddToCartAction | RemoveFromCartAction;

export type CartState = { products: CartProduct[] };
