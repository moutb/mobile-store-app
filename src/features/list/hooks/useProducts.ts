import { useEffect, useState } from 'react';
import { listProductsLocal } from '@/api/local';
import { ProductListItem } from '@/types/product';
import { Page } from '@/api/types';

export const useProducts = (
    search: string = '',
    limit: number,
    initialPage: Page<ProductListItem>,
    initialSearch: string = '',
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            // console.error('Error fetching products', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Reset values as the first page is already loaded
        const isInitialSearch = search === initialSearch;
        setProducts(isInitialSearch ? initialPage.list : []);
        setPage(isInitialSearch ? 2 : 1);
        setHasMore(!initialSearch || initialPage.list.length === limit);
    }, [search, initialPage.list, initialSearch, limit]);

    return { products, fetchProducts, isLoading, hasMore };
};
