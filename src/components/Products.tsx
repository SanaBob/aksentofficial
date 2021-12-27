import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from 'react-router-dom';
import Axios from "axios";
import './styles/Products.scss';

type product = {
    _id: string,
    url1: string,
    url2: string,
    name: string,
    color: string[],
    size: string[],
}

const Products = () => {

    const [products, setProducts] = useState<product[] | null>(null);
    const [productName, setProductName] = useState<string | null>(null);

    // const { pathname } = useLocation();
    // const match = pathname.match(/products\/name=(.*)/);
    // let type = match?.[1];

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

    // const redirect = (index: string) => {
    //     document.location.href = `/product/id=${index}`;
    // }

    return (
        <div className="app">
            <div className="container">
                    {(products) ? products.map((product, index) => (
                    <div className="filter" key={`${index}`}>
                        {/* <a className="card" onClick={() => { redirect(product._id) }}>
                            <img src={product.url1} className="img-bottom" alt="Card Back" />
                            <img src={product.url2} className="img-top" alt="Card Front" />
                        </a> */}
                        <Link to={`/product/${product._id}`} className = "card">
                            <img src={product.url1} className="img-bottom" alt="Card Back" />
                            <img src={product.url2} className="img-top" alt="Card Front" />
                        </Link>
                        <div className="description">{product.name}</div>
                    </div>
                )) : 'Loading...'}
            </div>
        </div>
    );
};

export default Products;