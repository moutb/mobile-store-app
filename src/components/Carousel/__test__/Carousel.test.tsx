import { render, fireEvent, screen } from '@testing-library/react';
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

describe('Carousel integration tests', () => {
    beforeAll(() => {
        Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
            configurable: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value: function (options: any) {
                this.scrollLeft =
                    typeof options === 'object' ? (options.left ?? 0) : 0;
            },
        });
    });
    it('scrolls on progress bar click', () => {
        renderCarousel();

        const progressBar = screen.getByTestId('carousel-progress');
        fireEvent.click(progressBar, {
            clientX: 10,
        });
    });

    it('allows dragging horizontally', () => {
        const { getByTestId } = renderCarousel();
        const track = getByTestId('carousel-track');

        fireEvent.mouseDown(track, { clientX: 300 });
        fireEvent.mouseMove(track, { clientX: 200 });
        fireEvent.mouseUp(track);

        expect(track?.scrollLeft).toBeGreaterThan(0);
    });

    it('handles touch drag events', () => {
        const { getByTestId } = renderCarousel();
        const track = getByTestId('carousel-track');

        fireEvent.touchStart(track, { touches: [{ clientX: 300 }] });
        fireEvent.touchMove(track, { touches: [{ clientX: 200 }] });
        fireEvent.touchEnd(track);

        expect(track?.scrollLeft).toBeGreaterThan(0);
    });
});
