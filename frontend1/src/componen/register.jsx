import React, { useState } from 'react';
import './css/register.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [nama_user, setNamaUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [nik, setNik] = useState("");
    const [alamat, setAlamat] = useState("");
    const [authority, setAuthority] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/user", {
                nama_use : nama_user,
                email : email,
                password : password,
                confPassword : confPassword,
                nik : nik,
                alamat : alamat,
                authority : authority
            });
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div className='register-container'>
            <div className='register-left'>
                <form onSubmit={saveUser} className="register-container1">
                    <p className="register-text1">Register</p>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" placeholder='Buat nama pengguna/ anda' value={nama_user} onChange={(e) => setNamaUser(e.target.value)} /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder='Masukkan email anda' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder='Masukkan password anda' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <label htmlFor="confPassword">Konfirmasi Password</label><br />
                    <input type="password" placeholder='Masukkan konfirmasi password anda' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} /><br />
                    <label htmlFor="nik">NIK</label><br />
                    <input type="text" placeholder='NIK anda' value={nik} onChange={(e) => setNik(e.target.value)} /><br />
                    <label htmlFor="alamat">Alamat</label><br />
                    <input type="text" placeholder='Alamat anda' value={alamat} onChange={(e) => setAlamat(e.target.value)} /><br />
                    <label htmlFor="authority">Authority</label><br />
                    <input type="text" placeholder='Authority' value={authority} onChange={(e) => setAuthority(e.target.value)} /><br />

                    <p className="register-text2">Sudah memiliki akun? kembali ke <Link to="/login" className="text-blue-500">Login</Link></p>

                    <button className="register-start" type='submit'>REGISTER</button>
                </form>
            </div>
            <div className='register-right'>
                <img src="img\icon.png" alt="Icon" />
            </div>
        </div>
    );
}

export default Register;
