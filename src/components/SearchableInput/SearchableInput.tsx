import React, { useState } from 'react';
import './SearchableInput.scss';
import Autosuggest from 'react-autosuggest';
import { useFuzzyMatching, UseFuzzyMatchingProps } from '../../hooks';

export interface SearchableToggleProps<RawDataShape> {
    placeholderText: string;
    searchOptions: UseFuzzyMatchingProps<RawDataShape>;
    suggestionKey: string;
    handleSelect: Function;
}

export function SearchableInput<SuggestionShape, RawDataShape>({
    placeholderText,
    searchOptions,
    suggestionKey,
    handleSelect,
}: SearchableToggleProps<RawDataShape>) {
    const [suggestions, setSuggestions] = useState<SuggestionShape[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const fuzzySearchResults = useFuzzyMatching<SuggestionShape, RawDataShape>({ ...searchOptions, valueToMatch: searchValue });

    const getSuggestionValue = (suggestion: SuggestionShape) => {
        return (suggestion[suggestionKey as keyof SuggestionShape] as unknown) as string;
    };

    const onSuggestionsFetchRequested = () => {
        setSuggestions(fuzzySearchResults);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const renderSuggestion = (suggestion: SuggestionShape) => {
        return (
            <div onClick={() => handleSelect(suggestion)} onTouchEnd={() => handleSelect(suggestion)}>
                {suggestion[suggestionKey as keyof SuggestionShape]}
            </div>
        );
    };

    const inputProps = {
        placeholder: placeholderText,
        value: searchValue,
        onChange: (_: any, { newValue }: { newValue: string }) => {
            setSearchValue(newValue);
        },
    };

    return (
        <div className="w-100 d-flex justify-content-center">
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                multiSection={false}
            />
        </div>
    );
}
