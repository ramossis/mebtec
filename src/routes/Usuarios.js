const express =require('express')
const UsuariosController=require('../controllers/UsuariosController')

const router=express.Router()

router.get('/listado',UsuariosController.getAll)
router.get('/mostrar/:id',UsuariosController.getIdUser)
router.post('/crear',UsuariosController.createUser)
router.delete('/eliminar/:id',UsuariosController.deleteUser)
router.put('/actualizar',UsuariosController.updateUser)

module.exports=router