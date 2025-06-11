import { media } from '@/styles/media';
import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;

    & .product--card-item {
        --product-card-brand-font-size: var(--font-size-sm);
        --product-card-brand-line-height: var(--font-size-sm);
        --product-card-name-font-size: var(--font-size-sm);
        --product-card-name-line-height: var(--font-size-sm);
        --product-card-price-font-size: var(--font-size-base);
        --product-card-price-line-height: var(--font-size-base);
    }
`;

export const ProductWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--spacing-6);
    align-items: stretch;
    justify-content: space-around;

    ${media('md')(css`
        flex-flow: row nowrap;
        padding: var(--spacing-6) 0;
    `)}
`;

export const Image = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Name = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
    text-transform: uppercase;
    margin: 0;
`;

export const Price = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
    margin: 0;
    letter-spacing: -0.5px;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
`;

export const Label = styled.span`
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const SimilarProductsWrapperTitle = styled.h2`
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
    letter-spacing: -0.5px;
    text-transform: uppercase;
    margin-top: var(--product-similar-items-margin-top);
    margin-bottom: var(--product-similar-items-margin-bottom);
`;
