import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export const NavigationBar = ({ totalCarrito }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">AWAYI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
                        <Nav.Link as={NavLink} to="/carrito">
                            Carrito {totalCarrito > 0 && <Badge bg="secondary">{totalCarrito}</Badge>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}