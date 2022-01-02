import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import './styles/Info.scss';
import Axios from "axios";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from '../reducers/user';
import { product } from './Products';


const Info = () => {

    const [id, setId] = useState<string | null>(null);
    const [product, setProduct] = useState<product | null>(null);
    const [size, setSize] = useState<string | null>(null);
    const [color, setColor] = useState<string | null>(null);

    const navigate = useNavigate();
    const userState = useSelector((state: any) => state.user.value);
    const dispatch = useDispatch();

    let { ids } = useParams();

    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

    useEffect(() => {
        setId(ids ? ids : "");

    }, []);

    useEffect(() => {
        if (!id) return;
        Axios.get(`${backendUrl}/getProducts?id=${id}`).then((res) => {
            setProduct(res.data);
        });
    }, [id])

    const handleAddCart = (e: any) => {
        e.preventDefault();
        if (size === null || color === null || size === "Choose..." || color === "Choose...") { alert("Please choose size and color"); return; }
        dispatch(addCart({
            name: product?.name,
            color,
            size,
            price: product?.price,
        }));
        navigate('/aksentofficial/cart');
    }

    return (
        <div className="container">
            <div className="as">
                {(product) ? (<div className="filter">
                    <a className="card">
                        <img src={product.url1} className="img-bottom" alt="Card Back" />
                        <img src={product.url2} className="img-top" alt="Card Front" />
                    </a>
                    <div className="description">{product.name}</div>
                    <div className="description">Size: {product.size.toString()}</div>
                    <div className="description">Color: {product.color.toString()}</div>
                    <div className="description">Price: {product.price} VND</div>
                </div>) : 'Loading...'}
            </div>
            <Form onSubmit={(e) => { handleAddCart(e) }}>
                <Form.Group as={Col} controlId="formGridSize">
                    <Form.Label>Size</Form.Label>
                    <Form.Select defaultValue="Choose..." onChange={(e) => { setSize(e.target.value) }} >
                        <option>Choose...</option>
                        {product?.size.map((e: string, index: number) => {
                            return (<option value={e} key={index}>{e}</option>)
                        })}
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridColor">
                    <Form.Label>Color</Form.Label>
                    <Form.Select defaultValue="Choose..." onChange={(e) => { setColor(e.target.value) }} >
                        <option>Choose...</option>
                        {product?.color.map((e: string, index: number) => {
                            return (<option value={e} key={index}>{e}</option>)
                        })}
                    </Form.Select>
                </Form.Group>

                <Button variant="outline-success" type="submit">
                    Add to Cart
                </Button>
            </Form>
        </div>
    );
};

export default Info;