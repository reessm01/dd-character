import React from 'react';
import { Card } from 'react-bootstrap';
import { Spell } from '../../interfaces';
import { ExpandoCardText, SpellRequirements } from '..';
import ordinal from 'ordinal';

export interface SpellCardParams {
    spell: Spell;
}

export function SpellCard({ spell }: SpellCardParams) {
    const conditionalDisplay = spell ? 'd-block' : 'd-none';
    const firstEntry = spell?.desc[0] || '';
    const text = spell?.desc.slice(1) || [];
    const spellRitual = spell && spell.ritual ? ' (ritual)' : '';
    const spellCategory = spell ? `${ordinal(spell?.level)}-level ${spell.school.name}${spellRitual}` : '';

    return (
        <Card className={`${conditionalDisplay} mx-3 mt-2 w-100`}>
            {conditionalDisplay === 'd-block' && (
                <Card.Body>
                    <Card.Title>{spell?.name || ''}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{spellCategory}</Card.Subtitle>
                    <SpellRequirements
                        castingTime={spell?.casting_time || ''}
                        range={spell?.range || ''}
                        components={spell?.components || []}
                        duration={spell?.duration || ''}
                        school={spell?.school.name || ''}
                    />
                    <Card.Text className="text-justify">{firstEntry}</Card.Text>
                    {text.length ? <ExpandoCardText text={text} /> : null}
                </Card.Body>
            )}
        </Card>
    );
}
