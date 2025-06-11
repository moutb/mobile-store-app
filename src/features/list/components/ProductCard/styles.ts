import Image from 'next/image';
import styled from 'styled-components';

export const Card = styled.article`
    padding: var(--spacing-4);
    border: var(--product-card-border-width) solid var(--color-primary);
    position: relative;
    background: var(--color-background);
    transition: background-color 0.3s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0%;
        background-color: var(--color-primary);
        z-index: 0;
        transition: height 0.8s cubic-bezier(0.1, 1, 0.8, 1);
    }

    &:hover::before {
        height: 100%;
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const ProductImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-drag: none;
    -webkit-user-drag: none;
    pointer-events: auto;
`;

export const ProductLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    text-decoration: none;
    color: inherit;
    gap: 1rem;
    transition: color 0.3s ease-in-out;

    ${Card}:hover & {
        color: var(--color-white);
    }
`;

export const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--spacing-1);
`;

export const Brand = styled.span`
    grid-column: 1 / -1;
    font-size: var(--product-card-brand-font-size);
    text-transform: uppercase;
    font-weight: var(--product-card-brand-font-weight);
`;

export const Name = styled.h2`
    font-size: var(--product-card-name-font-size);
    text-transform: uppercase;
    font-weight: var(--product-card-name-font-weight);
    line-height: var(--product-card-name-line-height);
`;

export const Price = styled.span`
    font-size: var(--product-card-price-font-size);
    font-weight: var(--product-card-price-font-weight);
    line-height: var(--product-card-price-line-height);
    align-self: end;
    justify-self: end;
`;
