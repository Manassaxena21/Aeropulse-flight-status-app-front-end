import React from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import '../style/NavBar.css';
import logo from '../image/Logo.jpg'
import SearchBar from "./SearchBar";

function NavBar() {
    return(
        <Navbar className="nav-bar">
            <Container fluid className='aeropulse-nav'>
                <Navbar.Brand href="/">
                    <img src={logo} alt='Logo'/>
                </Navbar.Brand>
                <Nav className="nav-links">
                    <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="/notifications" className="nav-link">Notification History</Nav.Link>
                </Nav>
                <SearchBar/>                
            </Container>
        </Navbar>
    )    
}

export default NavBar;