import React, {useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import $ from "jquery";
import ValidAlert from "../singin/ValidAlert";

function SignUp({api}) {
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);


    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(String(password));
    }


    //validation that the email and the password is valid
    function validationCheck(){
        const email = $('#email').val()
        const password = $('#password').val()

        setValidEmail(true)
        setValidPassword(true)

        const validEmail = validateEmail(email)
        const validPassword = validatePassword(password)

        if (!validEmail) {
            setValidEmail(false)
        }
        if (!validPassword) {
            setValidPassword(false)
        }
        if (!validEmail || !validPassword) {
            //one of them is not valid so display the alert and don't sent the request to the server
            return false
        }
    }

    function SubmitHandler(event) {
        event.preventDefault();

        if(!validationCheck()){
            //if there is problem with the input of the user
            return
        }

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
                            <ValidAlert valid={validEmail} type={"email"}/>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    id={'password'}
                                    type="password"
                                    className="form-control InputBoxStyle"
                                    placeholder="Enter password"
                                />
                            </div>
                            <ValidAlert valid={validPassword} type={"password"}/>
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