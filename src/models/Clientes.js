// const res = require('express/lib/response')
const db=require('../../db')

const Clientes={}

Clientes.getAll=async()=>{
    try {
        const [rows]=await db.query('SELECT * FROM clientes')
        return rows
    } catch (error) {
        console.log(error)
    }
}
Clientes.getIdCliente=async(id)=>{
    try {
        const [rows]=await db.query('SELECT * FROM clientes where id_cliente=?',[id])
        return rows
    } catch (error) {
        console.log(error)
    }
}
Clientes.createCliente=async(data)=> {
    const{nombre,celular,correo,direccion}=data
    try {
        const query='INSERT INTO clientes (nombre,celular,correo,direccion)VALUES (?,?,?,?)'
        const [result]= await db.query(query,[nombre,celular,correo,direccion])
        return result
    } catch (error) {
        console.log(error)
    }
}
Clientes.dropCliente=async(id)=>{
    try {
        const [result]=await db.query('DELETE FROM clientes WHERE id_cliente=?',[id])
        return result 
    } catch (error) {
        console.log(error)
    }
}
Clientes.updateCliente=async(data)=>{
    const{nombre,celular,correo,direccion,id_cliente}=data
    try {
        const query='UPDATE clientes SET nombre=?,celular=?,correo=?,direccion=?WHERE id_cliente=?'
        console.log(query)
        const[result] = await db.query(query,[nombre,celular,correo,direccion,id_cliente])
        return result
    } catch (error) {
        console.log(error)
    }
}
module.exports=Clientes
