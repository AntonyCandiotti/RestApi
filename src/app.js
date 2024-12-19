import express from 'express';
import useresRoutes from './routes/users.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()



// recibe los datos, los combierte en json y luego lo pasa a las rutas
app.use(express.json())

app.use(indexRoutes)
app.use('/api',useresRoutes) // agrega '/api' a las rutas incluso si ya tienen otras

//si no cuando recibe una ruta, no la encuentra en ninguna entonces ->
app.use((req,res,next) =>{
    res.status(404).json({
        message:'Endpoint not found'
    })
}) 


export default app;