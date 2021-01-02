import { useEffect, useState } from 'react';
import FuzzySearch from 'fuzzy-search';

export interface UseFuzzyMatchingProps<RawDataShape> {
    haystack: RawDataShape[];
    valueToMatch?: string;
    keys: string[];
}

export function useFuzzyMatching<SuggestionShape, RawDataShape>({ haystack, valueToMatch, keys }: UseFuzzyMatchingProps<RawDataShape>) {
    const [fuzzySearchResults, setFuzzySearchResults] = useState<SuggestionShape[]>([]);

    useEffect(() => {
        const defaultSearcherOptions = {
            sort: true,
        };
        const searcher = new FuzzySearch((haystack as unknown) as object[], keys, defaultSearcherOptions);
        setFuzzySearchResults((searcher.search(valueToMatch) as unknown) as SuggestionShape[]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueToMatch]);

    return fuzzySearchResults;
}
