import React, { useState } from 'react';
import './ExpandoCardText.scss';
import { Button, Card, Collapse } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export interface IExpandoCardText {
    text: string[];
}

export function ExpandoCardText({ text }: IExpandoCardText) {
    const [open, setOpen] = useState(false);
    const expandableTextEntry = (textEntry: string) => (
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
                <a
                    className="text-justify mt-3 text-muted cursor-hover"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    {open ? 'Hide' : 'Read more'}
                </a>
            </div>
        </>
    );
}
