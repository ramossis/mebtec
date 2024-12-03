const express =require('express')
const ClientesController=require('../controllers/ClientesController')

const router=express.Router()

router.get('/listado',ClientesController.getAll)
router.get('/mostrar/:id',ClientesController.getIdClientes)
router.post('/crear',ClientesController.createCliente)
router.delete('/eliminar/:id',ClientesController.deleteCliente)
router.put('/actualizar',ClientesController.updateCliente)

module.exports=router