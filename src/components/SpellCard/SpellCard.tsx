import React, { ReactElement } from 'react';
import { Card } from 'react-bootstrap';
import { Dnd5eApiPreview, Spell } from '../../interfaces';
import { ExpandoCardText, SpellRequirements } from '..';
import ordinal from 'ordinal';
import { TextFormatClient } from '../../services';

export interface SpellCardParams {
    spell: Spell;
    spellSelected: Dnd5eApiPreview;
}

function determineSpellLevel(spell: Spell): string {
    if (spell) {
        if (spell.level > 0) {
            return `${ordinal(spell?.level)}-level`;
        }
        return 'Cantrip';
    }

    return '';
}

export function SpellCard({ spell, spellSelected }: SpellCardParams) {
    const textClient = new TextFormatClient();
    const conditionalDisplay = spell ? 'd-block' : 'd-none';
    const processedText: ReactElement[] = spell?.desc.map((textEntry) => textClient.processText(textEntry)) || [];
    const firstEntry = processedText?.shift() || '';
    const spellRitual = spell && spell.ritual ? ' (ritual)' : '';
    const spellLevel = determineSpellLevel(spell);
    const spellCategory = spell ? `${spellLevel} ${spell.school.name}${spellRitual}` : '';

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
                    {processedText.length ? <ExpandoCardText handleSelected={spellSelected} text={processedText} /> : null}
                </Card.Body>
            )}
        </Card>
    );
}
