'use client';

import { theme } from '@/styles/theme';
import { useEffect, useState } from 'react';
import type { UseResponsiveVisibleCountArgs } from '../types';

function getCount(width: number, args: UseResponsiveVisibleCountArgs | number) {
    if (typeof args === 'number') return args;
    const breakpoints = theme.breakpoints;
    const fallback = args.xs; // siempre debe estar definido

    const { sm, md, lg, xl } = args;

    if (width >= parseInt(breakpoints.xl) && xl !== undefined) return xl;
    if (width >= parseInt(breakpoints.lg) && lg !== undefined) return lg;
    if (width >= parseInt(breakpoints.md) && md !== undefined) return md;
    if (width >= parseInt(breakpoints.sm) && sm !== undefined) return sm;

    return fallback;
}

export function useResponsiveVisibleCount(
    args: UseResponsiveVisibleCountArgs | number,
) {
    const [visibleCount, setVisibleCount] = useState(getCount(1, args));

    useEffect(() => {
        function handleResize() {
            setVisibleCount(getCount(window.innerWidth, args));
        }

        // run once on mount
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [args]);

    return visibleCount;
}
