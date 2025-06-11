'use client';

import { useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import { useProducts } from '../../hooks/useProducts';
import { NextPageWithLayout } from '@/types/pages';
import CartHeaderLayout from '@/layouts/CartHeaderLayout';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import ProductCard from '../../components/ProductCard';
import { useDebounce } from '@/hooks/useDebounce';
import { ProductListPageProps } from '../../types';
import Flexbox from '@/components/Flexbox';
import { theme } from '@/styles/theme';
import { ListWrapper, Loading, Sentinel } from './styles';
import useSearchParams from '../../hooks/useSearchParams';

const ProductListPage: NextPageWithLayout<ProductListPageProps> = ({
    initialPage,
    initialSearch,
    pageSize,
    debounceDelay,
}) => {
    const { search, setSearch, refreshQueryParams } = useSearchParams();
    const debouncedSearch = useDebounce(search, debounceDelay);
    const { products, fetchProducts, isLoading, hasMore } = useProducts(
        debouncedSearch,
        pageSize,
        initialPage,
        initialSearch,
    );
    const { setRef } = useInfiniteScroll({
        fetchMore: fetchProducts,
        hasMore,
        loading: isLoading,
    });

    useEffect(() => {
        refreshQueryParams();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // preventing for doing anything because debounce will update the search value
        }
    };

    return (
        <Flexbox column align="flex-start" gap={theme.spacing(3)}>
            <h1 className="sr-only">Products list</h1>
            <SearchBar
                disabled={isLoading}
                value={search}
                onChange={setSearch}
                onKeyDown={handleKeyDown}
            />

            {products.length === 0 && !isLoading && (
                <p role="alert">No products found.</p>
            )}
            <ListWrapper>
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                {hasMore && (
                    <Sentinel
                        ref={setRef}
                        aria-hidden="true"
                        role="presentation"
                        data-testid="infinite-scroll-sentinel"
                    />
                )}
            </ListWrapper>
            {isLoading && <Loading role="status">Loading products...</Loading>}
        </Flexbox>
    );
};

ProductListPage.getLayout = (page: React.ReactElement) => {
    return <CartHeaderLayout>{page}</CartHeaderLayout>;
};

ProductListPage.metadata = () => {
    return {
        title: 'Products List',
        description: 'Browse our collection of products.',
    };
};

export default ProductListPage;
