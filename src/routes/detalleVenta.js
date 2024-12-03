const express =require('express')
const detalleVentasController=require('../controllers/detalleVentasController')

const router=express.Router()

router.get('/listado',detalleVentasController.getAll)

module.exports=router