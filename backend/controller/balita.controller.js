import { query } from "../database/db.js"

<<<<<<< HEAD
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
export const insertBalita = async (req, res) => {
    const { nama, nik, gender, birth_date, birth_location, blood_type } = req.body;
    try {
        await query(
            "INSERT INTO tb_balita (nama, nik, gender, birth_date, birth_location, blood_type) VALUES (?, ?, ?, ?, ?, ?)",
            [nama, nik, gender, birth_date, birth_location, blood_type]
        );
        return res.status(200).json({ msg: "Balita Ditambahkan" });
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
=======
export const getBalita = async (req, res) => {
    try {
        let response;
        if (req.user.authority === "admin") {
            response = await query('SELECT tb_balita.*, tb_user.id_user, tb_user.nama_user FROM tb_balita INNER JOIN tb_user ON tb_balita.id_user = tb_user.id_user');
        }else {
            response = await query('SELECT tb_balita.*, tb_user.id_user, tb_user.nama_user FROM tb_balita INNER JOIN tb_user ON tb_balita.id_user = tb_user.id_user WHERE tb_user.id_user = ?', [req.user.id_user]);
        }
        

        return res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error("Terjadi kesalahan", error);
>>>>>>> b5dd2b3cfca9809f902db63bfbcbb06005c2171e
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

<<<<<<< HEAD

export const updateBalita = async (req, res) => {
    const { id_user, nama, nik, gender, birth_date, birth_location, blood_type } = req.body;
    const { id_balita } = req.params;
    try {
        await query(
            "UPDATE tb_balita SET id_user=?, nama=?, nik=?, gender=?, birth_date=?, birth_location=?, blood_type=? WHERE id_balita=?", 
            [id_user, nama, nik, gender, birth_date, birth_location, blood_type, id_balita]
        );
        return res.status(200).json({ msg: "Balita Diubah" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
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
=======
>>>>>>> b5dd2b3cfca9809f902db63bfbcbb06005c2171e
export const getBalitaById = async(req,res)=>{
    const {id_balita}=req.params
    try {
        const balitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ?', [id_balita]);
        if (!balitaResult) return res.status(404).json({msg: "data tidak ditemukan"})

        let response;
        if (req.user.authority === "admin") {
            response = await query('SELECT tb_balita.*, tb_user.id_user, tb_user.nama_user FROM tb_balita INNER JOIN tb_user ON tb_balita.id_user = tb_user.id_user WHERE tb_balita.id_balita = ?', [id_balita]
            );
        } else {
            response = await query(
                'SELECT * FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]
            );
        }

        return res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
    // try{
    //     const result = await query('Select * from tb_balita where id_balita=?', [id_balita])
    //     return res.status(200).json({success:true, data:result})
    // }catch(e){
    //     console.log("Terjadi kesalahan", e)
    //     return res.status(500).json({msg:"terjadi kesalahan pada server"})
    // }
}
// new



export const insertBalita = async (req, res) => {
    const { id_balita, nama, nik, gender, birth_date, birth_location, blood_type } = req.body;
    try {
        await query("INSERT INTO tb_balita (id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [id_balita, req.user.id_user, nama, nik, gender, birth_date, birth_location, blood_type]);
        return res.status(200).json({ msg: "Balita Ditambahkan" });
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

// export const insertBalita = async (req, res) => {
//     const { nama, nik, gender, birth_date, birth_location, blood_type } = req.body;
//     try {
//         await query(
//             "INSERT INTO tb_balita (nama, nik, gender, birth_date, birth_location, blood_type) VALUES (?, ?, ?, ?, ?, ?)",
//             [nama, nik, gender, birth_date, birth_location, blood_type]
//         );
//         return res.status(201).json({ msg: "Balita Ditambahkan" });
//     } catch (error) {
//         console.error("Terjadi kesalahan:", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// }


// export const insertBalita = async(req,res)=>{
//     const {id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type}= req.body
//     try {
//         await query("INSERT INTO tb_balita (id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type) values (?, ?, ?, ?, ?, ?, ?, ? )", [id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type]);
//         return res.status(200).json({msg:"Balita Ditambahkan"})
//     } catch (error) {
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// }

export const updateBalita = async (req, res) => {
    const { id_balita } = req.params;

    try {
        // Cek apakah data balita ada
        const balitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ?', [id_balita]);
        if (balitaResult.length === 0) return res.status(404).json({ msg: "Data tidak ditemukan" });

        const { nama, nik, gender, birth_date, birth_location, blood_type } = req.body;

        if (req.user.authority === "admin") {
            // Update data jika pengguna adalah admin
            await query(
                'UPDATE tb_balita SET nama = ?, nik = ?, gender = ?, birth_date = ?, birth_location = ?, blood_type = ? WHERE id_balita = ?',
                [nama, nik, gender, birth_date, birth_location, blood_type, id_balita]
            );
        } else {
            // Cek apakah pengguna memiliki akses ke data balita
            const userBalitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]);
            if (userBalitaResult.length === 0) return res.status(403).json({ msg: "Akses dilarang" });

            // Update data jika pengguna memiliki akses
            await query(
                'UPDATE tb_balita SET nama = ?, nik = ?, gender = ?, birth_date = ?, birth_location = ?, blood_type = ? WHERE id_balita = ? AND id_user = ?',
                [nama, nik, gender, birth_date, birth_location, blood_type, id_balita, req.user.id_user]
            );
        }

        return res.status(200).json({ msg: "Data terupdate" });
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};


    // const {id_user, nama, nik, gender, birth_date, birth_location, blood_type}= req.body
    // const {id_balita}=req.params
    // try {
    //     await query("UPDATE tb_balita SET id_user='23', nama='zinn', nik='1234567890987754', gender='laki-laki', birth_date='2024-06-05 12:34:56', birth_location='maluku', blood_type='O' WHERE id_balita=2", [id_user, nama, nik, gender, birth_date, birth_location, blood_type, id_balita])
    //     return res.status(200).json({msg:"Balita Diubah"})
    // } catch (error) {
    //     console.log("Terjadi kesalahan", e)
    //     return res.status(500).json({msg:"terjadi kesalahan pada server"})
    // }

export const deleteBalita = async (req, res) => {
    const { id_balita } = req.params;

    try {
        // Cek apakah data balita ada
        const balitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ?', [id_balita]);
        if (balitaResult.length === 0) return res.status(404).json({ msg: "Data tidak ditemukan" });

        if (req.user.authority === "admin") {
            // Hapus data jika pengguna adalah admin
            await query('DELETE FROM tb_balita WHERE id_balita = ?', [id_balita]);
        } else {
            // Cek apakah pengguna memiliki akses ke data balita
            const userBalitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]);
            if (userBalitaResult.length === 0) return res.status(403).json({ msg: "Akses dilarang" });

            // Hapus data jika pengguna memiliki akses
            await query('DELETE FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]);
        }

        return res.status(200).json({ msg: "Data terhapus" });
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};


// export const deleteBalita = async(req,res)=>{
//     const {id_balita}=req.params
//     try {
//         await query("DELETE FROM tb_balita where id_balita=?", [id_balita])
//         return res.status(200).json({msg:"Balita Dihapus"})
//     } catch (error) {
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// }
// end


export const getBalitaTest = async(req,res)=>{
    const {id_balita, nama, nik, gender, birth_date, birth_location, blood_type} = req.query
    console.log(id_balita, nama, nik, gender, birth_date, birth_location, blood_type)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from tb_balita where id_balita=?', [id_balita, nama, nik, gender, birth_date, birth_location, blood_type])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}


// import { query } from "../database/db.js"

// export const getBalita = async (req, res) => {
//     try {
//         let response;
//         if (req.user.authority === "admin") {
//             response = await query('SELECT tb_balita.*, tb_user.id_user, tb_user.nama_user FROM tb_balita INNER JOIN tb_user ON tb_balita.id_user = tb_user.id_user');
//         }else {
//             response = await query('SELECT tb_balita.*, tb_user.id_user, tb_user.nama_user FROM tb_balita INNER JOIN tb_user ON tb_balita.id_user = tb_user.id_user WHERE tb_user.id_user = ?', [req.user.id_user]);
//         }
        

//         return res.status(200).json({ success: true, data: response });
//     } catch (error) {
//         console.error("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// }

// export const getBalitaById = async(req,res)=>{
//     const {id_balita}=req.params
//     try {
//         const balitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ?', [id_balita]);
//         if (!balitaResult) return res.status(404).json({msg: "data tidak ditemukan"})

//         let response;
//         if (req.user.authority === "admin") {
//             response = await query('SELECT tb_balita.*, tb_user.id_user, tb_user.nama_user FROM tb_balita INNER JOIN tb_user ON tb_balita.id_user = tb_user.id_user WHERE tb_balita.id_balita = ?', [id_balita]
//             );
//         } else {
//             response = await query(
//                 'SELECT * FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]
//             );
//         }

//         return res.status(200).json({ success: true, data: response });
//     } catch (error) {
//         console.error("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
//     // try{
//     //     const result = await query('Select * from tb_balita where id_balita=?', [id_balita])
//     //     return res.status(200).json({success:true, data:result})
//     // }catch(e){
//     //     console.log("Terjadi kesalahan", e)
//     //     return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     // }
// }
// // new



// export const insertBalita = async (req, res) => {
//     const { id_balita, nama, nik, gender, birth_date, birth_location, blood_type } = req.body;
//     try {
//         await query("INSERT INTO tb_balita (id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [id_balita, req.user.id_user, nama, nik, gender, birth_date, birth_location, blood_type]);
//         return res.status(200).json({ msg: "Balita Ditambahkan" });
//     } catch (error) {
//         console.error("Terjadi kesalahan:", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// }

// // export const insertBalita = async (req, res) => {
// //     const { nama, nik, gender, birth_date, birth_location, blood_type } = req.body;
// //     try {
// //         await query(
// //             "INSERT INTO tb_balita (nama, nik, gender, birth_date, birth_location, blood_type) VALUES (?, ?, ?, ?, ?, ?)",
// //             [nama, nik, gender, birth_date, birth_location, blood_type]
// //         );
// //         return res.status(201).json({ msg: "Balita Ditambahkan" });
// //     } catch (error) {
// //         console.error("Terjadi kesalahan:", error);
// //         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
// //     }
// // }


// // export const insertBalita = async(req,res)=>{
// //     const {id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type}= req.body
// //     try {
// //         await query("INSERT INTO tb_balita (id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type) values (?, ?, ?, ?, ?, ?, ?, ? )", [id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type]);
// //         return res.status(200).json({msg:"Balita Ditambahkan"})
// //     } catch (error) {
// //         console.log("Terjadi kesalahan", e)
// //         return res.status(500).json({msg:"terjadi kesalahan pada server"})
// //     }
// // }

// export const updateBalita = async (req, res) => {
//     const { id_balita } = req.params;

//     try {
//         // Cek apakah data balita ada
//         const balitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ?', [id_balita]);
//         if (balitaResult.length === 0) return res.status(404).json({ msg: "Data tidak ditemukan" });

//         const { nama, nik, gender, birth_date, birth_location, blood_type } = req.body;

//         if (req.user.authority === "admin") {
//             // Update data jika pengguna adalah admin
//             await query(
//                 'UPDATE tb_balita SET nama = ?, nik = ?, gender = ?, birth_date = ?, birth_location = ?, blood_type = ? WHERE id_balita = ?',
//                 [nama, nik, gender, birth_date, birth_location, blood_type, id_balita]
//             );
//         } else {
//             // Cek apakah pengguna memiliki akses ke data balita
//             const userBalitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]);
//             if (userBalitaResult.length === 0) return res.status(403).json({ msg: "Akses dilarang" });

//             // Update data jika pengguna memiliki akses
//             await query(
//                 'UPDATE tb_balita SET nama = ?, nik = ?, gender = ?, birth_date = ?, birth_location = ?, blood_type = ? WHERE id_balita = ? AND id_user = ?',
//                 [nama, nik, gender, birth_date, birth_location, blood_type, id_balita, req.user.id_user]
//             );
//         }

//         return res.status(200).json({ msg: "Data terupdate" });
//     } catch (error) {
//         console.error("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// };


//     // const {id_user, nama, nik, gender, birth_date, birth_location, blood_type}= req.body
//     // const {id_balita}=req.params
//     // try {
//     //     await query("UPDATE tb_balita SET id_user='23', nama='zinn', nik='1234567890987754', gender='laki-laki', birth_date='2024-06-05 12:34:56', birth_location='maluku', blood_type='O' WHERE id_balita=2", [id_user, nama, nik, gender, birth_date, birth_location, blood_type, id_balita])
//     //     return res.status(200).json({msg:"Balita Diubah"})
//     // } catch (error) {
//     //     console.log("Terjadi kesalahan", e)
//     //     return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     // }

// export const deleteBalita = async (req, res) => {
//     const { id_balita } = req.params;

//     try {
//         // Cek apakah data balita ada
//         const balitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ?', [id_balita]);
//         if (balitaResult.length === 0) return res.status(404).json({ msg: "Data tidak ditemukan" });

//         if (req.user.authority === "admin") {
//             // Hapus data jika pengguna adalah admin
//             await query('DELETE FROM tb_balita WHERE id_balita = ?', [id_balita]);
//         } else {
//             // Cek apakah pengguna memiliki akses ke data balita
//             const userBalitaResult = await query('SELECT * FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]);
//             if (userBalitaResult.length === 0) return res.status(403).json({ msg: "Akses dilarang" });

//             // Hapus data jika pengguna memiliki akses
//             await query('DELETE FROM tb_balita WHERE id_balita = ? AND id_user = ?', [id_balita, req.user.id_user]);
//         }

//         return res.status(200).json({ msg: "Data terhapus" });
//     } catch (error) {
//         console.error("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// };


// // export const deleteBalita = async(req,res)=>{
// //     const {id_balita}=req.params
// //     try {
// //         await query("DELETE FROM tb_balita where id_balita=?", [id_balita])
// //         return res.status(200).json({msg:"Balita Dihapus"})
// //     } catch (error) {
// //         console.log("Terjadi kesalahan", e)
// //         return res.status(500).json({msg:"terjadi kesalahan pada server"})
// //     }
// // }
// // end


// export const getBalitaTest = async(req,res)=>{
//     const {id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type} = req.query
//     console.log(id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type)
//     console.log("TERPANGGIL")
//     try{
//         const result = await query('Select * from tb_balita where id_balita=?', [id_balita, id_user, nama, nik, gender, birth_date, birth_location, blood_type])
//         return res.status(200).json({success:true, data:result})
//     }catch(e){
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// }
