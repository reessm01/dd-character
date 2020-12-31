import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../logo.svg';

export function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> D&D 5E Companion
            </Navbar.Brand>
        </Navbar>
    );
}
