// const res = require('express/lib/response')
const db=require('../../db')

const Productos={}

Productos.getAll=async()=>{
    try {
        const [rows]=await db.query('SELECT * FROM productos')
        return rows
    } catch (error) {
        console.log(error)
    }
}
Productos.getIdProductos=async(id)=>{
    try {
        const [rows]=await db.query('SELECT * FROM productos where id=?',[id])
        return rows
    } catch (error) {
        console.log(error)
    }
}
Productos.createProductos=async(data)=> {
    const{nombre,descripcion,precio,stock}=data
    try {
        const query='INSERT INTO productos (nombre,descripcion,precio,stock)VALUES (?,?,?,?)'
        const [result]= await db.query(query,[nombre,descripcion,precio,stock])
        return result
    } catch (error) {
        console.log(error)
    }
}
Productos.dropProductos=async(id)=>{
    try {
        const [result]=await db.query('DELETE FROM productos WHERE id=?',[id])
        return result 
    } catch (error) {
        console.log(error)
    }
}
Productos.updateProductos=async(data)=>{
    console.log(data)
    const{nombre,descripcion,precio,stock,id}=data
    try {
        const query='UPDATE productos SET nombre=?,descripcion=?,precio=?,stock=? WHERE id=?'
        console.log(query)
        const[result] = await db.query(query,[nombre,descripcion,precio,stock,id])
        return result
    } catch (error) {
        console.log(error)
    }
}
module.exports=Productos
