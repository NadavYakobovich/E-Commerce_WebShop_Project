import React, {useState} from 'react';
import {Button, Form, Image, Offcanvas, Row} from "react-bootstrap";
import $ from 'jquery';



function EditSideWin({notify, api, setProducts, product, ...props}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //the function send the new product details to the server and update the product
  async function SubmitUpdate(event) {
    console.log(product)
    event.preventDefault();
    setShow(false)
    const updatedProduct_Item = {
      productId: product._id,
      name: $('#name').val(),
      brand: $('#brand').val(),
      category: $('#category').val(),
      price: $('#price').val(),
      pic: $('#pic').val()
    }
    //send the new product details to the server and then update the list of the products in the management board with the updated product
    await api.updateProduct(updatedProduct_Item).then(
      await api.getProducts(setProducts).then(() =>  notify("updated successfully","info"))
    )
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="m-2 btn-shape btn-shape-blue">
        <i className="bi bi-pencil-square"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Item</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row> <Image src={"../dataPic/" + product.pic}></Image></Row>
          <Row>
            <Form onSubmit={SubmitUpdate}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control defaultValue={product.name} type="text" placeholder={product.name}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="pic">
                <Form.Label>Product Picture</Form.Label>
                <Form.Control defaultValue={product.pic} type="text" placeholder={product.pic}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="brand">
                <Form.Label>Product Brand</Form.Label>
                <Form.Control type="text" defaultValue={product.brand} placeholder={product.brand}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Product Category</Form.Label>
                <Form.Control type="text" defaultValue={product.category}
                              placeholder={product.category}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" defaultValue={product.price} placeholder={product.price}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                UPDATE
              </Button>
            </Form>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>);
}

export default EditSideWin;
