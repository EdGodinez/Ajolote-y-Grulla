-- MySQL dump 10.13  Distrib 8.4.13, for macos27.0 (arm64)
--
-- Host: localhost    Database: ajolote_grulla
-- ------------------------------------------------------
-- Server version	8.4.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `ajolote_grulla`
--

USE `ajolote_grulla`;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
INSERT INTO `caracteristicas` VALUES (7,'Aesthetic'),(12,'Creativo'),(4,'Diseño inteligente'),(9,'Diseño minimalista'),(10,'Divertido'),(8,'Elegante'),(3,'Ergonómico'),(5,'Innovador'),(2,'Multifuncional'),(6,'No sabía que lo necesitaba'),(11,'Original'),(1,'Práctico');
/*!40000 ALTER TABLE `caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (35,1,1,1),(36,1,4,2),(37,2,2,2),(38,3,3,1),(39,4,4,3),(40,5,5,2),(41,6,6,1),(42,7,7,2),(43,8,8,4),(44,9,9,3),(45,10,10,1);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (6,'Accesorios'),(5,'Cintas Adhesivas'),(4,'Libretas'),(2,'Marcadores'),(1,'Plumas y Lapiceros'),(3,'Útiles');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `detalle`
--

LOCK TABLES `detalle` WRITE;
/*!40000 ALTER TABLE `detalle` DISABLE KEYS */;
INSERT INTO `detalle` VALUES (28,'0.4 mm'),(15,'0.5 mm'),(16,'0.7 mm'),(17,'1.0 mm'),(12,'A4'),(13,'A5'),(14,'A6'),(7,'Amarillo'),(3,'Azul'),(21,'Azul marino'),(25,'Beige'),(2,'Blanco'),(24,'Café'),(19,'Cuadrado'),(27,'Dorado'),(31,'Foca'),(11,'Grande'),(23,'Gris'),(10,'Mediano'),(8,'Morado'),(1,'Negro'),(32,'Oso polar'),(9,'Pequeño'),(30,'Pingüino'),(26,'Plateado'),(29,'Platillo volador'),(20,'Rectangular'),(18,'Redondo'),(4,'Rojo'),(5,'Rosa'),(22,'Rosa palo'),(6,'Verde');
/*!40000 ALTER TABLE `detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `detalle_pedidos`
--

LOCK TABLES `detalle_pedidos` WRITE;
/*!40000 ALTER TABLE `detalle_pedidos` DISABLE KEYS */;
INSERT INTO `detalle_pedidos` VALUES (1,1,1,1,1300.00),(2,1,4,2,105.00),(3,2,2,1,370.00),(4,3,2,2,370.00),(5,4,3,1,293.00),(6,5,4,3,105.00),(7,6,5,2,117.00),(8,7,6,1,399.00),(9,8,7,2,516.00),(10,9,8,4,70.00),(11,10,7,1,516.00),(12,11,2,1,370.00),(13,11,8,2,70.00),(14,12,10,1,293.00),(15,12,9,1,111.00);
/*!40000 ALTER TABLE `detalle_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `estado_pedido`
--

LOCK TABLES `estado_pedido` WRITE;
/*!40000 ALTER TABLE `estado_pedido` DISABLE KEYS */;
INSERT INTO `estado_pedido` VALUES (5,'CANCELADO'),(4,'ENTREGADO'),(3,'ENVIADO'),(2,'PAGADO'),(1,'PENDIENTE');
/*!40000 ALTER TABLE `estado_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (4,'KOKUYO'),(1,'LACONIC'),(7,'MT'),(2,'Pilot'),(8,'PLUS'),(5,'Raymay Fuji'),(6,'Seed'),(9,'Sonic'),(3,'Sun-Star');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `metodos_pago`
--

LOCK TABLES `metodos_pago` WRITE;
/*!40000 ALTER TABLE `metodos_pago` DISABLE KEYS */;
INSERT INTO `metodos_pago` VALUES (5,'Efectivo'),(4,'PayPal'),(1,'Tarjeta de crédito'),(2,'Tarjeta de débito'),(3,'Transferencia bancaria');
/*!40000 ALTER TABLE `metodos_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,1,'2026-11-10 10:30:00',1510.00,4,1),(2,1,'2026-11-21 12:15:00',370.00,2,4),(3,2,'2026-11-12 14:20:00',740.00,4,2),(4,3,'2026-11-15 09:45:00',293.00,3,3),(5,4,'2026-11-16 16:30:00',315.00,2,1),(6,5,'2026-11-17 11:10:00',234.00,5,2),(7,6,'2026-11-18 13:25:00',399.00,4,4),(8,7,'2026-11-19 15:40:00',1032.00,3,1),(9,8,'2026-11-20 17:15:00',280.00,1,NULL),(10,2,'2026-11-21 10:00:00',516.00,2,3),(11,3,'2026-11-22 12:30:00',510.00,1,NULL),(12,6,'2026-11-23 09:20:00',404.00,2,2);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `producto_caracteristicas`
--

LOCK TABLES `producto_caracteristicas` WRITE;
/*!40000 ALTER TABLE `producto_caracteristicas` DISABLE KEYS */;
INSERT INTO `producto_caracteristicas` VALUES (2,1),(4,1),(5,1),(6,1),(10,1),(2,2),(6,2),(1,3),(4,4),(5,4),(6,4),(8,4),(2,5),(6,5),(8,5),(5,6),(8,6),(3,7),(7,7),(9,7),(10,7),(1,8),(1,9),(4,9),(3,10),(10,10),(3,11),(7,11),(9,11),(10,11),(3,12),(7,12),(9,12);
/*!40000 ALTER TABLE `producto_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `producto_detalle`
--

LOCK TABLES `producto_detalle` WRITE;
/*!40000 ALTER TABLE `producto_detalle` DISABLE KEYS */;
INSERT INTO `producto_detalle` VALUES (1,1),(2,1),(6,1),(5,2),(6,2),(8,2),(2,3),(3,3),(5,3),(9,3),(2,4),(3,5),(4,5),(5,5),(6,5),(7,5),(9,5),(3,6),(6,6),(9,6),(4,7),(3,8),(1,15),(9,25),(7,26),(7,27),(2,28),(3,29),(10,30),(10,31),(10,32);
/*!40000 ALTER TABLE `producto_detalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Portaminas de escritura afilada de 0.5 mm','Gran Premio 2026','Portaminas de 0.5 mm cuidadosamente diseñado para brindar una experiencia de escritura extraordinaria.',1300.00,15,'./assets/productos/P1-Lapiz-solido-de-escritura.jpg',1,1),(2,'FriXion Synergy 3','Premio a la Funcionalidad 2026','Bolígrafo borrable de tres colores con punta de 0.4 mm.',370.00,30,'./assets/productos/P3-FriXion-Synergy.jpg',1,2),(3,'Estuchera voladora no identificada','Premio a la Idea 2026','Estuche plano con diseño de platillo volador, disponible en 4 colores.',293.00,22,'./assets/productos/P4-Estuchera-voladora-no-identificada.jpg',6,3),(4,'Etiquetas en rollo Campus','Premio Notas Adhesivas 2026','Notas adhesivas traslúcidas en rollo para hacer anotaciones, disponibles en 2 colores.',105.00,40,'./assets/productos/P7-Etiquetas-en-rollo-y-recambios.jpg',5,4),(5,'Clips para libros Campus','Premio Clip 2026','Clips compactables para mantener tus libros abiertos sin maltratar las hojas, disponibles en 3 colores.',117.00,35,'./assets/productos/P8-clips-para-libros.jpg',6,4),(6,'Tijeras multifunción ZACCC','Premio Tijeras 2026','Tijeras multifuncionales con imán, filo recubierto de titanio y herramientas para cortar cinta adhesiva y cartón, disponibles en 4 colores.',399.00,18,'./assets/productos/P9-ZACCC-Tijeras.jpg',3,5),(7,'Marcador con purpurina LAMECO','Premio Pluma de Color 2026','Marcadores transparentes con glitter que permiten resaltar textos sin dificultar su lectura. Set de 3 colores.',516.00,25,'./assets/productos/P12-Marcador-LAMECO-purpurina.jpg',2,3),(8,'Goma para borrar KADOLOOP','Premio Goma de Borrar 2026','Goma de borrar remoldeable que recupera su forma al calentarla, permitiendo mantener sus esquinas para borrar con precisión.',70.00,50,'./assets/productos/P13-Borrador-KADOLOOP.jpg',3,6),(9,'Cintas washi para escribir','Premio Cinta Adhesiva 2026','Cintas washi decorativas sobre las que puedes escribir con cualquier pluma o plumón, disponibles en distintos diseños.',111.00,45,'./assets/productos/P15-Cintas-Washi.jpg',5,7),(10,'Cortador de cajas PICO FRIENDS','Premio Cutters 2026','Cúter para abrir cajas con divertidos diseños de animalitos. Disponible en 3 modelos que también sirven como decoración de escritorio.',293.00,28,'./assets/productos/P16-Cortador-Pinguino.jpg',6,8);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'CLIENTE');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Santi Hernández','santi@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Ciudad de México',2),(2,'Eliezer Martínez','eliezer@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Puebla, Puebla',2),(3,'Natanael García','natanael@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Pachuca, Hidalgo',2),(4,'Miguel Rodríguez','miguel@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Toluca, Estado de México',2),(5,'Carlos Ramírez','carlos@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Monterrey, Nuevo León',2),(6,'María López','maria@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Guadalajara, Jalisco',2),(7,'Javier González','javier@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Querétaro, Querétaro',2),(8,'Sofía Torres','sofia@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Mérida, Yucatán',2),(9,'Diego Sánchez','diego@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Morelia, Michoacán',2),(10,'Ana Flores','ana@example.com','34e422278ea745b5d87ba6592f0ea3fe32a2eb7593f5960ac72d7094fb121f3d','Xalapa, Veracruz',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-24 10:40:40
