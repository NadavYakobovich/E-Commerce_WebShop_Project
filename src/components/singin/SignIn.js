import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import './SignIn.css';

function SignIn(props) {
    return (
        <div>
            <Row>
                <Col sm={2}></Col>
                <Col   className="me-0 ">
                    <Card className="p-4 mt-5 CardSignIn">
                        <form>
                            <h3>Sign In</h3>
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
                <Col   lg={5} xs={0} className="d-none d-lg-block" ><Image className="mt-5 imageLogin" src='./loginpic2.png' fluid={true} /></Col>
                <Col sm={2}></Col>

            </Row>
        </div>
    );
}

export default SignIn;