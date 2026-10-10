import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import ProductoCard from '../components/ProductoCard';
import { productos } from '../data/productos';

export const Productos = () => {
  const [busqueda, setBusqueda] = useState('');
  const [orden, setOrden] = useState('defecto');

  // 1. Filtrado por nombre
  let productosFiltrados = (productos || []).filter((prod) =>
    prod.nombre ? prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) : false
  );

  // 2. Ordenamiento (Nombre A-Z, Z-A y Precios Menor/Mayor)
  if (orden === 'az') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (orden === 'za') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => b.nombre.localeCompare(a.nombre));
  } else if (orden === 'precio-menor') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => (a.precio || 20000) - (b.precio || 20000));
  } else if (orden === 'precio-mayor') {
    productosFiltrados = [...productosFiltrados].sort((a, b) => (b.precio || 20000) - (a.precio || 20000));
  }

  return (
    <Container className="py-5 flex-grow-1">
      {/* Encabezado */}
      <div className="text-center mb-4">
        <h1 className="fw-bold display-5 mb-2">Colección Provincias Argentinas</h1>
        <p className="text-muted">
          Remeras 100% algodón premium estampadas con diseño exclusivo de Fileteado Porteño.
        </p>
      </div>

      {/* Barra de Filtros */}
      <Row className="mb-4 g-3 justify-content-between align-items-center bg-white p-3 rounded shadow-sm border">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text id="search-addon">🔍</InputGroup.Text>
            <Form.Control
              placeholder="Buscar provincia (ej: Mendoza, Córdoba)..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <Form.Label className="me-2 mb-0 fw-semibold text-nowrap">Ordenar por:</Form.Label>
          <Form.Select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="defecto">Por defecto</option>
            <option value="az">Nombre (A - Z)</option>
            <option value="za">Nombre (Z - A)</option>
            <option value="precio-menor">Precio: Menor a Mayor</option>
            <option value="precio-mayor">Precio: Mayor a Menor</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Grilla de Productos */}
      <Row className="g-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod, index) => (
            <ProductoCard 
              key={prod.id || index} // 👈 Asegura una key válida incluso si falta prod.id
              producto={prod} 
            />
          ))
        ) : (
          <Col xs={12} className="text-center py-5">
            <h4 className="text-muted">No se encontraron productos que coincidan con la búsqueda.</h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Productos;