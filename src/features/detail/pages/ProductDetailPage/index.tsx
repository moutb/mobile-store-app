'use client';

import { useState } from 'react';
import {
    Name,
    PageWrapper,
    Price,
    ProductInfo,
    ProductWrapper,
    SimilarProductsWrapperTitle,
} from './styles';
import ProductImagePreview from '../../components/ProductImagePreview';
import ProductOptions from '../../components/ProductOptions';
import ProductSpecifications from '../../components/ProductSpecifications';
import type { NextPageWithLayout } from '@/types/pages';
import type { ProductDetailPageProps } from '../../types';
import CartHeaderLayout from '@/layouts/CartHeaderLayout';
import Flexbox from '@/components/Flexbox';
import { theme } from '@/styles/theme';
import AddToCartButton from '../../components/AddToCartButton';
import { useCart } from '@/features/cart/context/CartContext';
import ProductCard from '@/features/list/components/ProductCard';
import NavBar from '@/components/NavBar';
import Carousel from '@/components/Carousel';
import './variables.css';

const ProductDetailPage: NextPageWithLayout<ProductDetailPageProps> = ({
    product,
}) => {
    const { addToCart } = useCart();
    const [selectedStorage, setSelectedStorage] = useState(
        product.storageOptions[0],
    );
    const [selectedColor, setSelectedColor] = useState(product.colorOptions[0]);
    return (
        <>
            <NavBar />
            <PageWrapper className="product--specs-table">
                <ProductWrapper aria-description="Product details">
                    <ProductImagePreview
                        productName={product.name}
                        selectedColor={selectedColor}
                    />

                    <Flexbox
                        xs={{
                            column: true,
                            align: 'space-between',
                            gap: theme.spacing(3),
                            width: '100%',
                        }}
                        md={{
                            column: true,
                            align: 'space-between',
                            gap: theme.spacing(6),
                            width: '50%',
                            maxWidth: '380px',
                        }}
                    >
                        <ProductInfo>
                            <Name>{product.name}</Name>
                            <Price>{`${selectedStorage.price} EUR`}</Price>
                        </ProductInfo>

                        <ProductOptions
                            aria-description="Product options"
                            colorOptions={product.colorOptions}
                            selectedColor={selectedColor}
                            onColorSelect={setSelectedColor}
                            storageOptions={product.storageOptions}
                            selectedStorage={selectedStorage}
                            onStorageSelect={setSelectedStorage}
                        />

                        <AddToCartButton
                            onClick={() => {
                                addToCart({
                                    id: product.id,
                                    brand: product.brand,
                                    name: product.name,
                                    color: selectedColor,
                                    storage: selectedStorage,
                                });
                            }}
                            disabled={!selectedStorage || !selectedColor}
                        />
                    </Flexbox>
                </ProductWrapper>
                <ProductSpecifications
                    specs={{
                        brand: product.brand,
                        name: product.name,
                        description: product.description,
                        ...product.specs,
                    }}
                />

                <section aria-labelledby="similar-heading">
                    <SimilarProductsWrapperTitle id="similar-heading">
                        SIMILAR ITEMS
                    </SimilarProductsWrapperTitle>
                    <Carousel visibleCount={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                        {product.similarProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </Carousel>
                </section>
            </PageWrapper>
        </>
    );
};

ProductDetailPage.getLayout = (page: React.ReactElement) => {
    return <CartHeaderLayout>{page}</CartHeaderLayout>;
};

ProductDetailPage.metadata = (props: ProductDetailPageProps) => {
    return {
        title: `${props.product.name} Details`,
        description: 'Specs and details of the product ' + props.product.name,
    };
};

export default ProductDetailPage;
