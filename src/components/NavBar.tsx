import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import './styles/NavBar.scss';

const NavBar = () => {

    const [language, setLanguage] = useState<boolean>(false);

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} style={{ width: 100, marginTop: -7 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
                        <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                        <NavDropdown title="🌐" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => {setLanguage(false)}}>English</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {setLanguage(true)}}>Tiếng Việt</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;