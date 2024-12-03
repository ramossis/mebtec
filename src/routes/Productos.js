const express =require('express')
const ProductosController=require('../controllers/ProductosController')

const router=express.Router()

router.get('/listado',ProductosController.getAll)
router.get('/mostrar/:id',ProductosController.getIdProducto)
router.post('/crear',ProductosController.createProducto)
router.delete('/eliminar/:id',ProductosController.deleteProducto)
router.put('/actualizar',ProductosController.updateProducto)

module.exports=router