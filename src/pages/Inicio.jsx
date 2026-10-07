import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { productos } from '../data/productos'; 

const Inicio = () => {
  // Tomamos los primeros 4 productos para mostrar como destacados
  const productosDestacados = productos.slice(0, 4);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* --- NAVBAR --- */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            🇦🇷 Fileteado Shirts
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#productos">Productos</Nav.Link>
              <Nav.Link href="#nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- HERO SECTION --- */}
      <section className="bg-dark text-white text-center py-5 shadow-sm">
        <Container className="py-4">
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold mb-3">
                Colección Provincias Argentinas
              </h1>
              <p className="lead mb-4 text-light">
                Llevá el arte tradicional del fileteado porteño con el orgullo de cada provincia. Diseños únicos en 100% algodón premium.
              </p>
              <Button variant="outline-light" size="lg" href="#productos" className="px-4">
                Ver Colección
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- SECCIÓN BENEFICIOS --- */}
      <section className="py-4 bg-white border-bottom">
        <Container>
          <Row className="text-center g-3">
            <Col md={4}>
              <div className="p-3">
                <div className="fs-2 mb-2">🚚</div>
                <h5 className="fw-bold">Envíos a todo el país</h5>
                <p className="text-muted small m-0">Recibí tu remera en cualquier punto de Argentina.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <div className="fs-2 mb-2">💳</div>
                <h5 className="fw-bold">Pagos Flexibles</h5>
                <p className="text-muted small m-0">Aceptamos tarjetas de crédito, débito y transferencias.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3">
                <div className="fs-2 mb-2">✨</div>
                <h5 className="fw-bold">Calidad Garatizada</h5>
                <p className="text-muted small m-0">Algodón peinado y estampas de alta resistencia.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- PRODUCTOS DESTACADOS --- */}
      <Container id="productos" className="py-5 flex-grow-1">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Productos Destacados</h2>
          <p className="text-muted">Elegí la provincia que más te identifique</p>
        </div>

        <Row className="g-4">
          {productosDestacados.map((prod) => (
            <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <div className="position-relative overflow-hidden bg-white text-center p-2">
                  <Card.Img
                    variant="top"
                    src={prod.imagen}
                    alt={prod.nombre}
                    style={{ height: '220px', objectFit: 'contain' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Badge bg="secondary" className="mb-2 align-self-start">
                    {prod.categoria}
                  </Badge>
                  <Card.Title className="fs-6 fw-bold mb-2">
                    {prod.nombre}
                  </Card.Title>
                  <Card.Text className="text-muted small flex-grow-1">
                    {prod.descripcion}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                    <span className="fs-5 fw-bold text-dark">
                      ${prod.precio.toLocaleString('es-AR')}
                    </span>
                    <Button variant="primary" size="sm">
                      Agregar 🛒
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* --- FOOTER --- */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <Container>
          <p className="mb-1">© {new Date().getFullYear()} Fileteado Shirts - E-commerce de Indumentaria</p>
          <small className="text-muted">Diseñado con React y React-Bootstrap</small>
        </Container>
      </footer>
    </div>
  );
};

export default Inicio;