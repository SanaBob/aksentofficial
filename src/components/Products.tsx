import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import Axios from "axios";
import './styles/Products.scss';
import './styles/MainDiv.scss';

export type product = {
    _id: string,
    url1: string,
    url2: string,
    name: string,
    color: string[],
    size: string[],
    price: number,
}

const Products = () => {

    const [products, setProducts] = useState<product[] | null>(null);
    const [productName, setProductName] = useState<string | null>(null);

    let { name } = useParams();

    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

    useEffect(() => {
        const fetchData = async () => {
            await Axios.get(`${backendUrl}/getProducts`).then((res) => {
                setProducts(res.data);
            });
            if (name) {
                name = name.replace("%20", " ");
                setProductName(name ? name : "");
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (!productName) return;
        const filteredProducts = products?.filter((product) => product.name.toLowerCase().includes(productName.toLowerCase()));
        if (filteredProducts && filteredProducts.length > 0) setProducts(filteredProducts);
    }, [productName]);

    return (
        <div className="main-div">
            <div className="container1">
                    {(products) ? products.map((product, index) => (
                    <div className="filter" key={`${index}`}>
                        <Link to={`/aksentofficial/product/${product._id}`} className = "card">
                            <img src={product.url1} className="img-bottom" alt="Card Back" />
                            <img src={product.url2} className="img-top" alt="Card Front" />
                        </Link>
                        <div className="description">{product.name}</div>
                        <div className="description">{product.price} VND</div>
                    </div>
                )) : 'Loading...'}
            </div>
        </div>
    );
};

export default Products;