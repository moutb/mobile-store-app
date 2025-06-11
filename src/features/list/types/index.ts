import { Page } from '@/api/types';
import { ProductListItem } from '@/types/product';

export type ProductListPageProps = {
    initialPage: Page<ProductListItem>;
    pageSize: number;
    debounceDelay: number;
};

export type ProductCardProps = {
    product: ProductListItem;
    className?: string;
};
