import React, { ReactElement } from 'react';
import { Table } from 'react-bootstrap';
import * as changeCase from 'change-case';
import { v4 as uuidv4 } from 'uuid';

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
    const headings = params.headings.map((entry) => <th key={uuidv4()}>{changeCase.capitalCase(entry)}</th>);
    const standardContent = params.tableContent.map((content) => <td key={uuidv4()}>{content.text}</td>);
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
