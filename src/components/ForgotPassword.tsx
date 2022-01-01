import React, {useState, useEffect} from 'react';
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { hashPassword } from './Login';
import './styles/Login.scss';

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const handleForgotPassword = async (e: any) => {
        e.preventDefault();
        if (email === "" || telephone === "" || password === "" || telephone.length <= 8) {
            alert("Please fill all the fields");
            return;
        }
        const res = await Axios.get(`${backendUrl}/getUser`, {
            params: {
                email: email.toLocaleLowerCase(),
            }
        });
        if (res.data && res.data.telephone.includes(telephone)) {
            Axios.post(`${backendUrl}/updateUser`, {
                email: email.toLowerCase(),
                password: hashPassword(password),
            }).then(() => {
                alert('password has been reset');
                navigate('/aksentofficial/login');
            })
        } else {
            alert('wrong credentials');
        }
    }

    return (
        <div className="login-app">
            <Form className="login-form" onSubmit={(e) => handleForgotPassword(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTelephone">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control placeholder="Password" onChange={(e) => { setTelephone(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>

                <Button variant="primary" type="submit" className='login-button'>
                    Update Password
                </Button>
            </Form>
        </div>
    )
}

export default ForgotPassword;
