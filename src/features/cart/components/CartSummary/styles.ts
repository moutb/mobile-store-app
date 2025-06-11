// components/cart/styles/CartSummary.styles.ts
import { media } from '@/styles/media';
import Link from 'next/link';
import styled from 'styled-components';
import { css } from 'styled-components';

export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    margin-top: var(--spacing-6);
    padding-bottom: var(--spacing-2);
`;

export const Actions = styled.div`
    display: flex;
    gap: var(--spacing-2);
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    ${media('md')(css`
        flex-wrap: nowrap;
        justify-content: flex-end;
        gap: var(--spacing-6);
    `)}
`;

export const TotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: var(--spacing-4);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-thin);

    ${media('md')(css`
        justify-content: flex-end;
    `)}
`;

export const TotalLabel = styled.span`
    color: var(--color-text-secondary);
`;

export const TotalPrice = styled.span`
    color: var(--color-text);
`;

const ActionButton = css`
    padding: var(--spacing-4) 0;
    cursor: pointer;
    font-size: var(--font-size-xs);
    line-height: var(--font-size-xs);
    font-weight: var(--font-weight-thin);
    text-transform: uppercase;
    width: calc(50% - var(--spacing-2));
    white-space: nowrap;
    text-align: center;
    margin-top: var(--spacing-4);

    ${media('md')(css`
        max-width: 260px;
        padding: var(--spacing-4) var(--spacing-6);
        font-size: var(--font-size-sm);
        line-height: var(--font-size-sm);
        margin-top: 0;
    `)}
`;

export const OutlinedButton = styled(Link)`
    ${ActionButton}
    background: none;
    color: var(--color-text);
    border-width: 0.5px;
    border-style: solid;
    border-color: var(--color-primary);

    &:hover {
        background: var(--color-secondary);
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }

    ${media('md')(css`
        order: -1;
    `)}
`;

export const FilledButton = styled.button`
    ${ActionButton}
    background: var(--color-primary);
    color: var(--color-white);
    border: none;

    &:hover {
        opacity: 0.9;
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;
