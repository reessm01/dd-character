import { useEffect, useState } from 'react';
import { ISpellRequirements } from '../components';

export interface ContentDetails extends ISpellRequirements {
    imageUrl: string;
}

export function useSpellRequirements(params: ISpellRequirements): ContentDetails {
    const [castingTime, setCastingTime] = useState('');
    const [range, setRange] = useState('');
    const [components, setComponents] = useState<string[]>([]);
    const [duration, setDuration] = useState('');
    const [school, setSchool] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (params.school) {
            setCastingTime(params.castingTime);
            setRange(params.range);
            setComponents(params.components);
            setDuration(params.duration);
            setSchool(params.school);
            setImageUrl('');
        }
    }, [params]);

    return { castingTime, range, components, duration, school, imageUrl };
}
