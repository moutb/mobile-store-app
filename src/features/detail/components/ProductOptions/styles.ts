import styled from 'styled-components';

export const OptionsContainer = styled.fieldset`
    border: none;
    width: 100%;
`;

export const OptionTitle = styled.legend`
    text-transform: uppercase;
    font-size: var(--product-option-title-font-size);
    font-weight: var(--product-option-title-font-weight);
    line-height: var(--product-option-title-line-height);
    margin-bottom: var(--product-option-title-margin-bottom);
    letter-spacing: var(--product-option-title-letter-spacing);
`;

export const ColorOptions = styled.div`
    display: flex;
    gap: var(--product-color-options-gap);
    margin-bottom: 1rem;
`;

export const ColorBox = styled.div<{ $selected: boolean }>`
    width: var(--product-color-options-width);
    height: var(--product-color-options-height);
    transition: border 0.2s ease-in-out;
    border-width: ${({ $selected }) => ($selected ? '2px' : '1px')};
    border-style: solid;
    border-color: ${({ theme, $selected }) =>
        $selected ? theme.colors.primary : theme.colors.light};
    box-shadow: inset 0 0 0 1px white;
    cursor: pointer;

    &:focus-visible {
        outline: 2px var(--color-focus);
        outline-offset: 2px;
        border-radius: 4px;
    }
`;

export const ColorName = styled.span`
    font-size: var(--product-color-option-name-font-size);
    font-weight: var(--product-color-option-name-font-weight);
`;

export const StorageGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StorageOption = styled.div<{ $selected: boolean }>`
    padding: var(--product-storage-options-padding);
    transition: border 0.6s ease-in-out;
    border: 1px solid
        ${({ theme, $selected }) =>
            $selected ? theme.colors.primary : theme.colors.light};
    background: ${({ $selected }) => ($selected ? '#fff' : 'transparent')};
    cursor: pointer;
    font: inherit;
    font-weight: var(--product-storage-options-font-weight);

    &:focus-visible {
        outline: 2px var(--color-focus);
        outline-offset: 2px;
        border-radius: 4px;
    }
`;
