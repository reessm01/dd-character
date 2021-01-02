import React, { ReactElement } from 'react';
import { Image, Table } from 'react-bootstrap';
import * as changeCase from 'change-case';

export interface IGenericTable {
    headings: string[];
    tableContent: Content[];
}

export interface Content {
    text: string;
    imageUrl?: string;
    customElement?: ReactElement;
}

export function GenericTable(params: IGenericTable) {
    const headings = params.headings.map((entry) => <th>{changeCase.capitalCase(entry)}</th>);
    const standardContent = params.tableContent.map((content) => (
        <td>
            <Image src={content.imageUrl} />
            {content.text}
        </td>
    ));
    return (
        <Table bordered striped>
            <thead>
                <tr>{headings}</tr>
            </thead>
            <tbody>
                <tr>{standardContent}</tr>
            </tbody>
        </Table>
    );
}
