-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-01-2021 a las 22:52:01
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

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

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Cocina', '2021-01-23 20:16:17', '2021-01-23 20:16:17'),
(2, 'Mesa', '2021-01-23 20:16:45', '2021-01-23 20:16:45'),
(3, 'Vasos y Copas', '2021-01-23 20:16:54', '2021-01-23 20:16:54');

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `hexadecimal`, `created_at`, `updated_at`) VALUES
(1, 'red', '#FF3333', '2021-01-23 21:19:50', '2021-01-23 21:19:50'),
(2, 'yellow', '#F3FF33', '2021-01-23 21:23:47', '2021-01-23 21:23:47'),
(3, 'green', '#08F30B', '2021-01-23 21:23:47', '2021-01-23 21:23:47');

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `product_id`, `created_at`, `updated_at`) VALUES
(8, 'image-1611523689282.png', 6, '2021-01-24 21:28:09', '2021-01-24 21:28:09'),
(9, 'image-1611523689291.jpg', 6, '2021-01-24 21:28:09', '2021-01-24 21:28:09'),
(10, 'image-1611523689294.jpg', 6, '2021-01-24 21:28:09', '2021-01-24 21:28:09');

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `code`, `name`, `cost`, `stock`, `description`, `markup`, `discount`, `price`, `subcategory_id`, `created_at`, `updated_at`) VALUES
(6, 888, 'el chavo del 8', 100, 1, 'prueba para ver como sale todo breeo\r\n', 50, 2, 150, 7, '2021-01-24 21:28:09', '2021-01-24 21:28:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_color`
--

CREATE TABLE `product_color` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `color_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_color`
--

INSERT INTO `product_color` (`id`, `product_id`, `color_id`, `created_at`, `updated_at`) VALUES
(9, 6, 1, '2021-01-24 21:28:09', '2021-01-24 21:28:09'),
(10, 6, 3, '2021-01-24 21:28:09', '2021-01-24 21:28:09');

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`id`, `name`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Cocción', 1, '2021-01-23 20:18:18', '2021-01-23 20:18:18'),
(2, 'Utensilios de cocina', 1, '2021-01-23 20:18:42', '2021-01-23 20:18:42'),
(3, 'Vajilla', 2, '2021-01-23 20:19:39', '2021-01-23 20:19:39'),
(4, 'Cubiertos', 2, '2021-01-23 20:20:05', '2021-01-23 20:20:05'),
(5, 'Plástico', 2, '2021-01-23 20:20:50', '2021-01-23 20:20:50'),
(6, 'Vasos', 3, '2021-01-23 20:21:05', '2021-01-23 20:21:05'),
(7, 'Copas', 3, '2021-01-23 20:21:14', '2021-01-23 20:21:14'),
(8, 'Jarras y Botellas', 3, '2021-01-23 20:21:39', '2021-01-23 20:21:39');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `type_customer`, `avatar`, `admin`, `created_at`, `updated_at`) VALUES
(1, 'matias', 'alvarellos', 'matias.alvarellos@gmail.com', '$2a$10$.KazNObx6x3r/wiIxvnl0uCn41rGAwaUNw2B4ZamuvUIEiZfqJ.SW', 'mayorista', 'avatar-1611432733924.png', 1, '2021-01-23 20:12:14', '2021-01-23 20:12:32'),
(2, 'gonza', 'zev', 'gonza@gmail.com', '$2a$10$V9vv6U8u6i7mxca/2gnmgOQHdJF3ohC38DJybN2xBRkEY6XMHrYVm', 'C.f', 'avatar-1611523723828.png', 0, '2021-01-24 21:28:43', '2021-01-24 21:28:43'),
(3, 'daiana', 'alva', 'daiana@gmail.com', '$2a$10$mjh/C5QCh8bWGdODU3S.jOo.UtI2zkA.C/QShLnjX27AH9MwCdDd2', 'C.f', 'avatar-1611523804614.png', 0, '2021-01-24 21:30:04', '2021-01-24 21:30:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product_color`
--
ALTER TABLE `product_color`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `color_id` (`color_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product_color`
--
ALTER TABLE `product_color`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product_color`
--
ALTER TABLE `product_color`
  ADD CONSTRAINT `product_color_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_color_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
