import React from 'react';
import { Content, GenericTable } from '..';
import { ContentDetails, useSpellRequirements } from '../../hooks';

export interface ISpellRequirements {
    castingTime: string;
    range: string;
    components: string[];
    duration: string;
    school: string;
}

export function SpellRequirements(params: ISpellRequirements) {
    const contentDetails = useSpellRequirements(params);
    const tableHeadings = ['Casting Time', 'Components', 'Duration', 'Range', 'School'];
    const tableContent: Content[] = mapToContent(contentDetails);

    return <GenericTable headings={tableHeadings} tableContent={tableContent} />;
}

const mapToContent = (params: ContentDetails): Content[] => {
    return [
        {
            text: params.castingTime,
        },
        {
            text: params.components.toString(),
        },
        {
            text: params.duration,
        },
        {
            text: params.range,
        },
        {
            text: params.school,
        },
    ];
};
