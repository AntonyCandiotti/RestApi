import {createPool} from 'mysql2/promise';
import {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT} from './config.js';

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER, // Cambia esto a tu usuario de MySQL
    password: DB_PASSWORD, // Cambia esto a tu contraseña de MySQL
    database: DB_DATABASE, // Asegúrate de haber creado esta base
    port: DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, // Máximo número de conexiones simultáneas
    queueLimit: 0
})