import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Container from '../index';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

describe('Container', () => {
    const renderWithTheme = (ui: React.ReactElement) =>
        render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

    it('renders without crashing', () => {
        const { container } = renderWithTheme(<Container />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('applies base styles', () => {
        const { container } = renderWithTheme(<Container />);
        const node = container.firstChild;
        expect(node).toHaveStyleRule('width', '100%');
        expect(node).toHaveStyleRule('margin', '0 auto');
        expect(node).toHaveStyleRule('padding-left', 'var(--spacing-3)');
        expect(node).toHaveStyleRule('padding-right', 'var(--spacing-3)');
    });

    it('applies responsive styles based on theme breakpoints', () => {
        const { container } = renderWithTheme(<Container />);
        const node = container.firstChild;

        expect(node).toHaveStyleRule('max-width', 'var(--container-width-xs)', {
            media: `(min-width: ${theme.breakpoints.xs})`,
        });
        expect(node).toHaveStyleRule('max-width', 'var(--container-width-sm)', {
            media: `(min-width: ${theme.breakpoints.sm})`,
        });
        expect(node).toHaveStyleRule('max-width', 'var(--container-width-md)', {
            media: `(min-width: ${theme.breakpoints.md})`,
        });
        expect(node).toHaveStyleRule('max-width', 'var(--container-width-lg)', {
            media: `(min-width: ${theme.breakpoints.lg})`,
        });
        expect(node).toHaveStyleRule('max-width', 'var(--container-width-xl)', {
            media: `(min-width: ${theme.breakpoints.xl})`,
        });
    });

    it('renders as a custom HTML element using the "as" prop', () => {
        const { container } = renderWithTheme(<Container as="section" />);
        expect(container.querySelector('section')).toBeInTheDocument();
    });
});
