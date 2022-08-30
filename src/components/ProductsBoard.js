import React from 'react';
import ProductCard from "./productCard/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "./sidebar/SideBar";

function ProductsBoard({products,doSearch, api}) {
    return (
            <>
                <Col sm={3} xl={2}>
                    <SideBar doSearch={doSearch}></SideBar>
                </Col>
                <Col sm={9}>
                    <Row>
                        {products.map((product, index) => (
                            <ProductCard  key={index} api={api} product={product}></ProductCard>)
                        )}
                    </Row>
                </Col>
            </>
    );
}

export default ProductsBoard;