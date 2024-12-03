const Cliente= require('../models/Clientes')

const ClientesController={}

ClientesController.getAll=async(req,res)=>{
    try {
        const client=await Cliente.getAll()
        res.json(client)
    } catch (error) {
        console.log('Error getting Cliente',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
ClientesController.getIdClientes=async(req,res)=>{
    const {id}=req.params
    try {
        const client=await Cliente.getIdCliente(id)
        res.json(client)
    } catch (error) {
        console.log('Error getting Cliente',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
ClientesController.createCliente=async(req,res)=>{
    const data=req.body
    try {
        const client=await Cliente.createCliente(data)
        res.json({
            message:'Cliente creado exitosamente'
        })
    } catch (error) {
        console.log('Error setting Cliente',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
ClientesController.deleteCliente=async(req,res)=>{
    const {id}=req.params
    try {
        const client=await Cliente.dropCliente(id)
        res.json({
            message:'Cliente eliminado exitosamente'
        })
    } catch (error) {
        console.log('Error setting Cliente',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }

}
ClientesController.updateCliente=async(req,res)=>{
    const data=req.body
    try {
        const client =await Cliente.updateCliente(data)
        res.json({
            message:'Registro actualizado correctamente'
        })
    } catch (error) {
        console.log('Error setting Cliente',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
module.exports=ClientesController