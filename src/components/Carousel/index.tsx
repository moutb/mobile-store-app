'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
    CarouselItem,
    CarouselTrack,
    ProgressBar,
    ScrollThumb,
    Wrapper,
} from './styles';
import { useCarouselDrag } from './hooks/useCarouselDrag';
import { useResponsiveVisibleCount } from './hooks/useResponsiveVisibleCount';
import type { UseResponsiveVisibleCountArgs } from './types';

interface CarouselProps {
    children: React.JSX.Element[];
    visibleCount?: number | UseResponsiveVisibleCountArgs;
}

export default function Carousel({
    children,
    visibleCount = 1,
}: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [thumbWidth, setThumbWidth] = useState(0);
    const [thumbLeft, setThumbLeft] = useState(0);
    const visibleItemsCount = useResponsiveVisibleCount(visibleCount);
    useCarouselDrag({
        containerRef: containerRef as React.RefObject<HTMLElement>,
    });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const update = () => {
            const { scrollLeft, clientWidth, scrollWidth } = container;
            const ratio = clientWidth / scrollWidth;
            setThumbWidth(clientWidth * ratio);
            setThumbLeft((scrollLeft / scrollWidth) * clientWidth);
        };

        update();
        container.addEventListener('scroll', update);
        window.addEventListener('resize', update);

        return () => {
            container.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (!container) return;

        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = clickX / rect.width;
        const maxScroll = container.scrollWidth - container.clientWidth;

        container.scrollTo({
            left: ratio * maxScroll,
            behavior: 'smooth',
        });
    };

    return (
        <Wrapper role="region" aria-roledescription="carousel">
            <CarouselTrack
                ref={containerRef}
                role="group"
                data-testid="carousel-track"
            >
                {children.map((child, index) => (
                    <CarouselItem
                        key={index}
                        className="carousel--item"
                        $visibleCount={visibleItemsCount}
                    >
                        {child}
                    </CarouselItem>
                ))}
            </CarouselTrack>
            <ProgressBar
                onClick={handleProgressClick}
                data-testid="carousel-progress"
            >
                <ScrollThumb
                    style={{
                        width: `${thumbWidth}px`,
                        left: `${thumbLeft}px`,
                    }}
                />
            </ProgressBar>
        </Wrapper>
    );
}
