import Image from 'next/image';
import styled from 'styled-components';
import Flexbox from '../Flexbox';
import { SearchBarProps } from './types';

export default function SearchBar({
    value,
    onChange,
    onKeyDown,
    disabled = false,
}: SearchBarProps) {
    return (
        <Flexbox
            as="form"
            role="search"
            aria-label="Search products"
            style={{ width: '100%' }}
        >
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <InputWrapper>
                <Input
                    id="search"
                    type="text"
                    name="search"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={(e) => onKeyDown && onKeyDown(e)}
                    placeholder="Search for a smartphone..."
                    disabled={disabled}
                />
                {value && (
                    <ClearButton
                        type="button"
                        onClick={() => onChange('')}
                        aria-label="Clear search input"
                    >
                        <Image src="/close.svg" alt="" width={12} height={12} />
                    </ClearButton>
                )}
            </InputWrapper>
        </Flexbox>
    );
}

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    width: 100%;
    position: relative;
`;

const Input = styled.input`
    flex: 1;
    max-width: 100%;
    font-size: var(--font-size-lg);
    line-height: var(--font-size-lg);
    font-weight: var(--font-weight-thin);
    padding-top: var(--spacing-2);
    padding-bottom: var(--spacing-2);
    padding-right: var(--spacing-4);
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
        color: var(--color-light);
        font-weight: var(--font-weight-thin);
    }

    &:disabled {
        opacity: 0.5;
    }
`;

const ClearButton = styled.button`
    background: none;
    border: none;
    padding: var(--spacing-1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 2px;

    &:focus {
        outline: 2px solid #000;
    }
`;
