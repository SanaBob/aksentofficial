import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './styles/MainDiv.scss';
import './styles/Admin.scss'

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

const Admin = () => {

    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>('');
    const [url1, setUrl1] = useState<string>('');
    const [url2, setUrl2] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const userState = useSelector((state: any) => state.user.value);
    const navigate = useNavigate();

    const clearState = () => {
        setId('');
        setName('');
        setUrl1('');
        setUrl2('');
        setColor('');
        setSize('');
        setPrice('');
    }

    useEffect(() => {
        if (userState.email == "" || userState.password == "" || userState.role !== "admin") {
            navigate('/aksentofficial/');
        }
    }, [])

    const createProduct = () => {
        if (url1 === "" || url2 === "" || name === "" || color === "" || size === "" || price === "") { alert("Please fill all fields"); return; };
        Axios.post(`${backendUrl}/createProduct`, {
            name,
            url1,
            url2,
            color: color.replace(/\s/g, '').split(','),
            size: size.replace(/\s/g, '').split(','),
            price,
        }).then((res) => {
            alert('product created');
            clearState();
        })
    }

    const updateProduct = () => {
        if (id === "") { alert("Please fill id"); return; };
        Axios.put(`${backendUrl}/updateProduct`, {
            id,
            name,
            url1,
            url2,
            color: color.replace(/\s/g, '').split(','),
            size: size.replace(/\s/g, '').split(','),
            price,
        }).then((res) => {
            console.log(res);
            alert('product updated');
            clearState();
        })
    }

    const deleteProduct = () => {
        if (id === "") { alert("Please fill all fields"); return; };
        Axios.delete(`${backendUrl}/deleteProduct/${id}`).then((res) => {
            alert('product deleted');
            clearState();
        });
    }

    return (
        <div className='main-div'>
            <div>
                <div>
                    Create Product
                </div>
                <input type="text" placeholder="url1..." value={url1} onChange={(event) => { setUrl1(event.target.value) }} />
                <input type="text" placeholder="url2..." value={url2} onChange={(event) => { setUrl2(event.target.value) }} />
                <input type="text" placeholder="name..." value={name} onChange={(event) => { setName(event.target.value) }} />
                <input type="text" placeholder="color..." value={color} onChange={(event) => { setColor(event.target.value) }} />
                <input type="text" placeholder="size..." value={size} onChange={(event) => { setSize(event.target.value) }} />
                <input type="number" placeholder="price..." value={price} onChange={(event) => { setPrice(event.target.value) }} />
                <button onClick={() => { createProduct() }}>Create Product</button>
            </div>
            <div>
                <div>
                    Update Product
                </div>
                <input type="text" placeholder="id..." value={id} onChange={(event) => { setId(event.target.value) }} />
                <input type="text" placeholder="url1..." value={url1} onChange={(event) => { setUrl1(event.target.value) }} />
                <input type="text" placeholder="url2..." value={url2} onChange={(event) => { setUrl2(event.target.value) }} />
                <input type="text" placeholder="name..." value={name} onChange={(event) => { setName(event.target.value) }} />
                <input type="text" placeholder="color..." value={color} onChange={(event) => { setColor(event.target.value) }} />
                <input type="text" placeholder="size..." value={size} onChange={(event) => { setSize(event.target.value) }} />
                <input type="number" placeholder="price..." value={price} onChange={(event) => { setPrice(event.target.value) }} />
                <button onClick={() => { updateProduct() }}>Update Product</button>
            </div>
            <div>
                <div>
                    Delete Product
                </div>
                <input type="text" placeholder="id..." value={id} onChange={(event) => { setId(event.target.value) }} />
                <button onClick={() => { deleteProduct() }}>Delete Product</button>
            </div>
        </div>
    );
};

export default Admin;