
import './css/login.css';

import { Link } from "react-router-dom";
// import logoImage from './img/logo.png'; 

function Login() {
return (
    <div className='login-container'>
        <div className='login-left'>
            <div className="login-container1">
                <p className="login-text1">Login</p>
                <label htmlFor="username">Username or Email</label><br />
                <input type="text" placeholder='Masukkan nama pengguna atau email anda'/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" placeholder='Masukkan password anda'/><br />
                <p className="login-text2">Belum memiliki akun?<Link to="/register" class="text-blue-500">Tekan disini</Link></p>
                <Link to="/halamanPengguna"><button className="login-start" type='submit'>LOGIN</button></Link>
            </div>
        </div>
        <div className='login-right'>
        <img src="img\icon.png"/>
        </div>
    </div>
);
}

export default Login;


