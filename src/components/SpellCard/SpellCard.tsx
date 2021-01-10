import React, { ReactElement } from 'react';
import './SpellCard.scss';
import { Card } from 'react-bootstrap';
import { Dnd5eApiPreview, Spell } from '../../interfaces';
import { ExpandoCardText, SpellRequirements } from '..';
import ordinal from 'ordinal';
import { TextFormatClient } from '../../services';
import { useSchoolBackgroundColors } from '../../hooks/useSchoolBackgroundColors';

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
    const { backgroundColor } = useSchoolBackgroundColors(spell);
    const textClient = new TextFormatClient();
    const conditionalDisplay = spell ? 'd-block' : 'd-none';
    const processedText: ReactElement[] = spell?.desc.map((text) => textClient.processText(text)) || [];
    const firstEntry = processedText?.shift() || '';
    const spellRitual = spell && spell.ritual ? ' (ritual)' : '';
    const spellLevel = determineSpellLevel(spell);
    const spellCategory = spell ? `${spellLevel} ${spell.school.name}${spellRitual}` : '';

    return (
        <Card className={`${conditionalDisplay} mx-3 mt-2 w-100 card-rounded`}>
            {conditionalDisplay === 'd-block' && (
                <Card.Body>
                    <div
                        style={{
                            marginLeft: '-1.25rem',
                            marginRight: '-1.25rem',
                            marginTop: '-1.25rem',
                            padding: '1rem',
                        }}
                        className={`${backgroundColor} card-rounded-top`}
                    >
                        <Card.Title>{spell?.name || ''}</Card.Title>
                        <Card.Subtitle className="mb-2">{spellCategory}</Card.Subtitle>
                    </div>
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
