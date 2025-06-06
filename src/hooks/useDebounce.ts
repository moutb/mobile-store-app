import { useEffect, useState } from 'react';

/**
 * Hook for applying a debounce effect to a value.
 *
 * @param value - the value to debounce (ie: search input )
 * @param delay - waiting time in milliseconds before updating the value
 * @returns Updated debounced value after the specified delay
 */
export const useDebounce = <T>(value: T, delay: number = 300): T => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};
