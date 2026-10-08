import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductoCard from '../components/ProductoCard';
import { productos } from '../data/productos'; 

// Importamos Swiper y sus estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Inicio = () => {
  // Tomamos los productos (puedes tomar 6 u 8 para que el carrusel tenga margen para deslizar)
  const productosDestacados = productos ? productos.slice(0, 8) : [];

  return (
    <div>
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
              <Button variant="outline-light" size="lg" as={Link} to="/productos" className="px-4">
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
                <h5 className="fw-bold">Calidad Garantizada</h5>
                <p className="text-muted small m-0">Algodón peinado y estampas de alta resistencia.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- CARRUSEL SLIDER MULTI-ITEM --- */}
      <Container id="productos" className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Productos Destacados</h2>
          <p className="text-muted">Elegí la provincia que más te identifique</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerGroup={1} // Avance de a 1 producto
          breakpoints={{
            // Celulares
            0: {
              slidesPerView: 1,
            },
            // Tablets
            576: {
              slidesPerView: 2,
            },
            // Laptops / Computadoras (Muestra 4 alineados)
            992: {
              slidesPerView: 4,
            },
          }}
          className="pb-5 px-3"
        >
          {productosDestacados.map((prod) => (
            <SwiperSlide key={prod.id} className="h-auto">
              <ProductoCard producto={prod} lg={12} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Inicio;