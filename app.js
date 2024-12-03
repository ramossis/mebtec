const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true})); app.use(express.json());
app.listen(process.env.PORT,()=>{
    console.log('SERVER ON READY PORT ON',process.env.PORT);    
})

app.use('/usuarios',require('./src/routes/Usuarios'))
app.use('/clientes',require('./src/routes/Clientes'))
app.use('/productos',require('./src/routes/Productos'))
app.use('/ventas',require('./src/routes/Ventas'))
app.use('/detalle-ventas',require('./src/routes/detalleVenta'))