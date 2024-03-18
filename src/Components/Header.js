import React from 'react';

//react-boostrap import
import { Container, Navbar, Nav } from 'react-bootstrap';


function Header() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light">
            <Container className='bg-light'>
                <Navbar.Brand href="/" style={{ fontSize: 30, fontWeight: 'bold' }}>MY PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About me</Nav.Link>
                        <Nav.Link href="/Services">Services</Nav.Link>
                        <Nav.Link href="/Projects">Projects</Nav.Link>
                        <Nav.Link href="/Contacts">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header