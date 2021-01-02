import React, { useState } from 'react';
import './GenericSearchPage.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { SearchableInput, SearchableToggleProps } from '../../components';
import { useSpellList } from '../../hooks';
import { Dnd5eApiPreview, Spell } from '../../interfaces';
import { useSpell } from '../../hooks';
import { SpellCard } from '../../components/SpellCard/SpellCard';

export function GenericSearchPage() {
    const initSpellSelected: Dnd5eApiPreview = {
        index: 'acid-arrow',
        name: 'Acid Arrow',
        url: '/api/spells/acid-arrow',
    };
    const { spellList, isSpellListLoading, spellListError } = useSpellList();
    const [spellSelected, setSpellSelected] = useState<Dnd5eApiPreview>(initSpellSelected);
    const { spell, isSpellLoading, spellError } = useSpell(spellSelected);

    const inputOptions: SearchableToggleProps<Dnd5eApiPreview> = {
        suggestionKey: 'name',
        placeholderText: 'Start by typing a spell...',
        searchOptions: {
            haystack: spellList,
            keys: ['name', 'url'],
        },
        handleSelect: (suggestion: Dnd5eApiPreview) => {
            setSpellSelected(suggestion);
        },
    };

    return (
        <Container fluid>
            <Row>
                <Col className="mt-3">
                    <h3>Spell Search</h3>
                    <SearchableInput
                        searchOptions={inputOptions.searchOptions}
                        placeholderText={inputOptions.placeholderText}
                        suggestionKey={inputOptions.suggestionKey}
                        handleSelect={inputOptions.handleSelect}
                    />
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 d-flex justify-content-center">
                    <SpellCard spell={spell as Spell} />
                </Col>
            </Row>
        </Container>
    );
}
