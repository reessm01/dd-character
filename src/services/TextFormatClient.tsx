import React, { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ITextFormatClient {
    processText(text: string): ReactElement;
}

interface RegExpCollection {
    re: RegExp;
    onMatch: Function;
}

export class TextFormatClient implements ITextFormatClient {
    regexCollection: RegExpCollection[] = [
        { re: /(?:AC\s[1-9]\d?|[1-9]d\d{1,3})/gi, onMatch: (text: string) => <b>{text}</b> },
        { re: /[1-9]d\d{1,3}/gi, onMatch: () => 'test' },
    ];
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

    private parseToReactElement(text: string): ReactElement {
        const textCopy = text.replaceAll(this.regexCollection[0].re, (match) => {
            return `_${match}_`;
        });
        const result = textCopy
            .split('_')
            .filter(Boolean)
            .map((entry) => {
                if (this.regexCollection[0].re.test(entry)) {
                    return (
                        <span>
                            <b key={uuidv4()}>{entry}</b>
                        </span>
                    );
                }
                return <span>{entry}</span>;
            });

        return <>{result}</>;
    }
}
