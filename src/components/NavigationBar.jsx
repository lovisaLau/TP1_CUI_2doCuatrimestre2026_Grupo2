import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          🇦🇷 Awayi Remeras
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === '/'}
            >
              Inicio
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/productos" 
              active={location.pathname === '/productos'}
            >
              Productos
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/nosotros" 
              active={location.pathname === '/nosotros'}
            >
              Nosotros
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contacto" 
              active={location.pathname === '/contacto'}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;