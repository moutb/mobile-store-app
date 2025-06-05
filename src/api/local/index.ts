import { ProductListItem } from '@/types/product';
import localClient from '@/api/client/local';
import { ListProductsParams, Page } from '../types';

export async function listProductsLocal(
    params: ListProductsParams,
): Promise<Page<ProductListItem>> {
    const urlSearchParams = new URLSearchParams();
    Object.entries(params)
        .filter(([_, value]) => value !== undefined)
        .forEach(([key, value]) => {
            if (typeof value === 'number') {
                urlSearchParams.set(key, value.toString());
            } else {
                urlSearchParams.set(key, value);
            }
        });

    const response = await localClient.get(`/products?${urlSearchParams}`);
    if (response.statusText !== 'OK') {
        throw new Error('Failed to fetch products');
    }
    return response.data as Page<ProductListItem>;
}
