import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        header: 'var(--color-header)',
        white: 'var(--color-white)',
        danger: 'var(--color-danger)',
    },
    spacing: (factor: number) => `var(--spacing-${factor})`,
    typography: {
        fontFamily: 'var(--font-family)',
        fontSize: {
            xs: 'var(--font-size-xs)',
            sm: 'var(--font-size-sm)',
            base: 'var(--font-size-base)',
            md: 'var(--font-size-md)',
            lg: 'var(--font-size-lg)',
            xl: 'var(--font-size-xl)',
        },
        fontWeight: {
            thin: 'var(--font-weight-thin)',
            normal: 'var(--font-weight-normal)',
            bold: 'var(--font-weight-bold)',
        },
    },
    breakpoints: {
        xs: '360px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
    },
    containerWidths: {
        xs: 'var(--container-width-xs)',
        sm: 'var(--container-width-sm)',
        md: 'var(--container-width-md)',
        lg: 'var(--container-width-lg)',
        xl: 'var(--container-width-xl)',
    },
};
