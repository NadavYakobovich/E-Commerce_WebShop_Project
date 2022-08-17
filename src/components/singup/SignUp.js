import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";

function SignUp(props) {
    return (
        <div>
            <Row>
                <Col sm={1}></Col>
                <Col   className="me-0 ">
                    <Card className="p-4 mt-5 CardSignIn">
                        <form>
                            <h3>Sign In</h3>
                            <div className="mb-3">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter User Name"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input "
                                        id="customCheck1"
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary InputBoxStyle">
                                    Submit
                                </button>
                            </div>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </Card>
                </Col>
                <Col   lg={6} xs={0} className="d-none d-lg-block" ><Image className="mt-5 imageLogin" src='./SignUp.jpeg' fluid={true} /></Col>
                <Col sm={1}></Col>

            </Row>
        </div>

    );
}

export default SignUp;