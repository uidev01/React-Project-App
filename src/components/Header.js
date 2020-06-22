import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
                <Nav className="ml-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        <Button type="submit">Submit</Button>
                    </Form>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;