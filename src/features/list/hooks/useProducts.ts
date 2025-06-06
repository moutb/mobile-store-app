import { useEffect, useState } from 'react';
import { listProductsLocal } from '@/api/local';
import { ProductListItem } from '@/types/product';
import { Page } from '@/api/types';

export const useProducts = (
    search: string = '',
    limit: number,
    initialPage: Page<ProductListItem>,
) => {
    const [products, setProducts] = useState<ProductListItem[]>(
        initialPage.list,
    );
    // initialize the page state to 2, as the first page is already loaded
    const [page, setPage] = useState(2);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchProducts = async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        try {
            const response = await listProductsLocal({
                search,
                limit,
                offset: (page - 1) * limit,
            });
            // Merge the new products with the existing ones, ensuring no duplicates to prevent rendering issues
            const newList = [
                ...new Map(
                    [...products, ...response.list].map((p) => [p.id, p]),
                ).values(),
            ];
            setProducts(newList);
            setPage(page + 1);

            const isLastPage =
                response.list.length < limit ||
                products.length === newList.length;
            setHasMore(!isLastPage);
        } catch (error) {
            console.error('Error fetching products', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Reset values as the first page is already loaded
        setProducts(search === '' ? initialPage.list : []);
        setPage(search === '' ? 2 : 1);
        setHasMore(true);
    }, [search, initialPage.list]);

    return { products, fetchProducts, isLoading, hasMore };
};
