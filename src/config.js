//leer variables de entorno de .env, las variables de entorno siempre son strings
//en cuanto a los valores que estan en .env la nube me lo da cuando despliego un proyecto
import {config} from 'dotenv';

config()

export const PORT = process.env.PORT || 3000

export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'express_practice'
export const DB_PORT = process.env.DB_PORT || 3306

