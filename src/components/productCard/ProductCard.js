import React, {useContext} from 'react';
import {Badge, Button, Card, Col} from "react-bootstrap";
import "./productCard.css";
import {UserContext} from "../../App";

function ProductCard(props) {
    const product = props.product;
    const api = props.api;
    const loggedInUser = useContext(UserContext);

    function addToCart() {
        console.log(product)
        if(loggedInUser != null) {
            api.addProductToCart(loggedInUser._id,product._id,1).then(data => {
                console.log("product added to cart");
                console.log(data)
            }).catch(error => {
                    console.log(error)
                }
            )
        }
    }

    return (
        <Col className="m-2" md={3} sm={6} xs={6}>
            <Card className="productCard" style={{width: '40rem', minWidth: '30px'}}>
            <Card.Img variant="top" src={product.pic}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                the price is {product.price}
            </Card.Text>
            <Button onClick={addToCart} variant="primary">buy</Button>
                <Badge className="m-2 text-black" bg="light"> {product.brand}</Badge>
            </Card.Body>
            </Card>
        </Col>
    );

}

export default ProductCard;