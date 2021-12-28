import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import "./styles/Socials.scss";
import logo from './images/logo.png';
import { Link } from "react-router-dom";

const Socials = () => {
    return (
        <div className="bottom-container">
            <div className='rights-container'>
                <a>
                    © 2020-2021
                </a>
                <Link to="/aksentofficial/" className="logo">
                    <img src={logo} style={{ width: 80, marginTop: -7 }} />
                </Link>
                <a>
                    Rights reserved.
                </a>
            </div>
            <hr style = {{
                width: '100%',
                color: 'black',
                backgroundColor: 'black',
                height: '1px',
            }}></hr>
            <div className='social-container'>
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
        </div>
    );
};

export default Socials;