import React, {useEffect, useState} from 'react';
import {Col, Nav, Row} from "react-bootstrap";
import "./ManagementBoard.css"
import ListItemManager from "./listItem/ListItemManager";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import ProductsBoard from "../ProductsBoard";
import CartList from "../cart/CartList";
import SignIn from "../singin/SignIn";
import SignUp from "../singup/SignUp";
import OrdersTab from "./ordersTab/OrdersTab";

function ManagementBoard({api}) {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        api.getProducts(setProducts);
    }, [])


    if (products == null) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {

        return (
            <Row className="management-board">
                <Col sm={2} className="sideManger">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link className="nav-link" as={Link} to="/management/">Management Page</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/management/orders">Order</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={10}>
                    {/*the base route of this page is /management*/}
                        <Routes>
                            <Route path="/" element={ products.map((product, index) => (
                                <ListItemManager key={index} api={api} product={product} setProducts={setProducts}></ListItemManager>))
                            }></Route>
                            <Route path="/orders" element={<OrdersTab api={api}></OrdersTab>}> </Route>
                        </Routes>
                </Col>
            </Row>

        );
    }
}

export default ManagementBoard;