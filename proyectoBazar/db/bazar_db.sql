-- Creamos la DB
CREATE SCHEMA bazar_db;

-- Seleccionamos la DB
USE bazar_db;

-- Creamos la tabla USERS
CREATE TABLE users(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    type_customer VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    admin TINYINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla PRODUCTS
CREATE TABLE products(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    code INT UNSIGNED NOT NULL,
    name VARCHAR(255) NOT NULL,
    cost INT UNSIGNED NOT NULL,
    stock INT UNSIGNED NOT NULL,
    description TEXT NOT NULL,
    markup INT UNSIGNED NOT NULL,
    discount INT UNSIGNED NOT NULL,
    price INT UNSIGNED NOT NULL,
    subcategory_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla IMAGES
CREATE TABLE images(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    product_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla COLORS
CREATE TABLE colors(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    hexadecimal VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla pivot PRODUCT_COLOR (PRODUCTS - COLORS)
CREATE TABLE product_color(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id INT UNSIGNED NOT NULL,
    color_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla CATEGORIES
CREATE TABLE categories(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO categories (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Cocina', '2021-01-23 20:16:17', '2021-01-23 20:16:17'),
(2, 'Mesa', '2021-01-23 20:16:45', '2021-01-23 20:16:45'),
(3, 'Vasos y Copas', '2021-01-23 20:16:54', '2021-01-23 20:16:54');

-- --------------------------------------------------------

-- Creamos la tabla SUBCATEGORIES
CREATE TABLE subcategories(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO subcategories (`id`, `name`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Cocción', 1, '2021-01-23 20:18:18', '2021-01-23 20:18:18'),
(2, 'Utensilios de cocina', 1, '2021-01-23 20:18:42', '2021-01-23 20:18:42'),
(3, 'Vajilla', 2, '2021-01-23 20:19:39', '2021-01-23 20:19:39'),
(4, 'Cubiertos', 2, '2021-01-23 20:20:05', '2021-01-23 20:20:05'),
(5, 'Plástico', 2, '2021-01-23 20:20:50', '2021-01-23 20:20:50'),
(6, 'Vasos', 3, '2021-01-23 20:21:05', '2021-01-23 20:21:05'),
(7, 'Copas', 3, '2021-01-23 20:21:14', '2021-01-23 20:21:14'),
(8, 'Jarras y Botellas', 3, '2021-01-23 20:21:39', '2021-01-23 20:21:39');


--
-- Arranca el carrito
--

-- Creamos la tabla de ORDERS
CREATE TABLE orders(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    total_price INT UNSIGNED NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla ITEMS
CREATE TABLE items(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    unit_price INT UNSIGNED NOT NULL,
    subtotal INT UNSIGNED NOT NULL,
    quantity INT UNSIGNED NOT NULL,
    image VARCHAR(255) NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    order_id INT UNSIGNED DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Inicia creación de FK
--

ALTER TABLE orders
ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE items
ADD FOREIGN KEY (user_id) REFERENCES users(id),
ADD FOREIGN KEY (order_id) REFERENCES orders(id);

ALTER TABLE subcategories
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

ALTER TABLE images
ADD FOREIGN KEY (product_id) REFERENCES products(id);

ALTER TABLE products
ADD FOREIGN KEY (subcategory_id) REFERENCES subcategories(id);

ALTER TABLE product_color
ADD FOREIGN KEY (product_id) REFERENCES products(id),
ADD FOREIGN KEY (color_id) REFERENCES colors(id);