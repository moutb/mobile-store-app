/**
 * Returns a keyboard event handler for navigating and selecting options in a list using keyboard keys,
 * focusing on accesibility.
 *
 * @template T - The type of the option objects.
 * @template K - The key of the property used to identify the current option.
 * @param prop - The property key of the option used for comparison (e.g., 'capacity' or 'name').
 * @param options - The array of available options.
 * @param current - The currently selected option.
 * @param onSelect - Callback to call when an option is selected.
 * @returns A React.KeyboardEvent handler for keyboard navigation and selection.
 *
 * - 'Enter' or 'Space': Selects the current option.
 * - 'ArrowRight' or 'ArrowDown': Moves to the next option.
 * - 'ArrowLeft' or 'ArrowUp': Moves to the previous option.
 */
const handleOptionKeyDown: <T, K extends keyof T>(
    prop: K,
    options: T[],
    current: T,
    onSelect: (item: T) => void,
) => (e: React.KeyboardEvent<HTMLElement>) => void =
    (prop, options, current, onSelect) => (e) => {
        const currentIndex = options.findIndex(
            (c) => c[prop] === current[prop],
        );
        if (e.key === 'Enter' || e.key === ' ') {
            onSelect(current);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const next = options[(currentIndex + 1) % options.length];
            onSelect(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const prev =
                options[(currentIndex - 1 + options.length) % options.length];
            onSelect(prev);
        }
    };

export default handleOptionKeyDown;
