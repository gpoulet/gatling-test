import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {ROUTE_HOME, ROUTE_STATS} from "../../constants";

const AppBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Gatling test</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href={ROUTE_HOME}>Home</Nav.Link>
                <Nav.Link href={ROUTE_STATS}>Stats</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default AppBar;