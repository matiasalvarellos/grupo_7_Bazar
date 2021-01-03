-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 03-01-2021 a las 06:11:44
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bazar_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CARRITOS`
--

CREATE TABLE `CARRITOS` (
  `ID` int(100) NOT NULL,
  `USUARIO_ID` int(100) DEFAULT NULL,
  `MONTO` int(10) DEFAULT NULL,
  `ESTADO` varchar(250) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Carrito_Producto`
--

CREATE TABLE `Carrito_Producto` (
  `ID` int(100) NOT NULL,
  `PRODUCTO_ID` int(100) DEFAULT NULL,
  `CARRITO_ID` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(100) NOT NULL,
  `Nombre` varchar(200) CHARACTER SET utf8 NOT NULL,
  `Decripción` varchar(500) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CATEGORIA_PRODUCTO`
--

CREATE TABLE `CATEGORIA_PRODUCTO` (
  `ID` int(100) NOT NULL,
  `CATEGORIA_ID` int(100) NOT NULL,
  `PRODUCTO_ID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `ID` int(100) NOT NULL,
  `Nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Compras`
--

CREATE TABLE `Compras` (
  `ID` int(100) NOT NULL,
  `USUARIO_ID` int(100) DEFAULT NULL,
  `Monto` int(10) DEFAULT NULL,
  `Fecha` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Compra_Producto`
--

CREATE TABLE `Compra_Producto` (
  `ID` int(100) NOT NULL,
  `COMPRA_ID` int(100) DEFAULT NULL,
  `PRODUCTO_ID` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Productos`
--

CREATE TABLE `Productos` (
  `ID` int(100) NOT NULL,
  `CODIGO` int(10) DEFAULT NULL,
  `NOMBRE` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `STOCK` int(10) DEFAULT NULL,
  `DESCRIPCION` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `IMAGENES` varchar(1000) CHARACTER SET utf8 DEFAULT NULL,
  `COSTO` int(10) DEFAULT NULL,
  `MARKUP` int(10) NOT NULL,
  `DESCUENTO` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PRODUCTO_COLOR`
--

CREATE TABLE `PRODUCTO_COLOR` (
  `ID` int(11) NOT NULL,
  `COLOR_ID` int(11) DEFAULT NULL,
  `PRODUCTO_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `USUARIOS`
--

CREATE TABLE `USUARIOS` (
  `ID` int(100) NOT NULL,
  `NOMBRE` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `APELLIDO` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `E-MAIL` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `PASSWORD` varchar(1000) NOT NULL,
  `AVATAR` varchar(150) CHARACTER SET utf8 NOT NULL,
  `ADMIN` varchar(10) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `CARRITOS`
--
ALTER TABLE `CARRITOS`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USUARIO_ID` (`USUARIO_ID`);

--
-- Indices de la tabla `Carrito_Producto`
--
ALTER TABLE `Carrito_Producto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `PRODUCTO_ID` (`PRODUCTO_ID`),
  ADD KEY `CARRITO_ID` (`CARRITO_ID`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `CATEGORIA_PRODUCTO`
--
ALTER TABLE `CATEGORIA_PRODUCTO`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CATEGORIA_ID` (`CATEGORIA_ID`,`PRODUCTO_ID`),
  ADD KEY `PRODUCTO_ID` (`PRODUCTO_ID`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `Compras`
--
ALTER TABLE `Compras`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USUARIO_ID` (`USUARIO_ID`);

--
-- Indices de la tabla `Compra_Producto`
--
ALTER TABLE `Compra_Producto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `COMPRA_ID` (`COMPRA_ID`,`PRODUCTO_ID`),
  ADD KEY `PRODUCTO_ID` (`PRODUCTO_ID`);

--
-- Indices de la tabla `Productos`
--
ALTER TABLE `Productos`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `PRODUCTO_COLOR`
--
ALTER TABLE `PRODUCTO_COLOR`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CATEGORIA_ID` (`COLOR_ID`,`PRODUCTO_ID`),
  ADD KEY `PRODUCTO_ID` (`PRODUCTO_ID`);

--
-- Indices de la tabla `USUARIOS`
--
ALTER TABLE `USUARIOS`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `CARRITOS`
--
ALTER TABLE `CARRITOS`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Carrito_Producto`
--
ALTER TABLE `Carrito_Producto`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `CATEGORIA_PRODUCTO`
--
ALTER TABLE `CATEGORIA_PRODUCTO`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Compras`
--
ALTER TABLE `Compras`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Compra_Producto`
--
ALTER TABLE `Compra_Producto`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Productos`
--
ALTER TABLE `Productos`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `PRODUCTO_COLOR`
--
ALTER TABLE `PRODUCTO_COLOR`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `USUARIOS`
--
ALTER TABLE `USUARIOS`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Carrito_Producto`
--
ALTER TABLE `Carrito_Producto`
  ADD CONSTRAINT `Carrito_Producto_ibfk_1` FOREIGN KEY (`PRODUCTO_ID`) REFERENCES `Productos` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `Carrito_Producto_ibfk_2` FOREIGN KEY (`CARRITO_ID`) REFERENCES `CARRITOS` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `CATEGORIA_PRODUCTO`
--
ALTER TABLE `CATEGORIA_PRODUCTO`
  ADD CONSTRAINT `CATEGORIA_PRODUCTO_ibfk_1` FOREIGN KEY (`PRODUCTO_ID`) REFERENCES `Productos` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `CATEGORIA_PRODUCTO_ibfk_2` FOREIGN KEY (`CATEGORIA_ID`) REFERENCES `categorias` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Compras`
--
ALTER TABLE `Compras`
  ADD CONSTRAINT `Compras_ibfk_1` FOREIGN KEY (`USUARIO_ID`) REFERENCES `USUARIOS` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `Compra_Producto`
--
ALTER TABLE `Compra_Producto`
  ADD CONSTRAINT `Compra_Producto_ibfk_1` FOREIGN KEY (`COMPRA_ID`) REFERENCES `Compras` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `Compra_Producto_ibfk_2` FOREIGN KEY (`PRODUCTO_ID`) REFERENCES `Productos` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `PRODUCTO_COLOR`
--
ALTER TABLE `PRODUCTO_COLOR`
  ADD CONSTRAINT `PRODUCTO_COLOR_ibfk_1` FOREIGN KEY (`COLOR_ID`) REFERENCES `colores` (`ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `PRODUCTO_COLOR_ibfk_2` FOREIGN KEY (`PRODUCTO_ID`) REFERENCES `Productos` (`ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
