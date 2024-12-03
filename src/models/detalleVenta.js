const db=require('../../db')

const detalleVenta={}

detalleVenta.getAll=async()=>{
    try {
        const [rows]=await db.query('SELECT * FROM detalle_ventas')
        return rows
    } catch (error) {
        console.log(error)
    }
}

module.exports=detalleVenta

