import { query } from "../database/db.js"

export const getMpasi = async(req, res)=>{
    try{
        const result = await query('Select * from tb_mpasi')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// new
export const insertMpasi = async(req,res)=>{
    const {id_mpasi, title, category, image, content, date, sumber}= req.body
    try {
        await query("INSERT INTO tb_mpasi (id_mpasi, title, category, image, content, date, sumber) values (?, ?, ?, ?, ?, ?, ?)", [id_mpasi, title, category, image, content, date, sumber])
        return res.status(200).json({msg:"Mpasi Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateMpasi = async(req,res)=>{
    const {title, category, image, content, date, sumber}= req.body
    const {id_mpasi}=req.params
    try {
        await query("UPDATE tb_mpasi SET id_user='23', nama='zinn', nik='1234567890987754', gender='laki-laki', birth_date='2024-06-05 12:34:56', birth_location='maluku', blood_type='O' WHERE id_mpasi=2", [title, category, image, content, date, sumber, id_mpasi])
        return res.status(200).json({msg:"Mpasi Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteMpasi = async(req,res)=>{
    const {id_mpasi}=req.params
    try {
        await query("DELETE FROM tb_mpasi where id_mpasi=?", [id_mpasi])
        return res.status(200).json({msg:"Mpasi Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// end
export const getMpasiById = async(req,res)=>{
    const {id_mpasi}=req.params
    try{
        const result = await query('Select * from tb_mpasi where id_mpasi=?', [id_mpasi])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getMpasiTest = async(req,res)=>{
    const {id_mpasi, title, category, image, content, date, sumber} = req.query
    console.log(id_mpasi, title, category, image, content, date, sumber)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from tb_mpasi where id_mpasi=?', [id_mpasi, title, category, image, content, date, sumber])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
