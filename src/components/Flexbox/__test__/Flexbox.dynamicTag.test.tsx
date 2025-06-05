import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Flexbox from '@/components/Flexbox';

const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Flexbox dynamic tag', () => {
    it('renders as a <section> when specified', () => {
        const { container } = renderWithTheme(
            <Flexbox as="section">Content</Flexbox>,
        );
        expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('renders as a <main> when specified', () => {
        const { container } = renderWithTheme(
            <Flexbox as="main">Main content</Flexbox>,
        );
        expect(container.querySelector('main')).toBeInTheDocument();
    });

    it('defaults to a <div> if no "as" prop is provided', () => {
        const { container } = renderWithTheme(<Flexbox>Default</Flexbox>);
        expect(container.querySelector('div')).toBeInTheDocument();
    });
});
