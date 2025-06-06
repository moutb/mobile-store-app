'use client';

import { ProductListItem } from '@/types/product';
import {
    Brand,
    Card,
    ImageWrapper,
    Info,
    Name,
    Price,
    ProductImage,
    ProductLink,
} from './styles';

export default function ProductCard({ product }: { product: ProductListItem }) {
    return (
        <Card aria-labelledby={`product-${product.id}`}>
            <ProductLink
                href={`/products/${product.id}`}
                aria-label={`View details of ${product.name}`}
            >
                <ImageWrapper>
                    <ProductImage
                        src={product.imageUrl}
                        alt={`Picture of ${product.name}`}
                        width={312}
                        height={257}
                    />
                </ImageWrapper>
                <Info>
                    <Brand>{product.brand}</Brand>
                    <Name id={`product-${product.id}`} tabIndex={-1}>
                        {product.name}
                    </Name>
                    <Price>{product.basePrice} EUR</Price>
                </Info>
            </ProductLink>
        </Card>
    );
}
