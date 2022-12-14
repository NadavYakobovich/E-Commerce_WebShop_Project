import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import $ from 'jquery';
import "./FileUploderCss.css"
import "../ManagementBoard.css"


function AddProductWin({api, setProducts, navigate, notify}) {

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({name: "", price: "", brand: '', category: "", file: ""});
  let valid = false;

  const onInputChange = (e) => {
    setFile(e.target.files[0])
    console.log(e.target.files[0])
  };

  function validateForm() {
    let errors = ({name: "", price: "", brand: '', category: "", file: ""});
    let validCheck = true
    if (($("#name").val()) === "") {
      errors.name = "Name is required";
      validCheck = false
    }
    if (($("#price").val() === "")) {
      errors.price = "Price is required";
      validCheck = false
    }
    if ($("#brand").val() === "") {
      errors.brand = "Brand is required";
      validCheck = false
    }
    if ($("#category").val() === "") {
      errors.category = "Category is required";
      validCheck = false
    }
    if (!file) {
      errors.file = "File is required";
      validCheck = false
    }
    console.log("in the validate form")
    console.log(validCheck)
    valid = validCheck
    console.log(valid)
    return errors;
  }

  function SubmitHandler(event) {
    event.preventDefault();
    setErrors(validateForm());
    if (valid === false) {
      return
    }
    console.log("the valid is")
    console.log(valid)

    //add the pic to that server - will save in dataPic folder in the express server
    const data = new FormData();
    data.append('file', file);

    const product = {
      name: $('#name').val(),
      brand: $('#brand').val(),
      category: $('#category').val(),
      price: $('#price').val(),
      pic: file.name
    }
    console.log("in the submit")
    console.log(file)
    console.log(product)
    api.uploadImage(data).then(() =>
      api.addProduct(product).then(() =>
        api.getProducts(setProducts).then(() => {
            navigate("")
            notify("added successfully", "info")
          }
        )))
  }


  return (
    <Card className="m-2 ">
      <div className='m-2'> Add New Product</div>
      <Form onSubmit={SubmitHandler} className="m-4">
        <Row>
          <Col sm={6} className='fs-6'>
            <Card className='p-3 m-1 text-start'>
              <Form.Group as={Row} className="mb-3 d-flex" controlId="name">
                <Form.Label column sm={3} > <i className="bi bi-pencil-square"></i> Name</Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="name"/>
                  <p className='fs-6 text-danger'> {errors.name}</p>
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="brand">
                <Form.Label column sm={3}> <i className="bi bi-info-circle me-1"></i>Brand</Form.Label>
                <Col >
                  <Form.Control type="text" placeholder="brand"/>
                  <p className='fs-6 text-danger'> {errors.brand}</p>

                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="category">
                <Form.Label column sm={3}> <i className="bi bi-tags me-1"></i>Category</Form.Label>
                <Col >
                  <Form.Control type="text" placeholder="category"/>
                  <p className='fs-6 text-danger'> {errors.category}</p>

                </Col>
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="price">
                <Form.Label column sm={3}> <i className="bi bi-coin me-1"></i>Price</Form.Label>
                <Col >
                  <Form.Control type="number" placeholder="price"/>
                  <p className='fs-6 text-danger'> {errors.price}</p>

                </Col>
              </Form.Group>
            </Card>
          </Col>
          <Col>
            <Form.Group className="form-group files" controlId='picture'>
              <Form.Label>Upload Your File </Form.Label>
              <input type="file"
                     onChange={onInputChange}
                     className="form-control"
                     multiple/>
            </Form.Group>
            <p className='fs-6 text-danger'> {errors.file}</p>

          </Col>
        </Row>

        <Button variant="primary" type="submit" className='m-2 btn-shape btn-shape-blue'>
          ADD <i className="bi bi-plus"></i>

        </Button>
      </Form>

    </Card>
  );
}

export default AddProductWin;
