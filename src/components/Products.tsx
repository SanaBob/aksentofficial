import React from "react";
import './styles/Products.scss';
import home1 from "./images/home1.png";
import home2 from "./images/home2.jpg";
import home3 from "./images/home3.jpg";
import home4 from "./images/home4.jpg";
import home5 from "./images/home5.jpg";

const images = [{ a: home5, b: home2 }, { a: home3, b: home4 }, { a: home5, b: home2 }, { a: home3, b: home4 }];

const Products = () => {

    const redirect = (index: number) => {
        document.location.href = `/products/${index}`;
    }

    return (
        <div className="container">
            {images.map((image, index) => (
                <div className="filter">
                    <a className="card" onClick={()=>{redirect(index)}}>
                        <img src={image.a} className="img-bottom" alt="Card Back" />
                        <img src={image.b} className="img-top" alt="Card Front" />
                    </a>
                    <div className="description">asdasd</div>
                </div>
            ))}
        </div>
    );
};

export default Products;