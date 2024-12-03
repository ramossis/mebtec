const Ventas= require('../models/Ventas')

const VentasController={}

VentasController.getAll=async(req,res)=>{
    try {
        const sale=await Ventas.getAll()
        res.json(sale)
    } catch (error) {
        console.log('Error getting Sale',error);
        res.status(505).json({
            error:'Internal Server Error'
        })
    }
}

module.exports=VentasController