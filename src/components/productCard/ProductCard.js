import React from 'react';
import {Badge, Button, Card, Col} from "react-bootstrap";
import "./productCard.css";

function ProductCard(props) {
    const product = props.product;
    return (
        <Col className="m-2" md={3} sm={6} xs={6}>
            <Card className="productCard" style={{width: '40rem', minWidth: '30px'}}>
            <Card.Img variant="top" src={product.pic}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                the price is {product.price}
            </Card.Text>
            <Button variant="primary">buy</Button>
                <Badge className="m-2 text-black" bg="light"> {product.brand}</Badge>
            </Card.Body>
            </Card>
        </Col>
    );

}

export default ProductCard;