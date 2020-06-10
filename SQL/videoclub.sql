CREATE database videoclub;

USE videoclub;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS peliculas (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    descripcion VARCHAR(666),
    actores VARCHAR(666),
    director VARCHAR(333),
    caratula VARCHAR(333),
    tarifa_standard FLOAT,
    tarifa_estreno FLOAT,
    tarifa_vieja FLOAT,
    pegi INT
);

CREATE TABLE IF NOT EXISTS socios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(33),
    apellidos VARCHAR(66),
    fecha_nacimiento DATE,
    dni VARCHAR(10),
    email VARCHAR(255),
    telefono VARCHAR(50)
    
);

CREATE TABLE IF NOT EXISTS copias (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    clase ENUM('VHS', 'DVD'),
    tarifa ENUM('estreno', 'standar', 'vieja'),
    id_pelicula INT,
    id_proveedor INT,
    FOREIGN KEY (id_pelicula) references peliculas(id),
    FOREIGN KEY (id_proveedor) references proveedores(id)
);

CREATE TABLE IF NOT EXISTS socios_copias (
	fecha_devolucion DATE,
    devuelto BOOLEAN,
    pagado BOOLEAN,
    rating INT CHECK (id BETWEEN 0 AND 9),
    comentario varchar(666),
    id_copia INT,
	id_socio INT,
    FOREIGN KEY (id_copia) references copias(id),
    FOREIGN KEY (id_socio) references socios(id)
);

CREATE TABLE IF NOT EXISTS proveedores (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(33),
    telefono VARCHAR(50),
    email VARCHAR(255),
    id_pelicula INT,
    FOREIGN KEY (id_pelicula) references peliculas(id)
);

CREATE TABLE IF NOT EXISTS alquileres (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fecha_alquiler DATE,
    fecha_devolucion DATE,
    id_pelicula INT,
    id_socio INT,
    FOREIGN KEY (id_pelicula) references peliculas(id),
    FOREIGN KEY (id_socio) references socios(id)
);

SET FOREIGN_KEY_CHECKS = 1;
    