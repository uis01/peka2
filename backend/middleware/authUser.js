import { query } from "../database/db.js";

export const verifyUser = async (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Mohon login" });
    }

    try {
        const user = await query("SELECT id_user, nama_user, email, nik, alamat, authority, foto_profile FROM tb_user WHERE id_user = ?", [req.session.userId]);

        if (!user || user.length === 0) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }

        req.user = user[0]; // Menyimpan data pengguna dalam req.user
        next();
    } catch (error) {
        console.error("Error dalam middleware verifyUser:", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

export const adminOnly = async (req, res, next) => {
    try {
        if (req.user.authority !== "admin") {
            return res.status(403).json({ msg: "Akses terlarang" });
        }

        next();
    } catch (error) {
        console.error("Error dalam middleware adminOnly:", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
}

// export const adminOnly = async (req, res, next) =>{
//     const user = await query("SELECT id_user, nama_user, email, nik, alamat, authority, foto_profile FROM tb_user WHERE id_user = ?", [req.session.userId]);
//     if(!user) return res.status(404).json({msg: "user tidak ditemukan"});
//     if(user.authority !=="admin") return res.status(403).json({msg: "akses terlarang"});
//     next();
// }