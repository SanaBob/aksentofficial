import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import './styles/Login.scss';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { login } from '../reducers/user';

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

export const hashPassword = (password: string) => {
    var hash = 0;
    if (password.length == 0) {
        return hash;
    }
    for (var i = 0; i < password.length; i++) {
        var char = password.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const userState = useSelector((state: any) => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userState.email !== "" && userState.password !== "") {
            navigate("/aksentofficial/profile");
        }
    }, []);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const res = await Axios.get(`${backendUrl}/getUser`, {
            params: {
                email: email.toLocaleLowerCase(),
                password: hashPassword(password),
            }
        });
        if (res.data) {
                dispatch(login({ 
                    name: res.data.name, 
                    email: res.data.email, 
                    password: res.data.password, 
                    address: res.data.address, 
                    telephone: res.data.telephone,
                    orders: res.data.orders, 
                    role: res.data.role,
                    cart: userState.cart, 
                }));
                navigate('/aksentofficial/profile');
            } else {
                alert('wrong credentials');
        };
    }

    return (
        <div className="login-app">
            <Form className="login-form" onSubmit={(e) => handleLogin(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>

                <Button variant="primary" type="submit" className='login-button'>
                    Login
                </Button>
            </Form>
            <div>
                Forgot you password? <Link to="/aksentofficial/forgotpassword">Click here</Link>
            </div>
            <div>
                Don't have an account? <Link to="/aksentofficial/register">Register</Link>
            </div>
        </div>

    );
};

export default Login;