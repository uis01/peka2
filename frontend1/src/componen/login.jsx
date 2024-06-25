import './css/login.css';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {LoginUser, reset} from "../features/authSlice";
import Swal from 'sweetalert2';

// import logoImage from './img/logo.png'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message}= useSelector((state)=> state.auth);
    useEffect(()=>{
        if(user || isSuccess){
            navigate("/dashboard");
        }
        if (isError) {
            Swal.fire({
                title: 'Error!',
                text: message,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }

        dispatch(reset());
    }, [user, isError, message, isSuccess, dispatch, navigate]);

    const Auth = (e) =>{
        e.preventDefault();
        dispatch(LoginUser({email, password}));
    }

return (
    <div className='login-container'>
        <div className='login-left'>
            <div className="login-container1">
                <form onSubmit={Auth}>
                    {/* {isError && <p className='text-center'>{message}</p>} */}
                <p className="login-text1">Login</p>
                <label htmlFor="username">Username or Email</label><br />
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Masukkan nama pengguna atau email anda' /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Masukkan password anda'/><br />
                <p className="login-text2">Belum memiliki akun?<Link to="/register" class="text-blue-500">Tekan disini</Link></p>
                <button className="login-start" type='submit'>{isLoading ? "LOADING.."  : "LOGIN"}</button>
                </form>
            </div>
        </div>
        <div className='login-right'>
        <img src="img\icon.png"/>
        </div>
    </div>
);
}

export default Login;


