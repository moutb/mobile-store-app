/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, act } from '@testing-library/react';
import { useInfiniteScroll } from '../useInfiniteScroll';

import {
    observeMock,
    disconnectMock,
    intersectionCallback,
} from '@/__test__/mocks/intersection-observer';

describe('useInfiniteScroll', () => {
    it('calls fetchMore when element is intersecting', () => {
        const fetchMore = jest.fn();
        const hasMore = true;
        const loading = false;

        const TestComponent = () => {
            const { setRef } = useInfiniteScroll({
                fetchMore,
                hasMore,
                loading,
            });
            return <div data-testid="sentinel" ref={setRef} />;
        };

        const { getByTestId } = render(<TestComponent />);
        const sentinel = getByTestId('sentinel');

        act(() => {
            intersectionCallback([
                {
                    isIntersecting: true,
                    target: sentinel,
                    intersectionRatio: 1,
                    time: 0,
                    boundingClientRect: {} as any,
                    intersectionRect: {} as any,
                    rootBounds: {} as any,
                },
            ]);
        });

        expect(fetchMore).toHaveBeenCalledTimes(1);
    });

    it('does NOT call fetchMore when hasMore is false', () => {
        const fetchMore = jest.fn();
        const hasMore = false;
        const loading = false;

        const TestComponent = () => {
            const { setRef } = useInfiniteScroll({
                fetchMore,
                hasMore,
                loading,
            });
            return <div data-testid="sentinel" ref={setRef} />;
        };

        render(<TestComponent />);

        expect(observeMock).not.toHaveBeenCalled();
    });

    it('does NOT call fetchMore when loading is true', () => {
        const fetchMore = jest.fn();
        const hasMore = true;
        const loading = true;

        const TestComponent = () => {
            const { setRef } = useInfiniteScroll({
                fetchMore,
                hasMore,
                loading,
            });
            return <div data-testid="sentinel" ref={setRef} />;
        };

        render(<TestComponent />);
        expect(observeMock).not.toHaveBeenCalled();
    });

    it('disconnects previous observer on ref update', () => {
        const fetchMore = jest.fn();
        const hasMore = true;
        const loading = false;

        const TestComponent = ({ nodeId }: { nodeId: string }) => {
            const { setRef } = useInfiniteScroll({
                fetchMore,
                hasMore,
                loading,
            });
            return <div data-testid={nodeId} ref={setRef} />;
        };

        const { rerender } = render(<TestComponent nodeId="sentinel-1" />);
        rerender(<div />);
        rerender(<TestComponent nodeId="sentinel-2" />);

        expect(disconnectMock).toHaveBeenCalled();
    });
});
