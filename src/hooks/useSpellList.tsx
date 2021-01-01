import { useEffect, useState } from 'react';
import { Dnd5eApiPreview, CommonFetchHookInputs } from '../interfaces';
import { Dnd5eApiClient } from '../services';

export function useSpellList() {
    const [spellList, setSpellList] = useState<Dnd5eApiPreview[]>([]);
    const [isSpellListLoading, setIsLoading] = useState(false);
    const [spellListError, setError] = useState('');
    const apiClient = new Dnd5eApiClient();

    useEffect(() => {
        setIsLoading(true);
        const params: CommonFetchHookInputs = {
            setIsLoading,
            setError,
            setData: setSpellList,
        };
        apiClient.getSpellList(params);
    }, []);

    return { spellList, isSpellListLoading, spellListError };
}
