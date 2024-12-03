const Producto= require('../models/Productos')

const ProductosController={}

ProductosController.getAll=async(req,res)=>{
    try {
        const product=await Producto.getAll()
        res.json(product)
    } catch (error) {
        console.log('Error getting Productos',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
ProductosController.getIdProducto=async(req,res)=>{
    const {id}=req.params
    try {
        const product=await Producto.getIdProductos(id)
        res.json(product)
    } catch (error) {
        console.log('Error getting Productos',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
ProductosController.createProducto=async(req,res)=>{
    const data=req.body
    try {
        const product=await Producto.createProductos(data)
        res.json({
            message:'Productos creado exitosamente'
        })
    } catch (error) {
        console.log('Error setting Productos',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
ProductosController.deleteProducto=async(req,res)=>{
    const {id}=req.params
    try {
        const product=await Producto.dropProductos(id)
        res.json({
            message:'Productos eliminado exitosamente'
        })
    } catch (error) {
        console.log('Error setting Productos',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }

}
ProductosController.updateProducto=async(req,res)=>{
    const data=req.body
    try {
        const product =await Producto.updateProductos(data)
        res.json({
            message:'Registro actualizado correctamente'
        })
    } catch (error) {
        console.log('Error setting Productos',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}
module.exports=ProductosController