
import './css/register.css';
import { Link } from "react-router-dom";

// import logoImage from './img/logo.png'; 

function Register() {
return (
    <div className='register-container'>
        <div className='register-left'>
            <div className="register-container1">
                <p className="register-text1">Register</p>
                <label htmlFor="username">Username</label><br />
                <input type="text" placeholder='Buat nama pengguna/ anda'/><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" placeholder='Masukkan email anda'/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" placeholder='Masukkan password anda'/><br />
                <p className="register-text2">Sudah memiliki akun? kembali ke <Link to="/login" class="text-blue-500">Login</Link></p>
                
                <button className="register-start" type='submit'>REGISTER</button>
            </div>
        </div>
        <div className='register-right'>
        <img src="img\icon.png"/>
        </div>
    </div>
);
}

export default Register;


