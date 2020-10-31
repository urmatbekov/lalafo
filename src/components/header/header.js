import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";


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
                                <ul className="navbar-nav mr-auto">
                                    <i className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </i>
                                    <i className="nav-item">
                                        <NavLink className="nav-link"  to="/add">add</NavLink>
                                    </i>
                                    <i className="nav-item">
                                        <NavLink className="nav-link"  to="/about">About</NavLink>
                                    </i>
                                    <i className="nav-item">
                                        <NavLink className="nav-link"  to="/contact">Contact</NavLink>
                                    </i>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        );
    }
}

export default Header;