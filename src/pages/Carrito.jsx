import React, { useState } from 'react';
import { Container, Table, Button, Card, Row, Col, Modal, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Carrito = () => {
  const { 
    cart, 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart, 
    clearCart, 
    totalCantidad, 
    totalPrecio 
  } = useCart();

  const [showModal, setShowModal] = useState(false);
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const handleConfirmarCompra = () => {
    setShowModal(false);
    setCompraConfirmada(true);
    clearCart();
  };

  // Pantalla cuando la compra fue confirmada
  if (compraConfirmada) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="success" className="p-5 shadow-sm rounded">
          <h2 className="fw-bold mb-3">🎉 ¡Gracias por tu compra!</h2>
          <p className="fs-5">
            Tu pedido de remeras de Provincias Argentinas ha sido procesado con éxito de forma simulada.
          </p>
          <Button as={Link} to="/productos" variant="dark" className="mt-3 px-4 py-2 fw-semibold">
            Volver al catálogo
          </Button>
        </Alert>
      </Container>
    );
  }

  // Pantalla cuando el carrito está vacío
  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Card className="p-5 border-0 shadow-sm">
          <h3 className="fw-bold mb-3">Tu carrito está vacío 🛒</h3>
          <p className="text-muted mb-4">Aún no agregaste ninguna remera a tu lista.</p>
          <div>
            <Button as={Link} to="/productos" variant="primary" className="fw-semibold px-4 py-2">
              Explorar Productos
            </Button>
          </div>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-4">Carrito de Compras</h1>

      <Row className="g-4">
        {/* Tabla de Productos Agregados */}
        <Col lg={8}>
          <Card className="shadow-sm border-0 p-3 mb-3">
            <Table responsive align="middle" className="mb-0">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th className="text-center">Precio Unit.</th>
                  <th className="text-center">Cantidad</th>
                  <th className="text-end">Subtotal</th>
                  <th className="text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const precioUnit = item.precio || 20000;
                  const subtotal = precioUnit * item.cantidad;

                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.imagen}
                            alt={item.nombre}
                            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                            className="me-3 bg-light rounded p-1"
                          />
                          <span className="fw-semibold">{item.nombre}</span>
                        </div>
                      </td>
                      <td className="text-center">${precioUnit.toLocaleString('es-AR')}</td>
                      <td className="text-center">
                        <div className="d-inline-flex align-items-center border rounded">
                          <Button 
                            variant="light" 
                            size="sm" 
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-2 py-0 border-0 fw-bold"
                          >
                            -
                          </Button>
                          <span className="px-3 fw-bold">{item.cantidad}</span>
                          <Button 
                            variant="light" 
                            size="sm" 
                            onClick={() => increaseQuantity(item.id)}
                            className="px-2 py-0 border-0 fw-bold"
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td className="text-end fw-bold">${subtotal.toLocaleString('es-AR')}</td>
                      <td className="text-center">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          title="Eliminar producto"
                        >
                          🗑️
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>

          {/* BOTÓN "SEGUIR COMPRANDO" */}
          <div className="d-flex justify-content-start">
            <Button 
              as={Link} 
              to="/productos" 
              variant="outline-secondary" 
              className="fw-semibold px-4"
            >
              ← Seguir Comprando
            </Button>
          </div>
        </Col>

        {/* Resumen de Compra y Totales */}
        <Col lg={4}>
          <Card className="shadow-sm border-0 p-4">
            <h4 className="fw-bold mb-3 border-bottom pb-2">Resumen de Compra</h4>
            
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Total de prendas:</span>
              <span className="fw-bold">{totalCantidad} u.</span>
            </div>

            <div className="d-flex justify-content-between mb-4 fs-4 fw-bold text-dark border-top pt-3">
              <span>Total General:</span>
              <span>${totalPrecio.toLocaleString('es-AR')}</span>
            </div>

            <Button 
              variant="success" 
              size="lg" 
              className="w-100 fw-semibold"
              onClick={() => setShowModal(true)}
            >
              Confirmar Compra
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Modal Simulado de Confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Confirmación de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2">Estás a punto de confirmar el siguiente pedido:</p>
          <ul className="fw-bold">
            <li>{totalCantidad} remera(s)</li>
            <li>Monto total: ${totalPrecio.toLocaleString('es-AR')}</li>
          </ul>
          <p className="text-muted small m-0">¿Deseas finalizar la compra simulada?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmarCompra}>
            Aceptar y Finalizar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Carrito;