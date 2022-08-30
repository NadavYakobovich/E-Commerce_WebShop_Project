import React, {useState} from 'react';
import {Alert, Button} from "react-bootstrap";
import "./VaildAlert.css"

function ValidAlert({valid, type}) {

    //set the text that will be displayed in the alert
    let textMessage;
    if (type === "password") {
        textMessage = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character"
    }
    if (type === "email") {
        textMessage = "Email is not valid"
    }
    if(type ==="userFound"){
        textMessage="Mail or Password is incorrect"
    }


    if (!valid) {
        return (
            <Alert variant="danger" className="alertValid">
                <p>
                    {textMessage}
                </p>
            </Alert>
        );
    }

    return null;
}

export default ValidAlert;