import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }


    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.typography.fontFamily};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }


    .custom-scrollbar {
        overflow-x: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--color-primary) var(--color-secondary);
    }

    .custom-scrollbar::-webkit-scrollbar {
        width: 12px;
        height: 0.5px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
        background-color: var(--color-secondary);
        border-radius: 2px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
        border-radius: 2px;
    }

    ${variables}
`;
