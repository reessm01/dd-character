import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TagOptions } from '../../helpers';

export interface ISpecialText {
    subText: string;
    tag: TagOptions;
}

export function SpecialText({ subText, tag }: ISpecialText) {
    const createSpecialTextElement = () => {
        if (tag === 'b') {
            return <b style={{ fontSize: '1.1rem' }}>{subText}</b>;
        }
    };
    return <span key={uuidv4()}>{createSpecialTextElement()}</span>;
}
