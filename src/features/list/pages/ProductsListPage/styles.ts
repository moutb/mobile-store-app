import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(var(--product-card-width), 1fr)
    );
    width: 100%;
    margin-top: var(--spacing-4);

    & > * {
        border: var(--product-card-border-width) solid var(--color-primary);
        height: 344px;
    }

    --product-card-border-width: 1px;
    --product-card-border-color: var(--color-secondary);
    --product-card-width: 344px;
`;

export const Sentinel = styled.div`
    height: 1px;
`;

export const Loading = styled.div`
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colors.primary};
`;
