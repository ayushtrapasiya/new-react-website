import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import {  redirect, Form as RouterForm } from "react-router-dom";    

export default function Login() {
    let [showpass, setShowpass] = useState(false);

    function password() {
        setShowpass(!showpass);
    }

    return (
        <>
            <div className="main-login-container">
                <div className="row main-form">
                    <div className="col-md-6 col-9">
                        <img src="login.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-4 mt-5 col-10">
                      
                        <RouterForm method="post" action="/login">
                            <h1 className="fw-bold">Shopper</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required name="email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <div className="eye-handler">
                                    <Form.Control type={showpass ? "text" : "password"} placeholder="Password" required name="password" />
                                    <FontAwesomeIcon icon={showpass ? faEye : faEyeLowVision} className="eye" onClick={password} />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </RouterForm>
                    </div>
                </div>
            </div>
        </>
    );
}

 


export async function handlevalue({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const storedCredentials = JSON.parse(localStorage.getItem('credentials')) || [];
    storedCredentials.push({ email: data.email, password: data.password });
    localStorage.setItem('credentials', JSON.stringify(storedCredentials));
    let detail =  localStorage.getItem('credentials')
    return redirect('/');  
}