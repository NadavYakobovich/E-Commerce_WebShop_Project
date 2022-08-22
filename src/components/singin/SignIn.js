import React, {useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import './SignIn.css';
import $ from 'jquery';


function SignIn({api, setLoggedInUser}) {

    //TODO add authentication after sign up
    async function SubmitHandler(event) {
        event.preventDefault();
        const email = $('#email').val()
        const password = $('#password').val()
        await api.getUser(email, password).then(data => {
            if (data != null) {
                setLoggedInUser(data)
                console.log(data)
                console.log('the user is logged in')
            } else {
                console.log('the user is not logged in')
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
                <Col sm={2}></Col>
                <Col className="me-0 ">
                    <Card className="p-4 mt-5 CardSignIn">
                        <form onSubmit={SubmitHandler}>
                            <h3>Sign In</h3>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    id="password"
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
                <Col lg={5} xs={0} className="d-none d-lg-block"><Image className="mt-5 imageLogin"
                                                                        src='./loginpic2.png' fluid={true}/></Col>
                <Col sm={2}></Col>
            </Row>
        </div>
    );
}

export default SignIn;