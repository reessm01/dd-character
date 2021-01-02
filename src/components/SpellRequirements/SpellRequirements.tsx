import React, { useState } from 'react';
import { Content, GenericTable } from '..';
import { ContentDetails, useSpellRequirements } from '../../hooks/useSpellRequirements';

export interface ISpellRequirements {
    castingTime: string;
    range: string;
    components: string[];
    duration: string;
    school: string;
}

export function SpellRequirements(params: ISpellRequirements) {
    const contentDetails = useSpellRequirements(params);
    const tableHeadings = Object.keys(params);
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
            imageUrl: params.imageUrl,
        },
    ];
};
