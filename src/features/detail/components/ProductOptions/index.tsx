'use client';
import { ProductColorOption, ProductStorageOption } from '@/types/product';
import handleOptionKeyDown from '@/utils/handleOptionKeyDown';
import {
    ColorBox,
    ColorName,
    ColorOptions,
    OptionsContainer,
    OptionTitle,
    StorageGroup,
    StorageOption,
} from './styles';
import React from 'react';

export default function ProductOptions({
    colorOptions,
    selectedColor,
    onColorSelect,
    storageOptions,
    selectedStorage,
    onStorageSelect,
}: {
    colorOptions: ProductColorOption[];
    selectedColor: ProductColorOption;
    onColorSelect: (c: ProductColorOption) => void;
    storageOptions: ProductStorageOption[];
    selectedStorage: ProductStorageOption;
    onStorageSelect: (s: ProductStorageOption) => void;
}) {
    return (
        <>
            <OptionsContainer>
                <OptionTitle id="storage-options-label">
                    Storage, how much space do you need?
                </OptionTitle>
                <StorageGroup
                    role="radiogroup"
                    aria-labelledby="storage-options-label"
                >
                    {storageOptions.map((option) => {
                        const id = `storage-${option.capacity.replace(/\s+/g, '-')}`;
                        return (
                            <>
                                <label className="sr-only" htmlFor={id}>
                                    {option.capacity}
                                </label>
                                <StorageOption
                                    key={option.capacity}
                                    id={id}
                                    aria-label={option.capacity}
                                    role="radio"
                                    aria-checked={
                                        selectedStorage.capacity ===
                                        option.capacity
                                    }
                                    tabIndex={0}
                                    onClick={() => onStorageSelect(option)}
                                    onKeyDown={(e) =>
                                        handleOptionKeyDown(
                                            'capacity',
                                            storageOptions,
                                            selectedStorage,
                                            onStorageSelect,
                                        )(e)
                                    }
                                    $selected={
                                        selectedStorage.capacity ===
                                        option.capacity
                                    }
                                >
                                    {option.capacity}
                                </StorageOption>
                            </>
                        );
                    })}
                </StorageGroup>
            </OptionsContainer>

            <OptionsContainer>
                <OptionTitle id="color-options-label">
                    Color. Pick your favourite
                </OptionTitle>
                <ColorOptions
                    role="radiogroup"
                    aria-labelledby="color-options-label"
                >
                    {colorOptions.map((color) => {
                        const id = `color-${color.name.replace(/\s+/g, '-')}`;
                        return (
                            <>
                                <label className="sr-only" htmlFor={id}>
                                    {color.name}
                                </label>
                                <ColorBox
                                    key={color.name}
                                    aria-label={color.name}
                                    id={id}
                                    role="radio"
                                    aria-checked={
                                        selectedColor.name === color.name
                                    }
                                    tabIndex={0}
                                    onClick={() => onColorSelect(color)}
                                    onKeyDown={(e) =>
                                        handleOptionKeyDown(
                                            'name',
                                            colorOptions,
                                            selectedColor,
                                            onColorSelect,
                                        )(e)
                                    }
                                    $selected={
                                        selectedColor.name === color.name
                                    }
                                    style={{ backgroundColor: color.hexCode }}
                                />
                            </>
                        );
                    })}
                </ColorOptions>
                <ColorName>{selectedColor.name}</ColorName>
            </OptionsContainer>
        </>
    );
}
