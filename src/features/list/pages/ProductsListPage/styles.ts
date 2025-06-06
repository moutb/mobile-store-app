import styled from 'styled-components';

export const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(344px, 1fr));
    width: 100%;

    border-left: var(--product-card-border-width) solid var(--color-primary);
    border-top: var(--product-card-border-width) solid var(--color-primary);
    & > * {
        border-right: var(--product-card-border-width) solid
            var(--color-primary);
        border-bottom: var(--product-card-border-width) solid
            var(--color-primary);
        height: 344px;
    }
`;

export const Sentinel = styled.div`
    height: 1px;
`;

export const Loading = styled.div`
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(2)};
    color: ${({ theme }) => theme.colors.primary};
`;
