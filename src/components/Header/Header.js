import React from 'react';
import {withRouter} from "react-router-dom";
import {Navbar, Nav,} from 'react-bootstrap';

function Header() {

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default withRouter(Header);
