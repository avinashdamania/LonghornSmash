import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: #000;
        font-family: "HKGrotesk", Arial, sans-serif;
        font-size: 120%;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover{
            color: #cd6c3c;
            transition: color 0.1s
        }
    }
`; 
export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Longhorn Smash</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/aboutus">About Us</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/pr">PR</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);