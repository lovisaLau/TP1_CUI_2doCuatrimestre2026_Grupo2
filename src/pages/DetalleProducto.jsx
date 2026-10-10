import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { productos } from '../data/productos';
import { useCart } from '../context/CartContext';

export const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Buscamos el producto por su ID
  const producto = productos.find((p) => p.id === parseInt(id));

  // Si no se encuentra el producto
  if (!producto) {
    return (
      <Container className="py-5 text-center">
        <h3 className="text-muted mb-4">Producto no encontrado</h3>
        <Button variant="dark" onClick={() => navigate('/productos')}>
          ← Volver al catálogo
        </Button>
      </Container>
    );
  }

  const {
    nombre,
    imagen,
    categoria = 'Indumentaria',
    precio = 20000,
    descripcion = 'Remera unisex blanca en algodón peinado con estampa de fileteado porteño.',
    stock = 10,
    caracteristicas = [
      '100% Algodón Peinado 24/1 premium',
      'Estampa en serigrafía de alta durabilidad',
      'Corte unisex clásico',
      'Talles del S al XXL'
    ]
  } = producto;

  const sinStock = stock === 0;

  return (
    <Container className="py-5">
      {/* Botón Volver */}
      <Button 
        variant="outline-secondary" 
        className="mb-4" 
        onClick={() => navigate(-1)}
      >
        ← Volver
      </Button>

      <Row className="g-4 align-items-center">
        {/* Imagen Ampliada */}
        <Col md={6}>
          <Card className="border-0 shadow-sm p-4 text-center bg-white">
            <Card.Img
              variant="top"
              src={imagen}
              alt={nombre}
              style={{ maxHeight: '420px', objectFit: 'contain' }}
            />
          </Card>
        </Col>

        {/* Informacion del Producto */}
        <Col md={6}>
          <div className="ps-md-3">
            <Badge bg="dark" className="mb-2 px-3 py-2 fs-6">
              {categoria}
            </Badge>

            <h1 className="display-6 fw-bold mb-3">{nombre}</h1>

            <h2 className="fs-2 fw-bold text-dark mb-3">
              ${precio.toLocaleString('es-AR')}
            </h2>

            <p className="text-muted fs-5 mb-4">{descripcion}</p>

            {/* Disponibilidad / Stock */}
            <div className="mb-4">
              <span className="fw-semibold">Estado: </span>
              {sinStock ? (
                <Badge bg="danger" className="ms-2 px-2 py-1">
                  Sin Stock / No disponible
                </Badge>
              ) : (
                <Badge bg="success" className="ms-2 px-2 py-1">
                  Stock disponible ({stock} unidades)
                </Badge>
              )}
            </div>

            {/* Características principales */}
            <Card className="mb-4 bg-light border-0">
              <Card.Header className="fw-bold bg-transparent border-0 pt-3">
                Características principales:
              </Card.Header>
              <ListGroup variant="flush" className="bg-transparent">
                {caracteristicas.map((item, index) => (
                  <ListGroup.Item key={index} className="bg-transparent border-0 py-1 small text-muted">
                    • {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>

            {/* Acciones */}
            <div className="d-grid gap-2 d-md-flex">
              <Button
                variant={sinStock ? "secondary" : "primary"}
                size="lg"
                disabled={sinStock}
                onClick={() => addToCart({ ...producto, precio })}
                className="fw-semibold px-4"
              >
                {sinStock ? "Sin Stock" : "Agregar al Carrito 🛒"}
              </Button>
              <Button 
                variant="outline-dark" 
                size="lg" 
                as={Link} 
                to="/productos"
                className="px-4"
              >
                Ver más productos
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;