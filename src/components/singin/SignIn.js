import React, {useState} from 'react';
import {Alert, Button, Card, Col, Image, Row} from "react-bootstrap";
import './SignIn.css';
import $ from 'jquery';
import {Navigate, useNavigate} from "react-router-dom";

import ValidAlert from "./ValidAlert";

//validation function

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function SignIn({api, setLoggedInUser}) {

    const [validEmail, setValidEmail] = useState(true);
    const [userFound, setUserFound] = useState(true);

    const navigate = useNavigate();


    //TODO add authentication after sign up
    async function SubmitHandler(event) {
        event.preventDefault();
        const email = $('#email').val()
        const password = $('#password').val()

        setValidEmail(true)
        setUserFound(true)

    //todo add authentication after checking
        //validation -

        // const validEmail = validateEmail(email)
        //
        // if (!validEmail) {
        //     //if there is a problem with the validation with the email in the form.
        //     setValidEmail(false)
        //     return
        // }


        await api.getUser(email, password).then(data => {
            console.log(data)
            if (data != null) {
                setLoggedInUser(data)
                console.log(data)
                console.log('the user is logged in')
                //navigate to the home page if the user logged in valid
                navigate("/")

            } else {
                console.log('the user is not logged in')
                console.log(data)
                setUserFound(false)
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
                                <ValidAlert valid={validEmail} type={"email"}/>
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
                            <ValidAlert valid={userFound} type={"userFound"}/>
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