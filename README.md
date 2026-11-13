# 🦎🕊️ Ajolote y Grulla

E-commerce de papelería japonesa en México.

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap%205-7952B3?logo=bootstrap&logoColor=white)

---

## 📖 Descripción

**Ajolote y Grulla** es una tienda en línea especializada en papelería japonesa: artículos en tendencia, piezas de diseñadores independientes y productos ganadores de los **Japanese Stationery Awards**.

La papelería japonesa es difícil de conseguir en México: muchas marcas son pequeñas empresas que no exportan, en los grandes marketplaces se pierde entre miles de resultados y comprar en sitios japoneses implica la barrera del idioma. Ajolote y Grulla acerca estos productos con un catálogo curado, fichas que explican qué hace especial a cada artículo y filtros por tipo, funcionalidad y personalidad de diseño.

**Público objetivo:** estudiantes, diseñadores, arquitectos, creadores de contenido, coleccionistas y aficionados al bullet journaling y scrapbooking (principalmente de 15 a 35 años).

Proyecto integrador del curso **Desarrollador Java Full Stack** de Generation México.

---

## 👩‍💻 Developers 

| Integrante | GitHub |
|---|---|
| Aída Alejandra Carvajal Aguado | [@aalecarvajal](https://github.com/aalecarvajal) |
| Alan Jair Cruz Arenas | [@Alan-JC](https://github.com/Alan-JC) |
| Argelia Gómez Melquiades | [@ArgeliaGM](https://github.com/ArgeliaGM) |
| Cristian Ruiz Ortega | [@ruisc021-droid](https://github.com/ruisc021-droid) |
| Eduardo Godinez Santana | [@EdGodinez](https://github.com/EdGodinez) |
| Erick Sebastian Cortes Tovar | [@cbas-o7](https://github.com/cbas-o7) |
| Kevin Adair Martinez Yañez | [@KevinMartinezY](https://github.com/KevinMartinezY) |
| Luis Enrique Jimenez Bernal | [@Don-kikin](https://github.com/Don-kikin) |
| Mariana Arleth Aquino Alarcón | [@marianaaquinoalarcon](https://github.com/marianaaquinoalarcon) |

---

## 🛠️ Tecnologías

| Frontend | Backend | Base de datos | Control de versiones | Herramientas |
|---|---|---|---|---|
| HTML5 | Java | MySQL | Git | Visual Studio Code |
| CSS3 | Spring Boot | MySQL Workbench | GitHub | IntelliJ IDEA |
| JavaScript (ES Modules) | Spring Data JPA | | GitHub Projects | Postman |
| Bootstrap 5.3 | Spring Security | | | Figma / Canva |
| Bootstrap Icons · Boxicons | Maven | | | Trello / Jira |


---

## 🧩 Componentes

El sitio está construido con **componentes reutilizables en JavaScript**: cada uno es una función `render...()` que inserta su HTML en un contenedor de la página. Así, el encabezado y el pie de página se escriben una sola vez y se usan en todas las páginas.

### Componentes globales (todas las páginas)

| Componente | Archivo | Contenido |
|---|---|---|
| Encabezado (navbar) | `js/components/header.js` | Logo, buscador, enlaces de navegación con la página activa resaltada y menú *offcanvas* en móvil |
| Pie de página | `js/components/footer.js` | Logo, redes sociales y enlaces de navegación |

### Componentes por página

| Página | Componentes |
|---|---|
| Inicio | Hero, categorías, productos destacados, sección "Sobre nosotros" |
| Catálogo | Tarjeta de producto, filtros por categoría y características |
| Nosotros | Hero, carrusel, sección de equipo y tarjetas de presentación de integrantes |
| Contacto | Información de contacto y formulario |
| Agregar producto | Formulario de alta de productos con validaciones |

---

## ✨ Características

### Disponibles (frontend)

- ✅ Diseño **responsivo** con Bootstrap 5 (escritorio, tablet y móvil).
- ✅ Encabezado y pie de página reutilizables, con navegación que marca la página actual.
- ✅ Página de inicio con hero, categorías y productos destacados.
- ✅ **Catálogo** generado dinámicamente desde un arreglo de productos de muestra.
- ✅ **Filtros** por categoría y por características del producto.
- ✅ Tarjetas de producto con etiquetas, precio y botones de acción.
- ✅ Página **Nosotros** con historia, carrusel y tarjetas del equipo (enlaces a GitHub y LinkedIn).
- ✅ **Formulario de contacto** funcional mediante Formspree, con mensajes de éxito o error.
- ✅ Formulario para **agregar productos** con validaciones (en progreso).
- ✅ Enlaces a redes sociales: Facebook, Instagram, TikTok y X.

### Próximamente

- ⏳ Búsqueda de productos por nombre.
- ⏳ Página de detalle de producto con ficha editorial.
- ⏳ Carrito de compras y checkout con pago simulado.
- ⏳ Registro, inicio de sesión y sección "Mi cuenta".
- ⏳ Calificaciones con estrellas y reseñas.
- ⏳ Panel de administración (productos, pedidos, usuarios y reseñas).
- ⏳ Chatbot recomendador que perfila los gustos del usuario.

---

## 📁 Estructura del proyecto

```
Ajolote-y-Grulla/
├── index.html                  # Inicio
├── products.html               # Catálogo
├── about.html                  # Nosotros
├── contact.html                # Contacto
├── agregarProducto.html        # Formulario para agregar productos
│
├── assets/                     # Imágenes del sitio
│   ├── logos/
│   ├── productos/
│   ├── team-photos/
│   ├── about-hero/
│   ├── about-carrusel/
│   ├── footer/
│   └── images/
│
├── css/
│   ├── style.css               # Estilos globales: paleta, tipografía y clases base
│   ├── components/             # Estilos de componentes globales
│   │   ├── header/header.css
│   │   └── footer/footer.css
│   └── pages/                  # Estilos específicos de cada página
│       ├── home/
│       ├── products/
│       ├── about/
│       ├── contact/
│       └── agregarProducto/
│
├── js/
│   ├── main.js                 # Punto de entrada: renderiza componentes según la página
│   ├── components/             # Componentes globales
│   │   ├── header.js
│   │   └── footer.js
│   └── pages/                  # Lógica y componentes de cada página
│       ├── index/
│       ├── products/           # products.js (datos) y catalogo.js (render y filtros)
│       ├── about/
│       ├── contact/
│       └── agregarProducto/
│
├── .gitignore
└── README.md
```

**¿Cómo se conectan las piezas?** Cada página HTML carga Bootstrap, `css/style.css`, su hoja de estilos propia y `js/main.js`. `main.js` siempre dibuja el encabezado y el pie de página, y después revisa qué contenedor existe en la página (por ejemplo `#lista-productos`) para decidir qué componentes de página renderizar.

### Backend

> ⏳ **Pendiente.** Aquí se documentará la estructura del proyecto Spring Boot (entidades, repositorios, servicios, controladores) y el modelo de la base de datos MySQL.

---

## ⚙️ Instalación

### Requisitos

- [Git](https://git-scm.com/)
- Un navegador actualizado (Chrome, Firefox, Safari o Edge)
- [Visual Studio Code](https://code.visualstudio.com/) con la extensión **Live Server** (recomendado)

### Pasos (frontend)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/EdGodinez/Ajolote-y-Grulla.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd Ajolote-y-Grulla
   ```
3. Ábrela en Visual Studio Code:
   ```bash
   code .
   ```
4. Da clic derecho sobre `index.html` → **Open with Live Server**.

> ⚠️ **Importante:** el proyecto usa módulos de JavaScript (`type="module"`), que el navegador bloquea si abres el HTML con doble clic (`file://`). Por eso hay que abrirlo con un servidor local como Live Server.

Bootstrap, Bootstrap Icons y Boxicons se cargan desde CDN, así que no hay que instalar dependencias.

### Backend y base de datos

> ⏳ **Pendiente.** Aquí se agregarán los requisitos (JDK, Maven, MySQL), la creación de la base de datos, la configuración de `application.properties` y cómo levantar el servidor de Spring Boot.

---

## 🚀 Uso

1. Navega desde el encabezado entre **Inicio**, **Catálogo**, **Nosotros** y **Contacto**.
2. En el **Catálogo**, usa los botones de filtro para ver productos por categoría o característica; el botón **Todos** reinicia el filtro.
3. En **Contacto**, llena el formulario y envíalo; verás un mensaje de confirmación.
4. Para registrar un producto nuevo, abre `agregarProducto.html` y completa el formulario.

### Uso con backend

> ⏳ **Pendiente.** Aquí se documentarán los endpoints de la API REST, el registro e inicio de sesión, el flujo de compra y el acceso al panel de administración.

---

## 🌿 Flujo de trabajo con Git

- `main`: versión estable del proyecto.
- `develop`: rama de integración donde se juntan las funcionalidades.
- `feature/nombre`: nuevas funcionalidades.
- `fix/nombre`: correcciones.

Cada integrante trabaja en su rama y abre un *pull request* hacia `develop`.


