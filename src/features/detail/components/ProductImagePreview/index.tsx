import Image from 'next/image';
import { ProductColorOption } from '@/types/product';
import styled, { css } from 'styled-components';
import { media } from '@/styles/media';

export default function ProductImagePreview({
    productName,
    selectedColor,
}: {
    productName: string;
    selectedColor: ProductColorOption;
}) {
    return (
        <ImageWrapper>
            <Image
                src={selectedColor.imageUrl}
                alt={`View of ${productName} in color ${selectedColor.name}`}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
                priority={true}
            />
        </ImageWrapper>
    );
}

const ImageWrapper = styled.div`
    position: relative;
    height: var(--product-image-wrapper-height);
    width: 100%;

    ${media('md')(css`
        height: initial;
        width: var(--product-image-wrapper-md-width);
    `)}
`;
