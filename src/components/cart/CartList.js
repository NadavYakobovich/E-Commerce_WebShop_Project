import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import "./cartList.css"
import {UserContext} from "../../App";


function CartList({api}) {
    const [cart, setCart] = useState(null);
    const loggedInUser = useContext(UserContext);

    async function removeProductFromCart(productId) {
        console.log(productId)
        console.log(loggedInUser._id)
        await api.removeProductFromCart(loggedInUser._id, productId)
        const newCart = await api.getCartList(loggedInUser._id)
        setCart(newCart)
    }

    //get from the server the cart of the user, if the user is logged in
    useEffect(() => {
        if(loggedInUser != null){
        api.getCartList(loggedInUser._id).then(data => {
            setCart(data);
        });
    }}, [loggedInUser]);

    //the user is not logged

    if (loggedInUser == null) {
        return (
            <Card className="CardMess">
                <h3>Please Sign In</h3>
                <div className="d-flex">
                <Button className="ButtonStyle" variant="primary" to="/singin" > Click Here To Sign In</Button>
                <Button className="ButtonStyle" variant="danger" to="/singin" > Click Here To Sign Up</Button>
                </div>
            </Card>
        )
    } else {
        //the user is logged in
        if (cart == null) {
            //wating for the cart to be loaded
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            //the cart is loaded
            //the cart is empty
            if (cart.length === 0) {
                return (
                    <Card>
                        <h1>Your cart is empty</h1>
                    </Card>
                )
            } else {
                //the cart is not empty and displayed

                return (
                    <Row>
                        <Col></Col>
                        <Col sm={8}>
                            {cart.map((product, index) => (
                                <Card key={index} className="m-2 fw-bold ">
                                    <Card.Body>
                                        <Row>
                                            <Col>
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
                                                <Button variant="danger" onClick={() => removeProductFromCart(product._id)}>Remove</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>

                        <Col sm={3}>
                            <Card className="m-2">
                                <Card.Header>Total Price</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            the sum of the products in the cart
                                            is: {cart.reduce((acc, product) => acc + product.price, 0)}
                                        </p>
                                    </blockquote>
                                    <Row className="fw-bold m-2">
                                        <Col> <Button variant="outline-danger" size="md">Checkout</Button></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                );
            }
        }

    }
}

export default CartList;