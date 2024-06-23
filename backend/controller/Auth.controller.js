import { query } from "../database/db.js";
import argon2 from "argon2";


// export const Login = async (req, res) => {
//     const { email, password } = req.body; // Deklarasikan dan inisialisasikan variabel email di sini

//     try {
//         // Gunakan variabel email di sini
//         const user = await query("SELECT * FROM tb_user WHERE email = ?", [email]);
//         if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

//         const match = await argon2.verify(user.password, password);
//         if (!match) return res.status(401).json({ msg: "Password salah" });

//         req.session.userId = user.id_user;
//         const { nama_user, email: userEmail, nik, alamat, authority, foto_profile } = user;
//         res.status(200).json({ nama_user, userEmail, nik, alamat, authority, foto_profile });
//     } catch (error) {
//         console.log("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// };

export const Login = async (req, res) => {
    // const email = req.body.email;
    try {
        // Lakukan query untuk mendapatkan user berdasarkan email
        const user = await query("SELECT id_user, nama_user, nik, alamat, authority, foto_profile, password FROM tb_user WHERE email = ?", [req.body.email]);
    
        // Mengecek jika user ditemukan
        if (user.length === 0) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }
    
        // Verifikasi password menggunakan argon2
        const match = await argon2.verify(user[0].password, req.body.password);
    
        // Mengecek apakah password sesuai
        if (!match) {
            return res.status(400).json({ msg: "Password salah" });
        }
    
        // Mengatur session userId
        req.session.userId = user[0].id_user;
    
        // Mengirim respons dengan data pengguna yang berhasil login
        const { id_user, nama_user, nik, alamat, authority, foto_profile } = user[0];
        res.status(200).json({ id_user, nama_user, nik, alamat, authority, foto_profile });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ msg: "Terjadi kesalahan dalam proses login" });
    }    

}
//     const { email, password } = req.body;

//     try {
//         const user = await query("SELECT id_user FROM tb_user WHERE email = ?", [email]);
//         if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

//         const match = await argon2.verify(user.password, password);
//         if (!match) return res.status(401).json({ msg: "Password salah" });

//         req.session.userId = user.id_user;
//         const {id_user, nama_user, email, nik, alamat, authority, foto_profile } = user;
//         res.status(200).json({id_user, nama_user, email, nik, alamat, authority, foto_profile });
//     } catch (error) {
//         console.log("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// };




export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "mohon login"});
    }
    const user = await query("SELECT nama_user, email, nik, alamat, authority, foto_profile FROM tb_user WHERE id_user = ?", [req.session.userId]);
    if(!user) return res.status(404).json({msg: "user tidak ditemukan"});
    res.status(200).json(user);
}

export const Logout = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak dapat logout"});
            res.status(200).json({msg: "anda logout"});
    })
}

// import { query } from "../database/db.js";
// import argon2 from "argon2";

// export const Login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Cari pengguna berdasarkan alamat email
//         const user = await query("SELECT * FROM tb_user WHERE email = ?", [email]);

//         if (!user || user.length === 0) {
//             return res.status(404).json({ msg: "User tidak ditemukan" });
//         }

//         // Verifikasi password
//         const match = await argon2.verify(user[0].password, password);
//         if (!match) return res.status(400).json({ msg: "Password salah" });

//         // Simpan informasi pengguna ke sesi
//         req.session.user = user[0];

//         // Kirim respons dengan informasi pengguna yang sudah diotorisasi
//         res.status(200).json(user[0]);
//     } catch (error) {
//         console.log("Terjadi kesalahan", error);
//         return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
//     }
// };
