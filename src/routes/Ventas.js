const express =require('express')
const VentasController=require('../controllers/VentasController')

const router=express.Router()

router.get('/listado',VentasController.getAll)

module.exports=router