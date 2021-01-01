import { useEffect, useState } from 'react';
import { getEnvironmentDetails } from '../helpers';
import { SpellList } from '../interfaces';

export function useSpellList() {
    const [spellList, setSpellList] = useState([] as SpellList[]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const spells = '/api/spells';

    useEffect(() => {
        const baseApiUrl = getEnvironmentDetails().dd5eApi;
        setIsLoading(true);
        fetch(`${baseApiUrl}${spells}`)
            .then((res) => res.json())
            .then((data: { count: number; results: SpellList[] }) => {
                setSpellList(data.results);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return { spellList, isLoading, error };
}
