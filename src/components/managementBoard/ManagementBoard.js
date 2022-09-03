import React, {useEffect, useState} from 'react';
import {Col, Nav, Row} from "react-bootstrap";
import "./ManagementBoard.css"
import ListItemManager from "./listItem/ListItemManager";

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
            <Row>
                <Col sm={2} className="sideManger">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Add New Products</Nav.Link>
                        <Nav.Link eventKey="link-1">Users</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav>
                </Col>
                <Col sm={10}>
                    {
                        products.map((product, index) => (
                            <ListItemManager key={index}  product={product}></ListItemManager>))
                    }

                </Col>
            </Row>

        );
    }
}

export default ManagementBoard;