import styled from 'styled-components';
import { AddToCartButtonProps } from '../../types';

export default function AddToCartButton({
    onClick,
    disabled = false,
}: AddToCartButtonProps) {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            aria-label="Añadir al carrito"
            aria-disabled={disabled}
        >
            Add
        </StyledButton>
    );
}

const StyledButton = styled.button<{ disabled?: boolean }>`
    width: 100%;

    padding: var(--product-add-btn-padding);
    background-color: var(--product-add-btn-background-color);
    color: var(--product-add-btn-color);
    border: none;
    font-weight: var(--product-add-btn-font-weight);
    font-size: var(--product-add-btn-font-size);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    text-transform: uppercase;

    &:hover:not(:disabled) {
        background-color: var(--product-add-btn-hover-background-color);
    }

    &:disabled {
        opacity: var(--product-add-btn-disabled-opacity);
        cursor: not-allowed;
    }
`;
