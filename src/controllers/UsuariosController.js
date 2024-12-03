const Usuario= require('../models/Usuarios')

const UsuariosController={}

UsuariosController.getAll=async(req,res)=>{
    try {
        const user=await Usuario.getAll()
        res.json(user)
    } catch (error) {
        console.log('Error getting Usuario',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
UsuariosController.getIdUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await Usuario.getIdUser(id)
        res.json(user)
    } catch (error) {
        console.log('Error getting Usuario',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
UsuariosController.createUser=async(req,res)=>{
    const data=req.body
    try {
        const user=await Usuario.createUser(data)
        res.json({
            message:'Usuario creado exitosamente'
        })
    } catch (error) {
        console.log('Error setting Usuario',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
UsuariosController.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        const user=await Usuario.dropUser(id)
        res.json({
            message:'Usuario eliminado exitosamente'
        })
    } catch (error) {
        console.log('Error setting Usuario',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }

}
UsuariosController.updateUser=async(req,res)=>{
    const data=req.body
    try {
        const user =await Usuario.updateUser(data)
        res.json({
            message:'Registro actualizado correctamente'
        })
    } catch (error) {
        console.log('Error setting Usuario',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
module.exports=UsuariosController