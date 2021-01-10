import React, { ReactElement } from 'react';
import { SpecialText } from '../components';
import { regexCollection } from '../helpers';

export interface ITextFormatClient {
    processText(text: string): ReactElement;
}

export class TextFormatClient implements ITextFormatClient {
    public processText(text: string): ReactElement {
        const boldOn = [1, 2];
        const wordCount = text.split(' ').length;

        if (boldOn.indexOf(wordCount) >= 0) {
            return (
                <span>
                    <b>{`${text.replace('.', '')}`}</b>
                </span>
            );
        }

        return this.parseToReactElement(text);
    }

    private determineSpecialTextBlocks(text: string) {
        let textCopy = text;
        regexCollection.forEach((regexEntry) => {
            textCopy = textCopy.replaceAll(regexEntry.re, (match: string) => {
                return `_${match}_`;
            });
        });

        return textCopy;
    }

    private parseToReactElement(text: string): ReactElement {
        const textCopy = this.determineSpecialTextBlocks(text);
        const result = textCopy.split('_').map((entry: string) => {
            for (const regexEntry of regexCollection) {
                if (regexEntry.re.test(entry)) {
                    return <SpecialText subText={entry} tag={regexEntry.options.tag} />;
                }
            }
            return <span>{entry}</span>;
        });

        return <>{result}</>;
    }
}
