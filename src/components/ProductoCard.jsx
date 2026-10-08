import React from 'react';
import { Col, Card, Button, Badge } from 'react-bootstrap';

export const ProductoCard = ({ producto, lg = 4 }) => {
  const { 
    nombre, 
    imagen, 
    categoria = 'Indumentaria', 
    descripcion = 'Remera unisex blanca en algodón peinado con estampa de fileteado.', 
    precio = 20000 
  } = producto;

  return (
    <Col xs={12} sm={6} md={6} lg={lg}>
      <Card className="h-100 shadow-sm border-0 position-relative">
        <Badge 
          bg="dark" 
          className="position-absolute top-0 start-0 m-3 px-2 py-1 z-1"
        >
          {categoria}
        </Badge>

        <div className="bg-light text-center p-3 rounded-top">
          <Card.Img
            variant="top"
            src={imagen}
            alt={nombre}
            style={{
              height: '240px',
              objectFit: 'contain'
            }}
          />
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-5 fw-bold mb-2">
            {nombre}
          </Card.Title>
          
          <Card.Text className="text-muted small flex-grow-1">
            {descripcion}
          </Card.Text>

          <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
            <div>
              <span className="text-muted small d-block">Precio</span>
              <span className="fs-4 fw-bold text-dark">
                ${precio.toLocaleString('es-AR')}
              </span>
            </div>
            <Button variant="primary" className="fw-semibold px-3">
              Agregar 🛒
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductoCard;