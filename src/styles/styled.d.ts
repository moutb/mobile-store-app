import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            light: string;
            header: string;
            white: string;
            danger: string;
        };
        spacing: (factor: number) => string;
        typography: {
            fontFamily: string;
            fontSize: {
                xs: string;
                sm: string;
                base: string;
                md: string;
                lg: string;
                xl: string;
            };
            fontWeight: {
                thin: string;
                normal: string;
                bold: string;
            };
        };
        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        containerWidths: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
