import React, { ReactElement, useEffect, useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export interface IExpandoCardText<SelectedDataShape> {
    text: ReactElement[];
    handleSelected: SelectedDataShape;
}

export function ExpandoCardText<SelectedDataShape>({ text, handleSelected }: IExpandoCardText<SelectedDataShape>) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [handleSelected]);

    const expandableTextEntry = (textEntry: ReactElement) => (
        <Card.Text className="text-justify" key={uuidv4()}>
            {textEntry}
        </Card.Text>
    );
    const expandableComponent = text.map((entry) => expandableTextEntry(entry));

    return (
        <>
            <Collapse in={open}>
                <div className="mb-0" id="example-collapse-text">
                    {expandableComponent}
                </div>
            </Collapse>
            <div className="d-flex justify-content-end">
                <button
                    className="text-justify mt-3 text-muted anchorButton cursorHover"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <span>{open ? 'Hide' : 'Read more'}</span>
                </button>
            </div>
        </>
    );
}
