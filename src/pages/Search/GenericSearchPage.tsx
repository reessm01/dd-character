import React from 'react';
import './GenericSearchPage.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { SearchableInput, SearchableToggleProps } from '../../components';
import { useSpellList } from '../../hooks/useSpellList';
import { SpellList } from '../../interfaces';

export function GenericSearchPage() {
    const { spellList, isLoading, error } = useSpellList();
    const inputOptions: SearchableToggleProps<SpellList> = {
        suggestionKey: 'name',
        placeholderText: 'Start by typing a spell...',
        searchOptions: {
            haystack: spellList,
            keys: ['name', 'url'],
        },
        handleSelect: (suggestion: any) => console.log(suggestion),
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
        </Container>
    );
}
