import React, { useState } from 'react';
import './GenericSearchPage.scss';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { SearchableInput, SearchableToggleProps } from '../../components';
import { useSpellList } from '../../hooks';
import { Dnd5eApiPreview, Spell } from '../../interfaces';
import { useSpell } from '../../hooks';
import { SpellCard } from '../../components';

export function GenericSearchPage() {
    const initSpellSelected: Dnd5eApiPreview = {
        index: 'acid-arrow',
        name: 'Acid Arrow',
        url: '/api/spells/acid-arrow',
    };
    const [spellSelected, setSpellSelected] = useState<Dnd5eApiPreview>(initSpellSelected);
    const { spellList, isSpellListLoading, spellListError } = useSpellList();
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
                    {isSpellListLoading ||
                        (isSpellLoading && (
                            <>
                                <Spinner animation="border" role="status" className="mt-3 mr-3">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </>
                        ))}
                </Col>
            </Row>
            <Row>
                <Col className="mt-3 d-flex justify-content-center">
                    <SpellCard spell={spell as Spell} spellSelected={spellSelected} />
                </Col>
            </Row>
        </Container>
    );
}
