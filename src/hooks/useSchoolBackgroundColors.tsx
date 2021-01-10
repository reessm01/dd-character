import { useEffect, useState } from 'react';
import { Spell } from '../interfaces';

export function useSchoolBackgroundColors(spell: Spell) {
    const [backgroundColor, setBackgroundColor] = useState('bg-white');

    useEffect(() => {
        setBackgroundColor(`bg-${spell?.school?.name?.toLowerCase()}` || 'bg-white');
    }, [spell]);

    return { backgroundColor, setBackgroundColor };
}
