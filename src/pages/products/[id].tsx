import type { GetServerSideProps } from 'next';
import { getProductById } from '@/api/products';
import ProductDetailPage from '@/features/detail/pages/ProductDetailPage';
import logger from '@/lib/logger';
import { ProductDetailPageProps } from '@/features/detail/types';

export const getServerSideProps: GetServerSideProps<
    ProductDetailPageProps
> = async (context) => {
    const { id } = context.params as { id: string };
    const product = await getProductById(id);

    logger.debug(product, 'ProductListPage.getServerSideProps -- product');

    return {
        props: {
            product,
        },
    };
};

export default ProductDetailPage;
