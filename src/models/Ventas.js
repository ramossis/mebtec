const db=require('../../db')

const Ventas={}

Ventas.getAll=async()=>{
    try {
        const [rows]=await db.query('SELECT * FROM ventas')
        return rows
    } catch (error) {
        console.log(error)
    }
}

module.exports=Ventas

