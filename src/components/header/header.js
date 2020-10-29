import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";


class Header extends Component {
    render() {
        return (
            <header>
                <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#products">Products</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        );
    }
}

export default Header;