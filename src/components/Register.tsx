import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './styles/Login.scss';
import { useSelector } from "react-redux";
import Axios from 'axios';
import { hashPassword } from "./Login"; 

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

const Register = () => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");

    const userState = useSelector((state: any) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (userState.email !== "" && userState.password !== "") {
            navigate("/aksentofficial/profile");
        }
    }, []);

    const handleRegister = async (e: any) => {
        if (lastName === "" || firstName === "" || email === "" || password === "" || address === "" || city === "" || country === "" || zip === "" || telephone === "") { alert("Please fill all fields"); return; };
        e.preventDefault();
        Axios.post(`${backendUrl}/createUser`, {
            name: firstName + " " + lastName,
            email,
            password: hashPassword(password),
            address: address + "," + city + "," + country + "," + zip,
            telephone,
        }).then((res) => {
            alert('registation successful');
            navigate('/aksentofficial/login');
        })
    }

    return (
        <div className='login-app'>
            <Form className='login-form' onSubmit={(e) => handleRegister(e)} >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First" onChange={(e) => { setFirstName(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last" onChange={(e) => { setLastName(e.target.value) }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" onChange={(e) => { setAddress(e.target.value) }} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="Hanoi" onChange={(e) => { setCity(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control placeholder="Vietnam" onChange={(e) => { setCountry(e.target.value) }} />
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTelephone">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control placeholder="+84979862640" onChange={(e) => { setTelephone(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder="100000" onChange={(e) => { setZip(e.target.value) }} />
                    </Form.Group>

                </Row>

                <Button variant="primary" type="submit" className='login-button'>
                    Submit
                </Button>
            </Form>
            <div>
                Already have an account? <Link to="/aksentofficial/login">Login</Link>
            </div>
        </div>

    );
};

export default Register;