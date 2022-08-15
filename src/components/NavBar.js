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
                </Nav>
            </Container>
        </Navbar>    );
}

export default NavBar;