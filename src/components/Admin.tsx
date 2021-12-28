import React, {useState} from 'react';
import Axios from "axios";
import './styles/Admin.scss'

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

const Admin = () => {
    
    const [url1, setUrl1] = useState<string | null>(null);
    const [url2, setUrl2] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    const [color, setColor] = useState<string[] | null>(null);
    const [size, setSize] = useState<string[] | null>(null);

    const createProduct = () => {
        Axios.post(`${backendUrl}/createProduct`, {
            url1, 
            url2, 
            name, 
            color, 
            size,
        }).then((res) => {
            alert('product created');
        })
    }


    return (
        <div className='app'>
            <input type="text" placeholder="url1..." onChange={(event) => {setUrl1(event.target.value)}} />
            <input type="text" placeholder="url2..." onChange={(event) => {setUrl2(event.target.value)}}/>
            <input type="text" placeholder="name..." onChange={(event) => {setName(event.target.value)}}/>
            <input type="text" placeholder="color..." onChange={(event) => {setColor(event.target.value.split(','))}}/>
            <input type="text" placeholder="size..." onChange={(event) => {setSize(event.target.value.split(','))}}/>
            <button onClick={() => {createProduct()}}>Create Product</button>
        </div>
    );
};

export default Admin;