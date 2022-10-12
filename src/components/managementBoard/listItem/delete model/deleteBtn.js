import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

function DeleteBtn({product, api, setProducts}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function deleteProduct() {
        api.deleteProduct(product._id).then(
            () => {
                api.getProducts(setProducts).then( ()=> handleClose())
            }
        )
    }

    return (
        <>
            <Button  className="m-2 btn-shape" variant="danger" onClick={handleShow}>
                <i className="bi bi-trash3-fill"></i>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this product?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button  variant="primary" onClick={deleteProduct}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default DeleteBtn;