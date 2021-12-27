import React, { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import './styles/Products.scss';
import Axios from "axios";

type product = {
    _id: string,
    url1: string,
    url2: string,
    name: string,
    color: string[],
    size: string[],
}


const Info = () => {
    
    const [id, setId] = useState<string | null>(null);
    const [product, setProduct] = useState<product | null>(null);



    // const { pathname } = useLocation();
    // const match = pathname.match(/product\/id=(.*)/);
    // const type = match?.[1];

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


    return (
        <div className="container">
            {(product) ? (<div className="filter">
                <a className="card">
                    <img src={product.url1} className="img-bottom" alt="Card Back" />
                    <img src={product.url2} className="img-top" alt="Card Front" />
                </a>
                <div className="description">{product.name}</div>
                <div className="description">Size: {product.size.toString()}</div>
                <div className="description">Color: {product.color.toString()}</div>
            </div>) : 'Loading...'}
            
        </div>
    );
};

export default Info;