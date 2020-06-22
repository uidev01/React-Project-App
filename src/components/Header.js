import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">React Project</Link></Navbar.Brand>
                <Nav className="mr-auto">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/categories" className="nav-link">
                    Categories
                </Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;