'use client';

import styled from 'styled-components';

export const CartContainer = styled.section`
    /* 100vh - header */
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    padding-top: var(--spacing-6);
    gap: var(spacing-4);
    justify-content: stretch;
`;

export const CartTitle = styled.h1`
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-thin);
`;

export const EmptyMessage = styled.p`
    font-size: var(--font-size-base);
    text-align: center;
    margin-top: var(--spacing-6);
`;

export const CartItemsContainer = styled.div`
    display: flex;
    margin-top: var(--spacing-6);
    width: 100%;
    justify-content: space-between;
    padding-bottom: var(--spacing-6);
    flex: 1;
    flex-flow: column nowrap;

    & > * {
        border-bottom: 0.5px solid var(--color-primary);
    }
    & > *:nth-last-child(2),
    & > *:last-child {
        border-bottom: none;
    }
`;
