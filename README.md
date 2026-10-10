🇦🇷 Awayi Remeras - E-commerce de Indumentaria (UNAHUR)

¡Bienvenido/a al repositorio oficial de Awayi Remeras! Este proyecto es un e-commerce desarrollado como Trabajo Práctico Integrador para la materia Construcción de Interfaces de Usuario en la Universidad Nacional de Hurlingham (UNAHUR).

La aplicación está inspirada en la cultura e identidad argentina, ofreciendo una colección exclusiva de remeras 100% algodón estampadas con diseños de la colección Fileteado Porteño de las distintas provincias del país, de la marca Awayi.

👥 Integrantes del Equipo

Integrante 1: Miriam Silvina Yanez

Integrante 2: [Nombre y Apellido] - Legajo / DNI

Integrante 3: [Nombre y Apellido] - Legajo / DNI

Integrante 4: Laura Lovisa.

🚀 Demo y Enlaces

Repositorio en GitHub: https://github.com/lovisaLau/TP1_CUI_2doCuatrimestre2026_Grupo2

Deploy en vivo (Vercel / Netlify):

🛠️ Tecnologías Utilizadas

Library Principal: React.js 

Enrutamiento: React Router DOM (v6)

Gestión de Estado Global: React Context API (useContext, useState, useEffect)

Diseño y Estilos: React-Bootstrap / Bootstrap 5

Persistencia de Datos: localStorage (Navegador)

Iconos y Feedback UI: React-Bootstrap Components (Toasts, Modals, Offcanvas)

📋 Funcionalidades Cumplidas (Requerimientos del TP)

1. 🏠 Página de Inicio (/)

Hero Section: Banner promocional con llamado a la acción (CTA).

Productos Destacados: Selección de las prendas más vendidas utilizando componentes reutilizables de tarjetas.

Sección de Beneficios: Información clara sobre envíos, medios de pago y garantía de calidad.

2. 🛍️ Catálogo de Productos (/productos)

Listado Completo: Más de 12 productos registrados con propiedades de id, nombre, precio, imagen, descripcion, categoria y stock.

Manejo de Stock: Control automático visual. Si un producto tiene stock: 0, la tarjeta deshabilita el botón y muestra la etiqueta "Sin stock".

Buscador interactivo: Permite filtrar en tiempo real las remeras por nombre de la provincia.

Ordenamiento Dinámico: Filtros acumulables para ordenar por:

Nombre (A - Z / Z - A)

Precio (Menor a Mayor / Mayor a Menor)

3. 🔍 Detalle del Producto (/producto/:id)

Rutas Dinámicas: Carga la información en tiempo real según el parámetro :id obtenido mediante useParams.

Navegación UX Mejorada: Las tarjetas del catálogo cuentan con efecto hover ("Ver más... 🔍") y son completamente cliqueables para dirigir al detalle sin interferir con el botón del carrito.

Información Completa: Muestra imagen ampliada, detalles del algodón peinado, precio, stock disponible y opción directa para agregar la prenda al carrito.

4. 🛒 Carrito de Compras (/carrito) con Context API

Mini Carrito / Offcanvas: Al presionar "Agregar al carrito", se despliega un panel lateral de consulta rápida en la parte superior derecha sin abandonar la navegación.

Notificaciones Flotantes (Toasts): Confirmación visual inmediata ("¡Producto agregado!") al sumar un ítem.

Página Completa del Carrito: Desglose en tabla responsiva con subtotales por producto (precio × cantidad), controles + / - para cambiar cantidades y botón para eliminar prendas.

Resumen y Totales: Cálculo automatizado en tiempo real de la cantidad total de unidades y monto global en pesos argentinos ($).

Modal de Confirmación Simulado: Proceso de finalización de compra con mensaje de éxito y opción de resetear el estado.

Botonera de Navegación: Acceso directo a "Seguir Comprando" que devuelve al usuario al catálogo.

Persistencia en LocalStorage: El carrito conserva las remeras guardadas aun si la página se recarga o se cierra la pestaña.

📁 Estructura del Proyecto

src/
|
├── components/         # Componentes reutilizables de la interfaz
│   ├── NavigationBar.jsx  # Barra de navegación responsive + Badge de Carrito + Mini-Carrito Offcanvas
│   ├── Footer.jsx         # Pie de página institucional
│   └── ProductoCard.jsx   # Tarjeta de producto individual con manejo de hover y stock
├── context/            # Estado global de la aplicación
│   └── CartContext.jsx    # Proveedor global del carrito, sincronizado con localStorage
├── data/               # Archivos de datos locales
│   └── productos.js       # Array estático con el catálogo de +12 remeras con stock y detalles
|___images/             # Imágenes estáticas e íconos del sitio
├── pages/              # Vistas principales vinculadas a las rutas
│   ├── Inicio.jsx         # Landing page / Home
│   ├── Productos.jsx      # Catálogo completo con buscador y filtros
│   ├── DetalleProducto.jsx# Vista individual según ID dinámico
│   └── Carrito.jsx        # Gestión completa del pedido y confirmación simulada
├── App.jsx             # Enrutador principal (Routes/Route) y CartProvider global
└── main.jsx            # Punto de entrada de la aplicación en React


⚙️ Instrucciones de Instalación y Ejecución Local

Para ejecutar este proyecto en tu entorno local, sigue estos sencillos pasos:

Clonar el repositorio:

git clone https://github.com/lovisaLau/TP1_CUI_2doCuatrimestre2026_Grupo2


Ingresar a la carpeta del proyecto:

cd awayi-remeras


Instalar las dependencias:

npm install


Ejecutar el servidor de desarrollo:

npm run dev


Abrir en el navegador:
Ingresa a http://localhost:5173/ (o la dirección indicada en la terminal) para interactuar con la aplicación.

🎓 Universidad Nacional de Hurlingham (UNAHUR)

Carrera: Tecnicatura Universitaria en Programación / Informática

Año 2026 2do Cuatrimestre