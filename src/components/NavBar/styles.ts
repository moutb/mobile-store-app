import Image from 'next/image';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.background};
    padding: var(--spacing-4) 0;
`;

export const BackButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-1);
    background: none;
    border: none;
    font-size: var(--font-size-sm);
    line-height: var(--font-size-sm);
    font-weight: var(--font-weight-thin);
    color: var(--color-text);
    cursor: pointer;
    text-transform: uppercase;

    &:focus {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
`;

export const Icon = styled(Image)`
    flex-shrink: 0;
`;
