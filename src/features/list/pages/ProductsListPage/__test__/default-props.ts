import { ProductListItem } from '@/types/product';
import { ProductListPageProps } from '../../../types';
import ProductsList from '../../../../../__test__/mocks/list-products.json';

const list = ProductsList.map(
    (product) => ({ ...product }) as ProductListItem,
).slice(0, 2);

const defaultProps: ProductListPageProps = {
    initialPage: {
        list,
        offset: 0,
        limit: list.length,
    },
    pageSize: list.length,
    debounceDelay: 500,
};

export default defaultProps;
