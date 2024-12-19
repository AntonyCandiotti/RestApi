import { Router } from "express";
import {reiniciarContador, getUser,getUsers,createUsers,updateUsers,deleteUsers } from "../controllers/users.controller.js";

const router = Router()

router.get('/users',getUsers)

router.get('/users/:id',getUser)
router.post('/users',createUsers)
router.patch('/users/:id',updateUsers)  // el patch es como el put, solo que puede actualizar parcialmente la tabla
router.delete('/users/:id',deleteUsers)
router.get('/reiniciar', reiniciarContador)

export default router