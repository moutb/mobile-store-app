import type { GetServerSideProps } from 'next';
import { listProducts } from '@/api/products';
import ProductListPage from '@/features/list/pages/ProductsListPage';
import { config } from '@/lib/config';
import type { ProductListPageProps } from '@/features/list/types';
import logger from '@/lib/logger';

const {
    productsListPage: { pageSize, debounceDelay },
} = config;

export const getServerSideProps: GetServerSideProps<
    ProductListPageProps
> = async (context) => {
    const query = context.query.q || '';
    const initialPage = await listProducts({
        search: query ? (query as string) : undefined,
        limit: pageSize,
    });

    logger.debug(
        initialPage,
        'ProductListPage.getServerSideProps -- initialPage',
    );

    return {
        props: {
            initialPage,
            initialSearch: query ? (query as string) : '',
            pageSize,
            debounceDelay,
        },
    };
};

export default ProductListPage;
