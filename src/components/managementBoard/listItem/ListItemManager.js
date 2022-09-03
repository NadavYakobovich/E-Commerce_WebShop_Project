import React from 'react';
import { Button, Card, Col, Row} from "react-bootstrap";
import "../ManagementBoard.css"

function ListItemManager({product}) {



    return (
        <Card className="m-2 ">
            <Row >
                <Col sm={2}>
                    <Card.Img variant="top" src={product.pic} className="proImage" />
                </Col>
                <Col sm={2}  className="my-auto">
                    {product.name}
                </Col>
                <Col sm={2} className="my-auto">
                        {product.brand}
                </Col>
                <Col sm={2}  className="my-auto">
                    {product.category}
                </Col>
                <Col sm={2}  className="my-auto">
                    {product.price}
                </Col>
                <Col sm={2}  className="my-auto">
                    <Button  className="m-2" variant="danger">Remove from Shop</Button>
                    <Button   className="m-2" variant="primary">Edit</Button>
                </Col>
            </Row>
        </Card>
    );


}

export default ListItemManager;