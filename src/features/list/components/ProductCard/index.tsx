'use client';

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
import { ProductCardProps } from '../../types';
import './variables.css';

export default function ProductCard({ product, className }: ProductCardProps) {
    return (
        <Card
            className={`product--card-item${className ? '  ' + className : ''}`}
            aria-labelledby={`product-${product.id}`}
        >
            <ProductLink
                href={`/products/${product.id}`}
                aria-label={`View details of ${product.name}`}
            >
                <ImageWrapper>
                    <ProductImage
                        src={product.imageUrl}
                        alt={`Picture of ${product.name}`}
                        width={240}
                        height={240}
                        draggable={false}
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
