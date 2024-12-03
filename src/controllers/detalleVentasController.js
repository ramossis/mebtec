const detalleVenta= require('../models/detalleVenta')

const detalleVentaController={}

detalleVentaController.getAll=async(req,res)=>{
    try {
        const sale=await detalleVenta.getAll()
        res.json(sale)
    } catch (error) {
        console.log('Error getting Sale',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}

module.exports=detalleVentaController