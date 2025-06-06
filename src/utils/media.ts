import { DefaultTheme, css } from 'styled-components';

type Breakpoint = keyof DefaultTheme['breakpoints'];

export const media =
    (bp: Breakpoint) =>
    (style: ReturnType<typeof css>) =>
    ({ theme }: { theme: DefaultTheme }) => css`
        @media (min-width: ${theme.breakpoints[bp]}) {
            ${style}
        }
    `;
