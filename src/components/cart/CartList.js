import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import "./cartList.css"

function CartList({Products}) {
    return (
        <Row>
            <Col></Col>
            <Col sm={8}>
                {Products.map((product, index) => (
                    <Card key={index} className="m-2 fw-bold ">
                        <Card.Body>
                            <Row>
                                <Col >
                                    <Image className="ProPic" src={product.pic} alt="product" fluid={true}
                                           roundedCircle={true}/>
                                </Col>
                                        <Col>
                                            Product: {product.name}
                                        </Col>
                                        <Col>
                                            Price {product.price}
                                        </Col>
                                        <Col>
                                            <Button variant="danger">Remove</Button>
                                        </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
            </Col>

            <Col sm={3}>
                <Card className="m-2">
                    <Card.Header>Sum of The Order is</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                the sum of the products in the cart
                                is: {Products.reduce((acc, product) => acc + product.price, 0)}
                            </p>
                        </blockquote>
                        <Row className="fw-bold m-2">
                           <Col>  <Button variant="outline-danger" size="md">Checkout</Button></Col>
                           <Col><Button variant="outline-danger" size="md">Continue </Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

        </Row>

    );
}

export default CartList;