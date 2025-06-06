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
> = async () => {
    const initialPage = await listProducts({ limit: pageSize });

    logger.debug(
        initialPage,
        'ProductListPage.getServerSideProps -- initialPage',
    );

    return {
        props: {
            initialPage,
            pageSize,
            debounceDelay,
        },
    };
};

export default ProductListPage;
