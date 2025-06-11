import { Product, ProductSpecs } from '@/types/product';

export type ProductDetailPageProps = {
    product: Product;
};

export type ProductSpecsProps = {
    specs: ProductSpecs & {
        brand: Product['brand'];
        name: Product['name'];
        description: Product['description'];
    };
};

export type AddToCartButtonProps = {
    onClick: () => void;
    disabled?: boolean;
};
