import { Page } from '@/api/types';
import { ProductListItem } from '@/types/product';

export type ProductListPageProps = {
    initialPage: Page<ProductListItem>;
    pageSize: number;
    debounceDelay: number;
};
