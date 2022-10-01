import React, {useState} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import $ from 'jquery';
import "./FileUploderCss.css"

function AddProductWin({api}) {

    const [file, setFile] = useState(null);

    const onInputChange = (e) => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
        console.log("change")
        console.log(file)
    };

   function SubmitHandler(event) {
        event.preventDefault();

       const data = new FormData();
       data.append('file', file);

       const product = {
            name: $('#name').val(),
            brand: $('#brand').val(),
            category: $('#category').val(),
            price: $('#price').val(),
            pic: file.name,
        }
       console.log("check")
       console.log(data)
       api.uploadImage(data).then(r => console.log(r))
    }
    return (
        <Card className="m-2">
            <div className='m-2'> Add New Product</div>
            <Form onSubmit={SubmitHandler} className="m-4">
                <Row>
                <Col sm={6}>
                    <Card className='p-3 m-1'>
                    <Form.Group as={Row} className="mb-3 d-flex" controlId="name">
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={10}>
                            <Form.Control  type="text" placeholder="name"/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="brand">
                        <Form.Label  column sm={2}>Brand</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"  placeholder="brand"/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="category">
                        <Form.Label  column sm={2}>Category</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="category"/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="price">
                        <Form.Label  column sm={2}>Price</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="price"/>
                        </Col>
                    </Form.Group>
                    </Card>
                </Col>
                <Col >
                    <Form.Group className="form-group files" controlId='picture'>
                        <Form.Label>Upload Your File </Form.Label>
                        <input type="file"
                               onChange={onInputChange}
                               className="form-control"
                               multiple/>
                    </Form.Group>
                </Col>
                </Row>

                <Button variant="primary" type="submit">
                    ADD
                </Button>
            </Form>

        </Card>
    );
}

export default AddProductWin;