import { query } from "../database/db.js"

export const getUser = async(req, res)=>{
    try{
        const result = await query('Select * from tb_user')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// new
export const insertUser = async(req,res)=>{
    const {id_user, nama, email, password, nik, alamat, authority, foto_profile}= req.body
    try {
        await query("INSERT INTO tb_user (id_user, nama, email, password, nik, alamat, authority, foto_profile) values (?, ?, ?, ?, ?, ?, ?, ?)", [id_user, nama, email, password, nik, alamat, authority, foto_profile])
        return res.status(200).json({msg:"User Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateUser = async(req,res)=>{
    const {nama, email, password, nik, alamat, authority, foto_profile}= req.body
    const {id_user}=req.params
    try {
        await query("UPDATE tb_user SET nama='zinn', nik='1234567890987754', gender='laki-laki', birth_date='2024-06-05 12:34:56', birth_location='maluku', blood_type='O' WHERE id_user=2", [nama, email, password, nik, alamat, authority, foto_profile, id_user])
        return res.status(200).json({msg:"User Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteUser = async(req,res)=>{
    const {id_user}=req.params
    try {
        await query("DELETE FROM tb_user where id_user=?", [id_user])
        return res.status(200).json({msg:"User Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// end
export const getUserById = async(req,res)=>{
    const {id_user}=req.params
    try{
        const result = await query('Select * from tb_user where id_user=?', [id_user])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getUserTest = async(req,res)=>{
    const {id_user, nama, email, password, nik, alamat, authority, foto_profile} = req.query
    console.log(id_user, nama, email, password, nik, alamat, authority, foto_profile)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from tb_user where id_user=?', [id_user, nama, email, password, nik, alamat, authority, foto_profile])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
