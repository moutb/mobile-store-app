import {
    useRouter,
    useSearchParams as nextUseSearchParams,
} from 'next/navigation';
import { useState } from 'react';

const SEARCH_PARAM_KEY = 'q';

export default function useSearchParams() {
    const router = useRouter();
    const searchParams = nextUseSearchParams();

    const initialQuery = searchParams.get(SEARCH_PARAM_KEY) || '';
    const [search, setSearch] = useState(initialQuery);

    const refreshQueryParams = () => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        if (search) {
            params.set(SEARCH_PARAM_KEY, search);
        } else {
            params.delete(SEARCH_PARAM_KEY);
        }
        const hasParams = Array.from(params.entries()).length > 0;
        if (searchParams.toString() !== params.toString()) {
            router.push(hasParams ? `?${params.toString()}` : '', {
                scroll: false,
            });
        }
    };

    return { search, setSearch, refreshQueryParams };
}
