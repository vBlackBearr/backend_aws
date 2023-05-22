CREATE DATABASE IF NOT EXISTS iResident;
    
    USE iResident;


-- Tabla de Residentes
CREATE TABLE IF NOT EXISTS Residentes (
                            id INT PRIMARY KEY,
                            nombre VARCHAR(50) NOT NULL,
                            apellido VARCHAR(50) NOT NULL,
                            direccion VARCHAR(100) NOT NULL,
                            telefono VARCHAR(20) NOT NULL,
                            email VARCHAR(100) NOT NULL,
                            fecha_registro DATE NOT NULL
);

-- Tabla de Visitantes
CREATE TABLE IF NOT EXISTS Visitantes (
                            id INT PRIMARY KEY,
                            nombre VARCHAR(50) NOT NULL,
                            apellido VARCHAR(50) NOT NULL,
                            residente_id INT NOT NULL,
                            fecha_visita DATE NOT NULL,
                            hora_ingreso TIME NOT NULL,
                            hora_salida TIME NOT NULL,
                            FOREIGN KEY (residente_id) REFERENCES Residentes(id)
);

-- Tabla de Carros
CREATE TABLE IF NOT EXISTS Carros (
                        id INT PRIMARY KEY,
                        placa VARCHAR(10) NOT NULL,
                        marca VARCHAR(50) NOT NULL,
                        modelo VARCHAR(50) NOT NULL
);

-- Tabla de Asociación Residentes-Carros
CREATE TABLE IF NOT EXISTS Residentes_Carros (
                                   residente_id INT NOT NULL,
                                   carro_id INT NOT NULL,
                                   PRIMARY KEY (residente_id, carro_id),
                                   FOREIGN KEY (residente_id) REFERENCES Residentes(id),
                                   FOREIGN KEY (carro_id) REFERENCES Carros(id)
);

-- Tabla de Asociación Visitantes-Carros
CREATE TABLE IF NOT EXISTS Visitantes_Carros (
                                   visitante_id INT NOT NULL,
                                   carro_id INT NOT NULL,
                                   PRIMARY KEY (visitante_id, carro_id),
                                   FOREIGN KEY (visitante_id) REFERENCES Visitantes(id),
                                   FOREIGN KEY (carro_id) REFERENCES Carros(id)
);


-- Tabla de Permisos de Acceso a Visitantes
CREATE TABLE IF NOT EXISTS permisos_accesos (
                                  id INT PRIMARY KEY AUTO_INCREMENT,
                                  residente_id INT,
                                  visitante_id INT,
                                  fecha_hora_inicio DATETIME,
                                  fecha_hora_fin DATETIME,
                                  uuid VARCHAR(36),
                                  FOREIGN KEY (residente_id) REFERENCES residentes(id),
                                  FOREIGN KEY (visitante_id) REFERENCES visitantes(id)
);


CREATE TABLE visitas (
                         id INT AUTO_INCREMENT PRIMARY KEY,
                         visitante_id INT NOT NULL,
                         permiso_id VARCHAR(36),
                         fecha_hora DATETIME NOT NULL,
                         FOREIGN KEY (visitante_id) REFERENCES visitantes(id),
                         FOREIGN KEY (permiso_id) REFERENCES permisos_accesos(id)
);



INSERT INTO Residentes (id, nombre, apellido, direccion, telefono, email, fecha_registro)
VALUES
    (1, 'Juan', 'Pérez', 'Calle 123, Ciudad', '555-123-456', 'juanperez@example.com', '2023-01-01'),
    (2, 'María', 'López', 'Calle 456, Ciudad', '555-789-123', 'marialopez@example.com', '2023-02-15'),
    (3, 'Carlos', 'García', 'Calle 789, Ciudad', '555-456-789', 'carlosgarcia@example.com', '2023-03-10');

INSERT INTO Visitantes (id, nombre, apellido, residente_id, fecha_visita, hora_ingreso, hora_salida)
VALUES
    (1, 'Ana', 'Martínez', 1, '2023-01-05', '09:00:00', '12:00:00'),
    (2, 'Pedro', 'Gómez', 2, '2023-02-10', '14:00:00', '17:00:00'),
    (3, 'Laura', 'Ramírez', 3, '2023-03-15', '10:30:00', '13:30:00');

INSERT INTO Carros (id, placa, marca, modelo)
VALUES
    (1, 'ABC123', 'Toyota', 'Corolla'),
    (2, 'DEF456', 'Honda', 'Civic'),
    (3, 'GHI789', 'Ford', 'Mustang');


INSERT INTO Residentes_Carros (residente_id, carro_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

INSERT INTO Visitantes_Carros (visitante_id, carro_id)
VALUES
    (1, 2),
    (2, 3),
    (3, 1);


INSERT INTO Permisos_Acceso (id, residente_id, visitante_id, fecha_inicio, fecha_caducidad)
VALUES
    (1, 1, 1, '2023-01-01 09:00:00', '2023-01-01 12:00:00'),
    (2, 2, 2, '2023-02-15 14:00:00', '2023-02-15 17:00:00'),
    (3, 3, 3, '2023-03-10 10:30:00', '2023-03-10 13:30:00');
