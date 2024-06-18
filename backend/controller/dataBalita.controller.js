import { query } from "../database/db.js"

export const getDataBalita = async(req, res)=>{
    try{
        const result = await query('Select * from tb_data_balita')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// new
export const insertDataBalita = async(req,res)=>{
    const {id_balita, check_date, height, weight, age}= req.body
    try {
        await query("INSERT INTO tb_data_balita (id_balita, check_date, height, weight, age) values (?, ?, ?, ?, ?, ?, ?, ?)", [id_balita, check_date, height, weight, age])
        return res.status(200).json({msg:"DataBalita Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateDataBalita = async(req,res)=>{
    const {check_date, height, weight, age}= req.body
    const {id_balita}=req.params
    try {
        await query("UPDATE tb_data_balita SET check_date='', height='', weight='', gender='laki-laki', age='' WHERE id_balita=2", [check_date, height, weight, age, id_balita])
        return res.status(200).json({msg:"Data Balita Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteDataBalita = async(req,res)=>{
    const {id_balita}=req.params
    try {
        await query("DELETE FROM tb_data_balita where id_balita=?", [id_balita])
        return res.status(200).json({msg:"Data Balita Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// end
export const getDataBalitaById = async(req,res)=>{
    const {id_balita}=req.params
    try{
        const result = await query('Select * from tb_data_balita where id_balita=?', [id_balita])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getDataBalitaTest = async(req,res)=>{
    const {id_balita, check_date, height, weight, age} = req.query
    console.log(id_balita, check_date, height, weight, age)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from tb_data_balita where id_balita=?', [id_balita, check_date, height, weight, age])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

