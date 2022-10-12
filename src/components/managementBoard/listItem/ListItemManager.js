import React from 'react';
import { Button, Card, Col, Row} from "react-bootstrap";
import "../ManagementBoard.css"
import EditSideWin from "../editSideWin/EditSideWin";
import DeleteBtn from "./delete model/deleteBtn";

function ListItemManager({api,product,setProducts}) {



    return (
        <Card className="m-2 ">
            <Row >
                <Col sm={2}>
                    <Card.Img variant="top" src={"../dataPic/" + product.pic} className="proImage" />
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
                    <DeleteBtn  className="m-2 btn-shape" variant="danger"  product={product} api={api} setProducts={setProducts} ></DeleteBtn>
                    {/*the edit button should open a side window with the product details*/}
                    <EditSideWin product={product} api={api} placement={'end'} setProducts={setProducts}></EditSideWin>
                </Col>
            </Row>
        </Card>
    );


}

export default ListItemManager;