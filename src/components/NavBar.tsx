import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import './styles/NavBar.scss';
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../reducers/language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const [searchInput, setSearchInput] = useState<string>("");

    const handleSearch = (e: any) => {
        e.preventDefault();
        if (searchInput === "") return;
        navigate(`/aksentofficial/products/${searchInput}`);
    }

    const navigate = useNavigate();

    const langState = useSelector((state: any) => state.language.value);
    const dispatch = useDispatch();

    const handleLangChange = (curLang: string) => {
        dispatch(setLanguage({ lang: curLang }));
    }

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Nav.Link as={Link} to={"/aksentofficial"}>
                    <img src={logo} style={{ width: 100, marginTop: -7 }} />
                </Nav.Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"aksentofficial/products"}>{(langState.lang === 'en') ? 'Products' : 'Sản phẩm'}</Nav.Link>
                        {/* <Nav.Link as={Link} to={"/contact"}>{(langState.lang === 'en') ? 'Contact' : 'Liên lạc'}</Nav.Link> */}
                        <NavDropdown title={(langState.lang === 'en') ? 'English' : 'Tiếng Việt'} id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => { handleLangChange('en') }}>English</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { handleLangChange('vi') }}>Tiếng Việt</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/aksentofficial/login"}>
                            <FontAwesomeIcon icon={faUserAlt} size="1x" />
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/aksentofficial/cart"}>
                            <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={(e) => handleSearch(e)}>
                        <FormControl
                            onChange={(e) => { setSearchInput(e.target.value) }}
                            // onKeyPress={handleKeyDown}
                            type="search"
                            placeholder={(langState.lang === 'en') ? 'Search' : 'Tìm kiếm'}
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" type='submit' >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;