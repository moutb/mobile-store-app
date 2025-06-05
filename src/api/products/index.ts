import { Product, ProductListItem } from '@/types/product';
import productsClient from '@/api/client/products';
import { ListProductsParams, Page } from '../types';

export async function listProducts(
    params: ListProductsParams,
): Promise<Page<ProductListItem>> {
    const urlSearchParams = new URLSearchParams();
    Object.entries(params)
        .filter((entry) => entry[1] !== undefined)
        .forEach(([key, value]) => {
            if (typeof value === 'number') {
                urlSearchParams.set(key, value.toString());
            } else {
                urlSearchParams.set(key, value as string);
            }
        });

    const response = await productsClient.get(`/products?${urlSearchParams}`);

    if (response.statusText !== 'OK') {
        throw new Error('Failed to fetch products');
    }

    // clean up duplicates in the response
    const rawList = response.data as ProductListItem[];
    const uniqueMap = new Map<string, ProductListItem>();
    rawList.forEach((item) => {
        if (!uniqueMap.has(item.id)) {
            uniqueMap.set(item.id, item);
        }
    });
    const uniqueList = Array.from(uniqueMap.values());

    // adjust pagination logic
    const offset = params.offset ?? 0;
    // assuming the limit is the number of items to return, not the total number of items
    const limit = params.limit ?? rawList.length;

    return {
        list: uniqueList,
        offset,
        limit,
    };
}

export async function getProductById(id: string): Promise<Product> {
    const response = await productsClient.get(`/products/${id}`);
    if (response.statusText !== 'OK') {
        throw new Error(`Failed to fetch product with id ${id}`);
    }
    return response.data as Product;
}
