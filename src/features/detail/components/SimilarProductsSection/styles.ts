import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: ${({ theme }) => theme.spacing(4)};
    width: var(--font-siedth);
`;

export const SectionTitle = styled.h2`
    font-size: 1.25rem;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: ${({ theme }) => theme.spacing(2)};
`;
