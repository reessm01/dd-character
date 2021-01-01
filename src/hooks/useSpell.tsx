import { useEffect, useState } from 'react';
import { Spell, GetSpellParams, Dnd5eApiPreview } from '../interfaces';
import { Dnd5eApiClient } from '../services';

export function useSpell(spellSelected: Dnd5eApiPreview) {
    const [spell, setSpell] = useState<Spell>();
    const [isSpellLoading, setIsLoading] = useState(false);
    const [spellError, setError] = useState('');
    const apiClient = new Dnd5eApiClient();

    useEffect(() => {
        if (spellSelected) {
            setIsLoading(true);
            const params: GetSpellParams = {
                setIsLoading,
                setError,
                setData: setSpell,
                urlRef: spellSelected.url,
            };
            apiClient.getSpell(params);
        }
    }, [spellSelected]);

    return { spell, isSpellLoading, spellError };
}
