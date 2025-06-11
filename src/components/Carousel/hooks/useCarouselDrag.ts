import { useRef, useEffect } from 'react';
import type { UseCarouselDragOptions } from '../types';

export function useCarouselDrag({ containerRef }: UseCarouselDragOptions) {
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const hasMoved = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const startDrag = (clientX: number) => {
            isDragging.current = true;
            startX.current = clientX;
            scrollLeft.current = container.scrollLeft;
            hasMoved.current = false;
            document.body.style.userSelect = 'none';
        };

        const moveDrag = (clientX: number) => {
            if (!isDragging.current) return;
            const delta = clientX - startX.current;
            if (Math.abs(delta) > 4) hasMoved.current = true;
            container.scrollLeft = scrollLeft.current - delta;
        };

        const endDrag = () => {
            isDragging.current = false;
            document.body.style.userSelect = '';
        };

        const onMouseDown = (e: MouseEvent) => {
            if (e.button !== 0) return;
            if (
                (e.target as HTMLElement).tagName === 'IMG' ||
                (e.target as HTMLElement).tagName === 'A'
            ) {
                e.preventDefault();
            }
            startDrag(e.clientX);
        };

        const onMouseMove = (e: MouseEvent) => moveDrag(e.clientX);
        const onMouseUp = endDrag;
        const onMouseLeave = endDrag;

        const onTouchStart = (e: TouchEvent) => startDrag(e.touches[0].clientX);
        const onTouchMove = (e: TouchEvent) => moveDrag(e.touches[0].clientX);
        const onTouchEnd = endDrag;

        const onClick = (e: MouseEvent) => {
            if (hasMoved.current) {
                e.preventDefault();
                e.stopPropagation();
                hasMoved.current = false;
            }
        };

        container.addEventListener('mousedown', onMouseDown);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mouseleave', onMouseLeave);
        container.addEventListener('touchstart', onTouchStart, {
            passive: true,
        });
        container.addEventListener('touchmove', onTouchMove, { passive: true });
        container.addEventListener('touchend', onTouchEnd);
        container.addEventListener('click', onClick, true);

        return () => {
            container.removeEventListener('mousedown', onMouseDown);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mouseleave', onMouseLeave);
            container.removeEventListener('touchstart', onTouchStart);
            container.removeEventListener('touchmove', onTouchMove);
            container.removeEventListener('touchend', onTouchEnd);
            container.removeEventListener('click', onClick, true);
        };
    }, [containerRef]);
}
