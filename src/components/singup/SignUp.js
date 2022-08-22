import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import $ from "jquery";

function SignUp({api}) {

    function SubmitHandler(event) {
        event.preventDefault();
        const user = {
            email: $('#email').val(),
            password: $('#password').val(),
            name: $('#name').val()
        }
        console.log(user  )
        api.addUser(user).then(data => {
            if (data != null) {
                console.log(data)
            }
        }).catch(error => {
                console.log(error)
            }
        )
    }

    return (
        <div>
            <Row>
                <Col sm={1}></Col>
                <Col className="me-0 ">
                    <Card className="p-4 mt-5 CardSignIn">
                        <form onSubmit={SubmitHandler}>
                            <h3>Sign In</h3>
                            <div className="mb-3">
                                <label>User Name</label>
                                <input
                                    id={'name'}
                                    type="text"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter User Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    id={'email'}
                                    type="email"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    id={'password'}
                                    type="password"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary InputBoxStyle">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </Card>
                </Col>
                <Col lg={6} xs={0} className="d-none d-lg-block"><Image className="mt-5 imageLogin" src='./SignUp.jpeg'
                                                                        fluid={true}/></Col>
                <Col sm={1}></Col>

            </Row>
        </div>

    );
}

export default SignUp;