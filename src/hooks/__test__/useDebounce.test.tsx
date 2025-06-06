// src/hooks/__tests__/useDebounce.test.tsx
import { render, act } from '@testing-library/react';
import { useDebounce } from '../useDebounce';

jest.useFakeTimers();

const TestComponent = ({ value, delay }: { value: string; delay?: number }) => {
    const debouncedValue = useDebounce(value, delay ?? 300);
    return <div data-testid="output">{debouncedValue}</div>;
};

describe('useDebounce hook', () => {
    it('should update the debounced value after delay', () => {
        const { rerender, getByTestId } = render(
            <TestComponent value="initial" delay={500} />,
        );
        expect(getByTestId('output').textContent).toBe('initial');

        rerender(<TestComponent value="updated" delay={500} />);
        expect(getByTestId('output').textContent).toBe('initial');

        act(() => {
            jest.advanceTimersByTime(500);
        });

        expect(getByTestId('output').textContent).toBe('updated');
    });

    it('should debounce multiple rapid changes and settle on the last', () => {
        const { rerender, getByTestId } = render(
            <TestComponent value="a" delay={300} />,
        );
        rerender(<TestComponent value="b" delay={300} />);
        rerender(<TestComponent value="c" delay={300} />);

        act(() => {
            jest.advanceTimersByTime(299);
        });
        expect(getByTestId('output').textContent).toBe('a');

        act(() => {
            jest.advanceTimersByTime(1); // total 300ms
        });
        expect(getByTestId('output').textContent).toBe('c');
    });
});
