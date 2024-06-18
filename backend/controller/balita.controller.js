import { query } from "../database/db.js"

export const getBalita = async(req, res)=>{
    try{
        const result = await query('Select * from tb_balita')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// new
export const insertBalita = async(req,res)=>{
    const {id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type}= req.body
    try {
        await query("INSERT INTO tb_balita (id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type) values (?, ?, ?, ?, ?, ?, ?, ?)", [id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type])
        return res.status(200).json({msg:"Balita Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateBalita = async(req,res)=>{
    const {id_user, nama, nik, gender, birth_date, birth_location, blood_type}= req.body
    const {id_balita}=req.params
    try {
        await query("UPDATE tb_balita SET id_user='23', nama='zinn', nik='1234567890987754', gender='laki-laki', birth_date='2024-06-05 12:34:56', birth_location='maluku', blood_type='O' WHERE id_balita=2", [id_user, nama, nik, gender, birth_date, birth_location, blood_type, id_balita])
        return res.status(200).json({msg:"Balita Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteBalita = async(req,res)=>{
    const {id_balita}=req.params
    try {
        await query("DELETE FROM tb_balita where id_balita=?", [id_balita])
        return res.status(200).json({msg:"Balita Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// end
export const getBalitaById = async(req,res)=>{
    const {id_balita}=req.params
    try{
        const result = await query('Select * from tb_balita where id_balita=?', [id_balita])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getBalitaTest = async(req,res)=>{
    const {id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type} = req.query
    console.log(id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from tb_balita where id_balita=?', [id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
