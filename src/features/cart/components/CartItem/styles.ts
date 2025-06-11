import { media } from '@/styles/media';
import Image from 'next/image';
import styled from 'styled-components';
import { css } from 'styled-components';

export const ItemContainer = styled.div`
    display: flex;
    gap: var(--spacing-4);
    align-items: center;
    padding-bottom: var(--spacing-4);
`;

export const ProductImageWrapper = styled.div`
    position: relative;
    height: var(--product-image-wrapper-height);
    width: 40%;

    ${media('md')(css`
        height: var(--product-image-wrapper-md-width);
        width: var(--product-image-wrapper-md-width);
    `)}
`;

export const ProductImage = styled(Image)`
    flex-shrink: 0;
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    height: 100%;
    max-height: var(--product-info-max-height);
`;

const ProductTextInfo = css`
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-thin);
    text-transform: uppercase;
`;

export const Name = styled.h2`
    ${ProductTextInfo}
`;

export const Description = styled.p`
    ${ProductTextInfo}
`;

export const Price = styled.p`
    ${ProductTextInfo}
    margin-top: var(--spacing-4);
`;

export const Spacer = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    width: 1px;
`;

export const RemoveButton = styled.button`
    align-self: flex-start;
    background: none;
    border: none;
    padding: 0;
    color: var(--color-danger);
    font-size: var(--font-size-sm);
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;
