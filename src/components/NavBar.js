import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="w-75">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="/cart"><i className="bi bi-cart-check-fill"></i> Cart</Nav.Link>
                    <Nav.Link href="/singin"><i className="bi bi-person-circle"></i> Sign In</Nav.Link>
                    <Nav.Link href="/singup"><i className="bi bi-person-plus-fill"></i> Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>    );
}

export default NavBar;