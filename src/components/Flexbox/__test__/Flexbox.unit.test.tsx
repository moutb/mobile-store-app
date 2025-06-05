import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Flexbox from '@/components/Flexbox';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Flexbox component', () => {
    it('renders children correctly', () => {
        const { getByText } = renderWithTheme(
            <Flexbox>
                <div>Child</div>
            </Flexbox>,
        );
        expect(getByText('Child')).toBeInTheDocument();
    });

    it('applies flex-direction: column when "column" prop is true', () => {
        const { container } = renderWithTheme(<Flexbox column />);
        expect(container.firstChild).toHaveStyleRule(
            'flex-direction',
            'column',
        );
    });

    it('applies custom align-items and justify-content', () => {
        const { container } = renderWithTheme(
            <Flexbox align="stretch" justify="space-around" />,
        );
        expect(container.firstChild).toHaveStyleRule('align-items', 'stretch');
        expect(container.firstChild).toHaveStyleRule(
            'justify-content',
            'space-around',
        );
    });

    it('applies responsive styles at "sm" breakpoint', () => {
        const { container } = renderWithTheme(
            <Flexbox sm={{ column: true, justify: 'center' }} />,
        );

        expect(container.firstChild).toHaveStyleRule(
            'flex-direction',
            'column',
            {
                media: `(min-width: ${theme.breakpoints.sm})`,
            },
        );
        expect(container.firstChild).toHaveStyleRule(
            'justify-content',
            'center',
            {
                media: `(min-width: ${theme.breakpoints.sm})`,
            },
        );
    });
});
