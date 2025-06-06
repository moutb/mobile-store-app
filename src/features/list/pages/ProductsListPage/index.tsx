'use client';

import { useState } from 'react';
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
import './variables.css';

const ProductListPage: NextPageWithLayout<ProductListPageProps> = ({
    initialPage,
    pageSize,
    debounceDelay,
}) => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, debounceDelay);
    const { products, fetchProducts, isLoading, hasMore } = useProducts(
        debouncedSearch,
        pageSize,
        initialPage,
    );
    const { setRef } = useInfiniteScroll({
        fetchMore: fetchProducts,
        hasMore,
        loading: isLoading,
    });

    return (
        <Flexbox column align="flex-start" gap={theme.spacing(3)}>
            <h1 className="sr-only">Products list</h1>
            <SearchBar
                disabled={isLoading}
                value={search}
                onChange={setSearch}
            />

            {products.length === 0 && !isLoading && (
                <p role="alert">No products found.</p>
            )}
            {products.length > 0 && (
                <ListWrapper className="product--card-list">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ListWrapper>
            )}
            {hasMore && (
                <Sentinel
                    ref={setRef}
                    aria-hidden="true"
                    role="presentation"
                    data-testid="infinite-scroll-sentinel"
                />
            )}
            {isLoading && <Loading role="status">Loading products...</Loading>}
        </Flexbox>
    );
};

ProductListPage.getLayout = (page: React.ReactElement) => {
    return <CartHeaderLayout>{page}</CartHeaderLayout>;
};

export default ProductListPage;
