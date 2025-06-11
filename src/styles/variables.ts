import { css } from 'styled-components';

export const variables = css`
    :root {
        /* Colors */
        --color-primary: #000000;
        --color-secondary: #d0d0d0;
        /*--color-background: #e0e0e0;*/
        --color-background: #ffffff;
        --color-text: #1a1a1a;
        --color-light: #ccc;
        --color-header: #1e1e1e;
        --color-white: #ffffff;
        --color-danger: #ff4d4f;
        --color-focus: #2563eb;

        /* Spacing */
        --spacing-1: 4px;
        --spacing-2: 8px;
        --spacing-3: 16px;
        --spacing-4: 24px;
        --spacing-5: 32px;
        --spacing-6: 40px;

        /* Typography */
        --font-family: 'Helvetica', 'Arial', sans-serif;
        --font-size-xs: 0.75rem;
        --font-size-sm: 0.875rem;
        --font-size-base: 1rem;
        --font-size-md: 1.15rem;
        --font-size-lg: 1.25rem;
        --font-size-xl: 1.5rem;
        --font-weight-thin: 300;
        --font-weight-normal: 400;
        --font-weight-bold: 700;

        --container-width-xs: 480px;
        --container-width-sm: 768px;
        --container-width-md: 1200px;
        --container-width-lg: 1400px;
        --container-width-xl: 1720px;

        /* Header */
        --header-height: 80px;
    }

    .product--specs-table {
        --product-image-wrapper-height: 400px;
        --product-image-wrapper-md-width: 40%;

        --product-option-title-font-size: var(--font-size-sm);
        --product-option-title-font-weight: var(--font-weight-thin);
        --product-option-title-line-height: var(--font-size-sm);
        --product-option-title-margin-top: var(--spacing-6);
        --product-option-title-margin-bottom: var(--spacing-4);
        --product-option-title-letter-spacing: -0.25px;

        --product-color-options-gap: var(--spacing-3);
        --product-color-options-width: 24px;
        --product-color-options-height: 24px;
        --product-color-option-name-font-size: var(--font-size-xs);
        --product-color-option-name-font-weight: var(--font-weight-thin);

        --product-storage-options-padding: var(--spacing-4);
        --product-storage-options-font-weight: var(--font-weight-thin);

        --product-add-btn-padding: var(--spacing-3) 0;
        --product-add-btn-background-color: var(--color-primary);
        --product-add-btn-color: var(--color-white);
        --product-add-btn-font-weight: var(--font-weight-thin);
        --product-add-btn-font-size: var(--font-size-sm);
        --product-add-btn-hover-background-color: var(--color-secondary);
        --product-add-btn-disabled-opacity: 0.5;

        --product-specs-table-title-font-size: var(--font-size-lg);
        --product-specs-table-title-font-weight: var(--font-weight-thin);
        --product-specs-table-margin-top: var(--spacing-6);
        --product-specs-table-border-width: 0.5px;
        --product-specs-table-border-color: var(--color-primary);
        --product-specs-table-cell-padding: var(--spacing-3) 0;
        --product-specs-table-cell-font-weight: var(--font-weight-thin);
        --product-specs-table-cell-font-size: var(--font-size-sm);
        --product-specs-table-cell-line-height: 1.25rem;

        --product-similar-products-card-width: 300px;
        --product-similar-items-margin-top: 80px;
        --product-similar-items-margin-bottom: var(--spacing-6);
        --product-card-border-width: 0.25px;
        --product-card-border-color: var(--color-secondary);
    }

    .product--card-item {
        --product-card-border-width: 0.5px;
        --product-card-border-color: var(--color-primary);
        --product-card-width: 344px;

        --product-card-brand-font-size: var(--font-size-xs);
        --product-card-brand-font-weight: var(--font-weight-thin);
        --product-card-name-font-size: var(--font-size-md);
        --product-card-name-font-weight: var(--font-weight-thin);
        --product-card-name-line-height: var(--font-size-md);

        --product-card-price-font-size: var(--font-size-md);
        --product-card-price-font-weight: var(--font-weight-thin);
        --product-card-price-line-height: var(--font-size-sm);
    }

    .cart--product-item {
        --product-image-wrapper-height: 160px;
        --product-image-wrapper-md-width: 240px;
        --product-info-max-height: 160px;
    }
`;
