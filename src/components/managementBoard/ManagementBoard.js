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
import AddProductWin from "./addProductWin/AddProductWin";

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
            <Row className="management-board ">
                <Col   xxl={1} className="sideManger">
                    <Nav defaultActiveKey="/home" className="flex-column text-start fs-6 ">
                        <Nav.Link className="nav-link" as={Link} to="/management/"> <i className="bi bi-award-fill m-2"></i> Management</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/management/orders"> <i className="bi bi-card-list m-2"></i>Orders</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/management/newProduct"> <i className="bi bi-plus-circle-fill m-2"></i> Add  Product</Nav.Link>
                    </Nav>
                </Col>
                <Col  >
                    {/*the base route of this page is /management*/}
                        <Routes>
                            <Route path="/" element={ products.map((product, index) => (
                                <ListItemManager key={index} api={api} product={product} setProducts={setProducts}></ListItemManager>))
                            }></Route>
                            <Route path="/orders" element={<OrdersTab api={api}></OrdersTab>}> </Route>
                            <Route path="/newProduct" element={<AddProductWin api={api} setProducts={setProducts}></AddProductWin>}> </Route>

                        </Routes>
                </Col>
            </Row>

        );
    }
}

export default ManagementBoard;