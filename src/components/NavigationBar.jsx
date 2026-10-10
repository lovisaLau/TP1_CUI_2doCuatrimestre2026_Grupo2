import React from 'react';
import { Navbar, Nav, Container, Badge, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    cart, 
    totalCantidad, 
    totalPrecio, 
    showMiniCart, 
    setShowMiniCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  const handleIrAlCarritoCompleto = () => {
    setShowMiniCart(false);
    navigate('/carrito');
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            🇦🇷 Awayi Remeras
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/productos" active={location.pathname === '/productos'}>
                Productos
              </Nav.Link>

              {/* Botón de Carrito con indicador */}
              <Button
                variant="outline-light"
                className="ms-lg-3 position-relative d-inline-flex align-items-center"
                onClick={() => setShowMiniCart(true)}
              >
                🛒 Carrito
                {totalCantidad > 0 && (
                  <Badge bg="primary" pill className="ms-2">
                    {totalCantidad}
                  </Badge>
                )}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MINI CARRITO LATERAL (OFFCANVAS) */}
      <Offcanvas 
        show={showMiniCart} 
        onHide={() => setShowMiniCart(false)} 
        placement="end"
      >
        <Offcanvas.Header closeButton className="bg-white text-black">
          <Offcanvas.Title className="fw-bold">🛒 Tu Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          {cart.length === 0 ? (
            <div className="text-center my-auto py-5">
              <h5 className="text-muted">El carrito está vacío 🛒</h5>
              <p className="small text-muted mb-4">Agregá prendas desde el catálogo.</p>
              <Button variant="primary" onClick={() => { setShowMiniCart(false); navigate('/productos'); }}>
                Ver Productos
              </Button>
            </div>
          ) : (
            <>
              {/* Lista resumida de productos */}
              <ListGroup variant="flush" className="flex-grow-1 overflow-auto mb-3">
                {cart.map((item) => {
                  const precioUnit = item.precio || 20000;
                  return (
                    <ListGroup.Item key={item.id} className="px-0 py-3 border-bottom">
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.imagen} 
                          alt={item.nombre} 
                          style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                          className="bg-light rounded me-3 p-1"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-1 fw-bold">{item.nombre}</h6>
                          <div className="small text-muted">
                            ${precioUnit.toLocaleString('es-AR')} x {item.cantidad}
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <Button 
                              variant="outline-secondary" 
                              size="sm" 
                              className="px-2 py-0 me-2"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </Button>
                            <span className="fw-bold me-2">{item.cantidad}</span>
                            <Button 
                              variant="outline-secondary" 
                              size="sm" 
                              className="px-2 py-0 me-2"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </Button>
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="text-danger p-0 ms-auto"
                              onClick={() => removeFromCart(item.id)}
                            >
                              🗑️
                            </Button>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>

              {/* Pie con Totales y Botón para ir al Carrito Completo */}
              <div className="border-top pt-3 mt-auto">
                <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                  <span>Subtotal:</span>
                  <span>${totalPrecio.toLocaleString('es-AR')}</span>
                </div>
                <Button 
                  variant="success" 
                  size="lg" 
                  className="w-100 fw-semibold mb-2"
                  onClick={handleIrAlCarritoCompleto}
                >
                  Ir al Carrito Completo 🛒
                </Button>
                <Button 
                  variant="outline-secondary" 
                  className="w-100"
                  onClick={() => setShowMiniCart(false)}
                >
                  Seguir Comprando
                </Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;