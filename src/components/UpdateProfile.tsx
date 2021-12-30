import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { login } from '../reducers/user';

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

const UpdateProfile = () => {

    const userState = useSelector((state: any) => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addressArray = userState.address.split(",").map((item: string) => item.trim());

    const [name, setName] = useState<string>(userState.name);
    const [address, setAddress] = useState<string>(addressArray[0] || "");
    const [city, setCity] = useState<string>(addressArray[1] || "");
    const [country, setCountry] = useState<string>(addressArray[2] || "");
    const [zip, setZip] = useState<string>(addressArray[3] || "");
    const [telephone, setTelephone] = useState<string>(userState.telephone || "");


    useEffect(() => {
        if (userState.email == "" || userState.password == "") {
            navigate('/aksentofficial/login');
        }
    }, []);

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        Axios.post(`${backendUrl}/updateUser`, {
            name,
            address: address + "," + city + "," + country + "," + zip,
            telephone,
            email: userState.email,
            password: userState.password,
        }).then((res) => {
            dispatch(login({
                value: {
                    name,
                    address: address + "," + city + "," + country + "," + zip,
                    telephone,
                }
            }));
            alert('update successful');
            navigate('/aksentofficial/profile');
        })
    }

    return (
        <div>
            <Form className='login-form' onSubmit={(e) => handleUpdate(e)} >

                <Form.Group controlId="formGridFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder={userState.name} onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder={addressArray[0]} onChange={(e) => { setAddress(e.target.value) }} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder={addressArray[1]} onChange={(e) => { setCity(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control placeholder={addressArray[2]} onChange={(e) => { setCountry(e.target.value) }} />
                    </Form.Group>

                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTelephone">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control placeholder={userState.telephone} onChange={(e) => { setTelephone(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder={addressArray[3]} onChange={(e) => { setZip(e.target.value) }} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" className='login-button'>
                    Update Profile
                </Button>
            </Form>
            <button onClick={() => { console.log(telephone) }}>test</button>
        </div>
    );
}

export default UpdateProfile;
