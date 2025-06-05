import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;

    max-width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        max-width: var(--container-width-xs);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        max-width: var(--container-width-sm);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: var(--container-width-md);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: var(--container-width-lg);
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
        max-width: var(--container-width-xl);
    }
`;

export default Container;
