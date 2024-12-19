-- Crear la base de datos
CREATE DATABASE express_practice;

-- Usar la base de datos
USE express_practice;

-- Crear la tabla de usuarios -- Crear la tabla de tareas -- Insertar usuarios de prueba -- Insertar tareas de prueba
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO tasks (user_id, title, description, status) VALUES
(1, 'Buy groceries', 'Buy milk, eggs, and bread', 'pending'),
(2, 'Finish project', 'Complete the Express.js project', 'completed'),
(1, 'Call mom', 'Call to check in', 'pending');
