import { useEffect, useState } from 'react';
import { Spell, Dnd5eApiPreview } from '../interfaces';
import { Dnd5eApiClient } from '../services';

export function useSpell(spellSelected: Dnd5eApiPreview) {
    const [spell, setSpell] = useState<Spell>();
    const [isSpellLoading, setIsLoading] = useState(false);
    const [spellError, setError] = useState('');

    useEffect(() => {
        const apiClient = new Dnd5eApiClient();
        if (spellSelected) {
            setIsLoading(true);
            apiClient
                .getSpell(spellSelected.url)
                .then((data: Spell) => {
                    setSpell(data);
                })
                .catch((e) => setError(e.message))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [spellSelected]);

    return { spell, isSpellLoading, spellError };
}
