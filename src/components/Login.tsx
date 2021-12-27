import React from "react";
import { Form, Button } from "react-bootstrap";
import './styles/Login.scss';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-app">
            <Form className="login-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className='login-button'>
                    Login
                </Button>
            </Form>
            <div>
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </div>

    );
};

export default Login;