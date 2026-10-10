import React, { useState } from 'react';
import { Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const ProductoCard = ({ producto, lg = 4 }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const { 
    id,
    nombre = 'Remera', 
    imagen, 
    categoria = 'Indumentaria', 
    descripcion = 'Remera unisex blanca en algodón peinado con estampa de fileteado.', 
    precio = 20000,
    stock = 10 
  } = producto || {};

  const sinStock = stock === 0;

  const handleAgregarAlCarrito = (e) => {
    // Evita que el clic en el botón active el enlace del detalle
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...producto, precio });
  };

  return (
    <Col xs={12} sm={6} md={6} lg={lg}>
      <Card 
        className="h-100 shadow-sm border-0 position-relative text-dark"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          transform: isHovered ? 'translateY(-5px)' : 'none',
          boxShadow: isHovered ? '0 8px 20px rgba(0,0,0,0.15)' : undefined,
          cursor: 'pointer'
        }}
      >
        {/* Cartel flotante "Ver más..." en Hover */}
        {isHovered && (
          <Badge 
            bg="dark" 
            className="position-absolute top-50 start-50 translate-middle z-3 px-3 py-2 fs-6 shadow opacity-90 pointer-events-none"
          >
            Ver más... 🔍
          </Badge>
        )}

        {/* Badge Categoría */}
        <Badge bg="dark" className="position-absolute top-0 start-0 m-3 px-2 py-1 z-2">
          {categoria}
        </Badge>

        {/* Badge Sin Stock */}
        {sinStock && (
          <Badge bg="danger" className="position-absolute top-0 end-0 m-3 px-2 py-1 z-2">
            Sin stock
          </Badge>
        )}

        {/* Imagen del Producto */}
        <div className="bg-light text-center p-3 rounded-top position-relative overflow-hidden">
          <Card.Img
            variant="top"
            src={imagen}
            alt={nombre}
            style={{ 
              height: '220px', 
              objectFit: 'contain',
              opacity: isHovered ? 0.75 : 1,
              transition: 'opacity 0.2s ease'
            }}
          />
        </div>

        {/* Cuerpo de la Card */}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-5 fw-bold mb-2">
            {/* Link principal que expande la zona cliqueable a toda la card */}
            <Link to={`/producto/${id}`} className="text-decoration-none text-dark stretched-link">
              {nombre}
            </Link>
          </Card.Title>
          
          <Card.Text className="text-muted small flex-grow-1">{descripcion}</Card.Text>

          <div className="mt-3 pt-2 border-top">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted small">Precio</span>
              <span className="fs-5 fw-bold text-dark">
                ${precio.toLocaleString('es-AR')}
              </span>
            </div>

            {/* Botón de Agregar al Carrito (con z-index para estar por encima del link general) */}
            <Button 
              variant={sinStock ? "secondary" : "primary"} 
              size="sm" 
              disabled={sinStock}
              onClick={handleAgregarAlCarrito}
              className="w-100 fw-semibold py-2 position-relative z-2"
            >
              {sinStock ? "Sin stock" : "Agregar al Carrito 🛒"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductoCard;