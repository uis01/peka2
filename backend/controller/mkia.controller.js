import { query } from "../database/db.js"

export const getMkia = async(req, res)=>{
    try{
        const result = await query('Select * from tb_mkia')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// new
export const insertMkia = async(req,res)=>{
    const {id_mkia, title, category, image, content, date, sumber}= req.body
    try {
        await query("INSERT INTO tb_mkia (id_mkia, title, category, image, content, date, sumber) values (?, ?, ?, ?, ?, ?, ?)", [id_mkia, title, category, image, content, date, sumber])
        return res.status(200).json({msg:"Mkia Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateMkia = async(req,res)=>{
    const {title, category, image, content, date, sumber}= req.body
    const {id_mkia}=req.params
    try {
        await query("UPDATE tb_mkia SET id_user='23', nama='zinn', nik='1234567890987754', gender='laki-laki', birth_date='2024-06-05 12:34:56', birth_location='maluku', blood_type='O' WHERE id_mkia=2", [title, category, image, content, date, sumber, id_mkia])
        return res.status(200).json({msg:"Mkia Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteMkia = async(req,res)=>{
    const {id_mkia}=req.params
    try {
        await query("DELETE FROM tb_mkia where id_mkia=?", [id_mkia])
        return res.status(200).json({msg:"Mkia Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// end
export const getMkiaById = async(req,res)=>{
    const {id_mkia}=req.params
    try{
        const result = await query('Select * from tb_mkia where id_mkia=?', [id_mkia])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getMkiaTest = async(req,res)=>{
    const {id_mkia, title, category, image, content, date, sumber} = req.query
    console.log(id_mkia, title, category, image, content, date, sumber)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from tb_mkia where id_mkia=?', [id_mkia, title, category, image, content, date, sumber])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
