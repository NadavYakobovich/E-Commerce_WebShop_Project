import React, {useEffect, useState} from 'react';
import {Accordion, Button, Card, Col, Image, Row} from "react-bootstrap";
import '../ManagementBoard.css'

function OrdersTab({api}) {
    const [cartUsers, setCartUsers] = useState(null)

    useEffect(() => {
        api.getUsersCart(setCartUsers);
    }, [api])
    return (
        <Accordion className="mt-2" >
            {
                cartUsers != null ? cartUsers.map((cartUser, index) => (
                    // show only the item that there cart is not empty
                    cartUser.cart.length > 0 ?
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{cartUser.userName}</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    {
                                        cartUser.cart.map((product, indexCart) => (
                                            <Accordion.Item eventKey={ indexCart}>
                                                <Accordion.Header className='tabCartOrders'>{product.name + " - quantity: " + product.quantity}</Accordion.Header>
                                                <Accordion.Body className="d-flex justify-content-around">
                                                    <Image className="ProPic" src={product.pic}
                                                           alt="product" fluid={true}
                                                           roundedCircle={true}/>
                                                    <div>
                                                        Product: {product.name}
                                                    </div>
                                                    <div>
                                                        Price {product.price}
                                                    </div>
                                                    <div>
                                                        Quantity {product.quantity}
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))
                                    }
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item> : null
                )) : <p>loading...</p>
            }
        </Accordion>)
}

export default OrdersTab;