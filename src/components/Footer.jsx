import React from 'react';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <Container>
        <p className="mb-1">
          © {new Date().getFullYear()} Awayi Remeras - E-commerce de Indumentaria
        </p>
        <small className="text-muted">
          Diseñado con React y React-Bootstrap
        </small>
      </Container>
    </footer>
  );
};

export default Footer;