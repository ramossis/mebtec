// const res = require('express/lib/response')
const db=require('../../db')

const Usuarios={}

Usuarios.getAll=async()=>{
    try {
        const [rows]=await db.query('SELECT * FROM usuarios')
        return rows
    } catch (error) {
        console.log(error)
    }
}
Usuarios.getIdUser=async(id)=>{
    try {
        const [rows]=await db.query('SELECT * FROM usuarios where id_usuario=?',[id])
        return rows
    } catch (error) {
        console.log(error)
    }
}
Usuarios.createUser=async(data)=> {
    const{name,email,password,rol}=data
    try {
        const query='INSERT INTO usuarios (name,email,password,rol)VALUES (?,?,?,?)'
        const [result]= await db.query(query,[name,email,password,rol])
        return result
    } catch (error) {
        console.log(error)
    }
}
Usuarios.dropUser=async(id)=>{
    try {
        const [result]=await db.query('DELETE FROM usuarios WHERE id_usuario=?',[id])
        return result 
    } catch (error) {
        console.log(error)
    }
}
Usuarios.updateUser=async(data)=>{
    const{name,email,password,rol,id_usuario}=data
    try {
        const query='UPDATE usuarios SET name=?,email=?,password=?,rol=? WHERE id_usuario=?'
        console.log(query)
        const[result] = await db.query(query,[name,email,password,rol,id_usuario])
        return result
    } catch (error) {
        console.log(error)
    }
}
module.exports=Usuarios
