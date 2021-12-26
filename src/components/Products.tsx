import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
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

    const [products, setProducts] = useState<product[] | null>(
        [
            {
                "_id": "temp",
                "url1": "https://scontent.fyvr3-1.fna.fbcdn.net/v/t39.30808-6/239948088_330286168837051_7109146923624111133_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=v5qH8YVGc1gAX9wFpvK&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT8uRx-qPpAFj7q24HJnAtNIRf6wNciS3DmUdW7gCurWBA&oe=61CA9A92",
                "url2": "https://scontent.fyvr3-1.fna.fbcdn.net/v/t39.30808-6/240386124_334749785057356_8024425403397276711_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=MPmvu7RA230AX-2jFx_&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT_gST5-dsLPm8Xa9a1sCWB1z1FoG_woKE4LnvJWZS9WEA&oe=61CB64EC",
                "name": "Donga Pants",
                "color": [
                    "Black"
                ],
                "size": [
                    "S",
                    "M"
                ]
            }
        ]
    );
    const [productName, setProductName] = useState<string | null>(null);

    const { pathname } = useLocation();
    const match = pathname.match(/products\/name=(.*)/);
    let type = match?.[1];
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

    useEffect(() => {
        const fetchData = async () => {
            await Axios.get(`${backendUrl}/getProducts`).then((res) => {
                setProducts(res.data);
            });
            if (type) {
                type = type.replace("%20", " ");
                setProductName(type ? type : "");
            }
        }

        fetchData();

    }, []);

    useEffect(() => {
        if (!productName) return;
        const filteredProducts = products?.filter((product) => product.name.toLowerCase().includes(productName.toLowerCase()));
        if (filteredProducts && filteredProducts.length > 0) setProducts(filteredProducts);
    }, [productName]);

    const redirect = (index: string) => {
        document.location.href = `/product/id=${index}`;
    }

    return (
        <div className="app">
            <div className="container">
                    {products!.map((product, index) => (
                    <div className="filter" key={`${index}`}>
                        <a className="card" onClick={() => { redirect(product._id) }}>
                            <img src={product.url1} className="img-bottom" alt="Card Back" />
                            <img src={product.url2} className="img-top" alt="Card Front" />
                        </a>
                        <div className="description">{product.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;