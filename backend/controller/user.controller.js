<<<<<<< HEAD
import { query } from "../database/db.js";
import argon2 from "argon2";



export const getUser = async (req, res) => {
  try {
    const result = await query("SELECT * FROM tb_user");
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// new

export const insertUser = async (req, res) => {
  const { nama_user, email, password, confPassword, nik, alamat, authority, foto_profile } = req.body;
  if (password !== confPassword) return res.status(400).json ({msg: "Password Tidak Cocok"})
  try {
    const hashPassword = await argon2.hash(password);
    await query(
      "INSERT INTO tb_user (nama_user, email, password, nik, alamat, authority, foto_profile) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nama_user, email, hashPassword, nik, alamat, authority, foto_profile]
    );
    return res.status(201).json({ msg: "User Ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
}

export const updateUser = async (req, res) => {
  const { id_user } = req.params;

  if (!id_user) return res.status(404).json({ msg: "User tidak ditemukan" });

  const { nama_user, email, password, confPassword, nik, alamat, authority, foto_profile } = req.body;

  if (password && password !== confPassword) {
    return res.status(400).json({ msg: "Password Tidak Cocok" });
  }

  try {
    let hashPassword;
    if (password) {
      hashPassword = await argon2.hash(password);
    }

    const updateFields = [];
    const updateValues = [];

    if (nama_user) {
      updateFields.push('nama_user = ?');
      updateValues.push(nama_user);
    }
    if (email) {
      updateFields.push('email = ?');
      updateValues.push(email);
    }
    if (password) {
      updateFields.push('password = ?');
      updateValues.push(hashPassword);
    }
    if (nik) {
      updateFields.push('nik = ?');
      updateValues.push(nik);
    }
    if (alamat) {
      updateFields.push('alamat = ?');
      updateValues.push(alamat);
    }
    if (authority) {
      updateFields.push('authority = ?');
      updateValues.push(authority);
    }
    if (foto_profile) {
      updateFields.push('foto_profile = ?');
      updateValues.push(foto_profile);
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ msg: "Tidak ada data yang diperbarui" });
    }

    updateValues.push(id_user);

    const updateQuery = `UPDATE tb_user SET ${updateFields.join(', ')} WHERE id_user = ?`;

    await query(updateQuery, updateValues);

    return res.status(200).json({ msg: "User Diubah" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};


export const deleteUser = async (req, res) => {
  const { id_user } = req.params;
  try {
    await query("DELETE FROM tb_user where id_user=?", [id_user]);
    return res.status(200).json({ msg: "User Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
// end
export const getUserById = async (req, res) => {
  const { id_user } = req.params;
  try {
    const result = await query("Select * from tb_user where id_user=?", [
      id_user,
    ]);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getUserTest = async (req, res) => {
  const {
    id_user,
    nama_user,
    email,
    password,
    nik,
    alamat,
    authority,
    foto_profile,
  } = req.query;
  console.log(
    id_user,
    nama_user,
    email,
    password,
    nik,
    alamat,
    authority,
    foto_profile
  );
  console.log("TERPANGGIL");
  try {
    const result = await query("Select * from tb_user where id_user=?", [
      id_user,
      nama_user,
      email,
      password,
      nik,
      alamat,
      authority,
      foto_profile,
    ]);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
=======
import { query } from "../database/db.js";
import argon2 from "argon2";



export const getUser = async (req, res) => {
  try {
    const result = await query("SELECT * FROM tb_user");
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// new

export const insertUser = async (req, res) => {
  const { nama_user, email, password, confPassword, nik, alamat, authority, foto_profile } = req.body;
  if (password !== confPassword) return res.status(400).json ({msg: "Password Tidak Cocok"})
  try {
    const hashPassword = await argon2.hash(password);
    await query(
      "INSERT INTO tb_user (nama_user, email, password, nik, alamat, authority, foto_profile) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nama_user, email, hashPassword, nik, alamat, authority, foto_profile]
    );
    return res.status(201).json({ msg: "User Ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
}

export const updateUser = async (req, res) => {
  const { id_user } = req.params;

  if (!id_user) return res.status(404).json({ msg: "User tidak ditemukan" });

  const { nama_user, email, password, confPassword, nik, alamat, authority, foto_profile } = req.body;

  if (password && password !== confPassword) {
    return res.status(400).json({ msg: "Password Tidak Cocok" });
  }

  try {
    let hashPassword;
    if (password) {
      hashPassword = await argon2.hash(password);
    }

    const updateFields = [];
    const updateValues = [];

    if (nama_user) {
      updateFields.push('nama_user = ?');
      updateValues.push(nama_user);
    }
    if (email) {
      updateFields.push('email = ?');
      updateValues.push(email);
    }
    if (password) {
      updateFields.push('password = ?');
      updateValues.push(hashPassword);
    }
    if (nik) {
      updateFields.push('nik = ?');
      updateValues.push(nik);
    }
    if (alamat) {
      updateFields.push('alamat = ?');
      updateValues.push(alamat);
    }
    if (authority) {
      updateFields.push('authority = ?');
      updateValues.push(authority);
    }
    if (foto_profile) {
      updateFields.push('foto_profile = ?');
      updateValues.push(foto_profile);
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ msg: "Tidak ada data yang diperbarui" });
    }

    updateValues.push(id_user);

    const updateQuery = `UPDATE tb_user SET ${updateFields.join(', ')} WHERE id_user = ?`;

    await query(updateQuery, updateValues);

    return res.status(200).json({ msg: "User Diubah" });
  } catch (error) {
    console.log("Terjadi kesalahan", error);
    return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};


export const deleteUser = async (req, res) => {
  const { id_user } = req.params;
  try {
    await query("DELETE FROM tb_user where id_user=?", [id_user]);
    return res.status(200).json({ msg: "User Dihapus" });
  } catch (error) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
// end
export const getUserById = async (req, res) => {
  const { id_user } = req.params;
  try {
    const result = await query("Select * from tb_user where id_user=?", [
      id_user,
    ]);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};

export const getUserTest = async (req, res) => {
  const {
    id_user,
    nama_user,
    email,
    password,
    nik,
    alamat,
    authority,
    foto_profile,
  } = req.query;
  console.log(
    id_user,
    nama_user,
    email,
    password,
    nik,
    alamat,
    authority,
    foto_profile
  );
  console.log("TERPANGGIL");
  try {
    const result = await query("Select * from tb_user where id_user=?", [
      id_user,
      nama_user,
      email,
      password,
      nik,
      alamat,
      authority,
      foto_profile,
    ]);
    return res.status(200).json({ success: true, data: result });
  } catch (e) {
    console.log("Terjadi kesalahan", e);
    return res.status(500).json({ msg: "terjadi kesalahan pada server" });
  }
};
>>>>>>> b5dd2b3cfca9809f902db63bfbcbb06005c2171e
