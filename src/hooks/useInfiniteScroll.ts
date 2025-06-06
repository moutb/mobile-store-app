import { useRef, useCallback } from 'react';

interface Options {
    fetchMore: () => void;
    hasMore: boolean;
    loading: boolean;
}

export const useInfiniteScroll = ({ fetchMore, hasMore, loading }: Options) => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    const setRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (observerRef.current) observerRef.current.disconnect();

            if (node && hasMore && !loading) {
                observerRef.current = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) {
                        fetchMore();
                    }
                });

                observerRef.current.observe(node);
            }
        },
        [fetchMore, hasMore, loading],
    );

    return { setRef };
};
