import { ProductColorOption, ProductStorageOption } from '@/types/product';

export type CartProduct = {
    id: string;
    brand: string;
    name: string;
    color: ProductColorOption;
    storage: ProductStorageOption;
};
