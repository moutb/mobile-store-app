import { render } from '@testing-library/react';
import Carousel from '../index';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

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

describe('Carousel Snapshot Tests', () => {
    it('renders correctly and matches snapshot', () => {
        const { container } = renderCarousel();
        expect(container).toMatchSnapshot();
    });
});
