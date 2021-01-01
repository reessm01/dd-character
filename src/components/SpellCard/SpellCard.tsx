import React from 'react';
import { Card } from 'react-bootstrap';
import { Spell } from '../../interfaces';

export interface SpellCardParams {
    spell: Spell;
}

export function SpellCard({ spell }: SpellCardParams) {
    const conditionalDisplay = spell ? 'd-block' : 'd-none';

    return (
        <Card className={`${conditionalDisplay} mx-3`}>
            {conditionalDisplay === 'd-block' && (
                <Card.Body>
                    <Card.Title>{spell?.name || ''}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{spell.school?.name || ''}</Card.Subtitle>
                    {spell.desc?.map((entry) => (
                        <Card.Text className="text-justify">{entry}</Card.Text>
                    ))}
                </Card.Body>
            )}
        </Card>
    );
}
