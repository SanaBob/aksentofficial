import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import "./styles/Socials.scss";

const Socials = () => {
    return (
        <div className="social-container">
            <a href="https://www.facebook.com/aksentofficialvn/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/aksent.official/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://shopee.vn/aksent.official/"
                className="shopee social">
                <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            </a>
        </div>
    );
};

export default Socials;