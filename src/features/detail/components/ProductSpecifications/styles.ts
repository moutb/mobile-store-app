import styled, { css } from 'styled-components';

export const Specs = styled.section`
    grid-column: 1 / -1;
    margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const SpecsTitle = styled.h2`
    text-transform: uppercase;
    font-size: var(--product-specs-table-title-font-size);
    font-weight: var(--product-specs-table-title-font-weight);
`;

export const SpecsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: var(--product-specs-table-margin-top);
`;

export const SpecsRow = styled.tr`
    border-top: var(--product-specs-table-border-width) solid var(--product-specs-table-border-color);
    border-bottom: var(--product-specs-table-border-width) solid var(--product-specs-table-border-color););
`;

const cellStyle = css`
    font-weight: var(--product-specs-table-cell-font-weight);
    line-height: var(--product-specs-table-cell-line-height);
    font-size: var(--product-specs-table-cell-font-size);
    padding: var(--product-specs-table-cell-padding);
`;

export const SpecsHeader = styled.th`
    text-align: left;
    text-transform: uppercase;
    width: 40%;
    vertical-align: top;
    ${cellStyle}
`;

export const SpecsData = styled.td`
    ${cellStyle}
`;
