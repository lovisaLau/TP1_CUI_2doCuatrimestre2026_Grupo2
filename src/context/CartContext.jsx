import React, { createContext, useContext, useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('carrito_awayi');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Estados para el Toast (Aviso) y para el Mini Carrito (Offcanvas)
  const [showToast, setShowToast] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('carrito_awayi', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar producto
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].cantidad += 1;
        return updatedCart;
      }
      return [...prevCart, { ...product, cantidad: 1 }];
    });

    // Guardamos el último ítem agregado
    setLastAddedItem(product);
    // Mostramos el aviso (Toast) y abrimos el mini carrito
    setShowToast(true);
    setShowMiniCart(true);
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, cantidad: Math.max(1, item.cantidad - 1) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = cart.reduce((acc, item) => acc + (item.precio || 20000) * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalCantidad,
        totalPrecio,
        showMiniCart,
        setShowMiniCart
      }}
    >
      {children}

      {/* Cartel Flotante: ¡Producto agregado! */}
      <ToastContainer position="bottom-end" className="p-3 position-fixed z-3">
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={3000} 
          autohide
          bg="dark"
          className="text-white shadow-lg"
        >
          <Toast.Header closeVariant="white" className="bg-dark text-white border-bottom border-secondary">
            <strong className="me-auto">🛒 ¡Producto agregado!</strong>
            <small className="text-light">Ahora</small>
          </Toast.Header>
          <Toast.Body className="d-flex align-items-center">
            {lastAddedItem && (
              <>
                <img 
                  src={lastAddedItem.imagen} 
                  alt={lastAddedItem.nombre} 
                  style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                  className="bg-light rounded p-1 me-3"
                />
                <div>
                  <div className="fw-bold">{lastAddedItem.nombre}</div>
                  <small className="text-light">Se sumó correctamente a tu pedido.</small>
                </div>
              </>
            )}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);