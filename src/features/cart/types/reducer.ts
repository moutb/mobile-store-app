import { CartProduct } from './cart';

export type CartReducerState = { products: CartProduct[] };

export type LoadAction = { type: 'LOAD'; payload: CartReducerState };

export type AddToCartAction = { type: 'ADD'; payload: CartProduct };

export type RemoveFromCartAction = { type: 'REMOVE'; payload: CartProduct };

export type CartAction = LoadAction | AddToCartAction | RemoveFromCartAction;

export type CartState = { products: CartProduct[] };
