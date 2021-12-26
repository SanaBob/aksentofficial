import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
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
    const [product, setProduct] = useState<product>(
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
    );



    const { pathname } = useLocation();
    const match = pathname.match(/product\/id=(.*)/);
    const type = match?.[1];
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

    useEffect(() => {
        setId(type ? type : "");
    }, []);

    useEffect(() => {
        if (!id) return;
        Axios.get(`${backendUrl}/getProducts?id=${type}`).then((res) => {
            setProduct(res.data);
        });
    }, [id])


    return (
        <div className="container">
            <div className="filter">
                <a className="card">
                    <img src={product.url1} className="img-bottom" alt="Card Back" />
                    <img src={product.url2} className="img-top" alt="Card Front" />
                </a>
                <div className="description">{product.name}</div>
                <div className="description">Size: {product.size.toString()}</div>
                <div className="description">Color: {product.color.toString()}</div>
            </div>
        </div>
    );
};

export default Info;