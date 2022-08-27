import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import{UserContext} from "../App";
import {Link} from "react-router-dom";

function NavBar() {

    const loggedInUser = useContext(UserContext);
    console.log("in the navbar");
    console.log(loggedInUser);

    return (

        <Navbar bg="dark" variant="dark">
            <Container className="w-75">
                <Navbar.Brand className="nav-link"  as={Link} to="/" >Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="nav-link" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link  className="nav-link" as={Link} to="/cart"><i className="bi bi-cart-check-fill"></i> Cart</Nav.Link>

                    {loggedInUser == null ?
                       <>
                           <Nav.Link className="nav-link" as={Link} to="/singin" ><i className="bi bi-person-circle"></i> Sign In</Nav.Link>
                           <Nav.Link as={Link} to="/singup" className="nav-link"><i className="bi bi-person-plus-fill"></i> Sign Up</Nav.Link>
                       </>
                        :
                        <>
                        <Nav.Link className="nav-link" as={Link} to="/"><i className="bi bi-person-circle"></i>  login  Out</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/"><i className="bi bi-person-circle"></i> {loggedInUser.userName}</Nav.Link>

                        </>
                    }
                </Nav>
            </Container>
        </Navbar>    );
}

export default NavBar;