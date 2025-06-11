import { render, fireEvent } from '@testing-library/react';
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

describe('Carousel Responsive Visible Items Count Tests', () => {
    let originalInnerWidth: number;

    beforeEach(() => {
        originalInnerWidth = global.innerWidth;
    });

    afterEach(() => {
        global.innerWidth = originalInnerWidth;
    });

    it('uses correct visible count for mobile', () => {
        global.innerWidth = 375;
        const { container } = renderCarousel({
            visibleCount: { xs: 1, md: 3 },
        });
        fireEvent(window, new Event('resize'));

        const items = container.querySelectorAll('[role="group"] > *');
        expect(items.length).toBeGreaterThan(0);

        const expectedWidth = 'calc(100%)'; // 1 item visible
        expect(items[0]).toHaveStyle(`flex: 0 0 ${expectedWidth}`);
    });

    it('uses correct visible count for desktop', () => {
        global.innerWidth = 1280;
        const { container } = renderCarousel({
            visibleCount: { xs: 1, md: 3, xl: 5 },
        });
        fireEvent(window, new Event('resize'));

        const items = container.querySelectorAll('[role="group"] > *');
        expect(items.length).toBeGreaterThan(0);

        const expectedWidth = 'calc(100% / 5)'; // 5 items visible
        expect(items[0]).toHaveStyle(`flex: 0 0 ${expectedWidth}`);
    });
});
