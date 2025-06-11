import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { axe } from 'jest-axe';
import { theme } from '@/styles/theme';
import Carousel from '../index';

const mockItems = [
    <div key="1">Item 1</div>,
    <div key="2">Item 2</div>,
    <div key="3">Item 3</div>,
];

const renderCarousel = (props = {}) =>
    render(
        <ThemeProvider theme={theme}>
            <Carousel {...props}>{mockItems}</Carousel>
        </ThemeProvider>,
    );

describe('Carousel Accesibility Tests', () => {
    it('has no accessibility violations', async () => {
        const { container } = renderCarousel();
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
