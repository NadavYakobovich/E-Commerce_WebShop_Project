import React, {useEffect, useState} from 'react';
import {Button, Col, Nav, Row} from "react-bootstrap";
import "./ManagementBoard.css"
import ListItemManager from "./listItem/ListItemManager";
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";

import OrdersTab from "./ordersTab/OrdersTab";
import AddProductWin from "./addProductWin/AddProductWin";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ManagementBoard({api}) {
  const [products, setProducts] = useState(null)
  const navigate = useNavigate();


  function notify(message, type) {
    if (type === "error") {
      toast.error(message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
        theme: "colored",
      })
    }
    if (type === "success") {
      toast.success(message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
        theme: "colored",
      })
    } else {
      toast.info(message, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
        theme: "colored",
      })
    }

  }


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
        <ToastContainer></ToastContainer>
        <Col xxl={1} className="sideManger">
          <Nav defaultActiveKey="/home" className="flex-column text-start fs-6 ">
            <Nav.Link className="nav-link" as={Link} to="/management/"> <i
              className="bi bi-award-fill m-2"></i> Management</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/management/orders"> <i className="bi bi-card-list m-2"></i>Orders</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/management/newProduct"> <i
              className="bi bi-plus-circle-fill m-2"></i> Add Product</Nav.Link>
          </Nav>
        </Col>
        <Col>
          {/*the base route of this page is /management*/}
          <Routes>
            <Route path="/" element={products.map((product, index) => (
              <ListItemManager key={index} api={api} product={product} setProducts={setProducts}
                               notify={notify}></ListItemManager>))
            }></Route>
            <Route path="/orders" element={<OrdersTab api={api}></OrdersTab>}> </Route>
            <Route path="/newProduct" element={<AddProductWin api={api} setProducts={setProducts} navigate={navigate}
                                                              notify={notify}></AddProductWin>}> </Route>

          </Routes>
        </Col>
      </Row>

    );
  }
}

export default ManagementBoard;
