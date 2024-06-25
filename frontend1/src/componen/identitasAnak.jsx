import './css/input.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';



function IdentitasAnak() {
    const [open, setOpen] = useState(false);
    const [open2, setsrc] = useState(false);


    // useEffect(() => {
    //     fetchBalitas(); // Panggil fungsi untuk mengambil data balita saat komponen dimuat pertama kali
    // }, []);

    // // Fungsi untuk mengambil data balita dari backend
    // const fetchBalitas = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3000/balita');
    //         setBalitas(response.data.data); // Memperbarui state balitas dengan data balita dari backend
    //     } catch (error) {
    //         console.error('Error fetching balita:', error);
    //     }
    // };

    const [balitas, setBalitas] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/balita')
            //   .then(res => res.json())
            .then(response => {
                setBalitas(response.data.data);
            })
            .catch(err => console.log(err));
    }, [])
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <>
          
            <div className="containerRoot min-h-screen max-h-full w-full flex flex-row top-0 bg-slate-200 px-2">

                {/* navigation Start  */}




                <div className={`${open ? "w-48" : "hidden"} h-full sm:left-0 z-10 sm:containerNav sm:w-1/6 sm:h-[100vh] justify-items-center top-0 sm:flex flex-col sm:mr-52 fixed bg-white capitalize`}>
                    <FiX className={`text-slate-600 bottom-0 top-5 right-5 sm:hidden absolute z-10 rounded-full size-5 hover:bg-slate-400 hover:text-white ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                    <div className='img flex justify-center items-center mt-5'>
                        <img src="/img/logoNavbar.png" className='w-[130px] h-[115px]' />
                    </div>
                    <div className="listNav text-white decoration list-none mt-[4vh]">
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/Dashboard">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center  '>
                                    <img src="/img/imgNavbar/dashboard 1.png" className='w-full h-[24px] mr-2' alt="" />
                                    <p className='text-black capitalize'>dashboard</p>
                                </button>
                            </Link>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8  '>
                            <Link to="/editor">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/writer 1.png" className='w-full h-[24px] mr-2' alt="" />
                                    <p className='text-black capitalize'>editor</p>
                                </button>
                            </Link>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/jadwal">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/jadwal.png" className='w-full h-[24px] mr-2' alt="" />
                                    <p className=' text-black capitalize'>jadwal</p>
                                </button>
                            </Link>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)]'>
                            <Link to="/database">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/database 1.png" className='w-full h-[24px] mr-2' alt="" />
                                    <p className=' text-black capitalize'>database</p>
                                </button>
                            </Link>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/tentangKami">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/tentang kami.png" className='w-[24px] h-[24px] mr-2' alt="" />
                                    <p className=' text-black capitalize'>tentang kami</p>
                                </button>
                            </Link>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/bantuan">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/bantuan.png" className='w-full h-[24px] mr-2' alt="" />
                                    <p className=' text-black capitalize'>bantuan</p>
                                </button>
                            </Link>
                        </li>
                    </div>
                </div>


                {/* navigation End  */}


                <div className="containerIsi w-full p-4 sm:pl-32 mt-0 sm:mt-10 mb-20 mx-auto sm:ml-52 sm:mr-0">

                    {/* top container */}


                    <div className="containerTop flex flex-row justify-between w-full">


                        {/* button nav */}

                        <FiMenu className='text-slate-600 top-0 bottom-0 my-auto mr-4 sm:hidden' onClick={() => setOpen(!open)} />

                        {/* button nav end */}


                        <h1 className="sm:text-4xl text-2xl font-bold mr-auto my-auto">
                            Database
                        </h1>
                        <div className="containerInput mr-5 my-auto justify-center items-center flex">
                            <input type="text" placeholder='cari....' className={`${open2 ? "block absolute w-auto" : "hidden"}  shadow appearance-none border rounded left-4  py-2 px-3  text-gray-700 focus:outline-none focus:shadow-outline sm:flex bg-white sm:rounded-sm sm:outline-0 sm:h-5 sm:px-5 sm:py-5 sm:rounded-t-xl sm:rounded-b-xl `} />
                        </div>
                        <div className="containerLogo align-middle float-right relative sm:float-none flex flex-row w-32  sm:justify-center sm:items-center">
                            <FaSearch className='text-slate-600  my-auto  text-3xl sm:hidden' onClick={() => setsrc(!open2)} />
                            <div className="containerBell  rounded-md bg-[rgba(16,92,140,1)] px-1 flex mx-[15px] p-1">
                                <img src="/img/imgDashboard/bell 4.png" alt="" className="h-[30px] w-[30px]" />
                            </div>
                            <div className="containerProfil">
                                <img src="/img/imgDashboard/Female Profile.png" alt="" className="w-[40px] h-[40px] " />
                            </div>
                        </div>
                    </div>


                    {/* Top container end*/}

                    {/* content */}

                    <div className='content-center mt-20 w-full '>
                        <div className=" rounded sm:overflow-hidden shadow-lg w-full sm:max-w-xl m-auto bg-white py-5 rounded-b-3xl rounded-t-3xl">
                            <div className="font-bold text-4xl my-5 text-center text-blue-600">Identitas Anak</div>
                            <table className='table-auto  w-full sm:m-auto border-separate border-spacing-5  left-0 '>

                                <tr >
                                    {balitas.map((balita, index) => (
                                        <td colSpan="2" key={index}>
                                            <label className='text-base text-blue-600'>Nama Anak</label><br />
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl  w-full mb-2 capitalize" value={balita.nama} />
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    {balitas.map((balita, index) => (
                                        <td colSpan="2" key={index}>
                                            <label className='text-base text-blue-600'>NIK Anak</label><br />
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl  w-full mb-2" value={balita.nik} readOnly />
                                        </td>
                                    ))}
                                </tr>
                                <tr>

                                    {balitas.map((balita, index) => (
                                        <td key={index}>
                                            <label className='text-base text-blue-600'>Tempat</label><br />
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl  w-full mb-2 capitalize" value={balita.birth_location} readOnly />
                                        </td>
                                    ))}

                                    {balitas.map((balita, index) => (
                                        <td key={index}>
                                            <label className='text-base text-blue-600'>Tanggal Lahir</label><br />
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-2" value={formatDate(balita.birth_date)} readOnly />

                                        </td>
                                    ))}

                                </tr>
                                <tr>
                                    {balitas.map((balita, index) => (
                                        <td key={index}>
                                            <label className='text-base text-blue-600'>Gender</label><br />
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-2 capitalize" value={balita.gender} readOnly />
                                        </td>
                                    ))}
                                    {balitas.map((balita, index) => (
                                        <td key={index}>
                                            <label className='text-base text-blue-600'>Golongan Darah</label><br />
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full  mb-2 capitalize" readOnly value={balita.blood_type} />
                                        </td>
                                    ))}
                                </tr>
                            </table>

                        </div>
                    </div>
                    <button className='bg-blue-900 text-white px-3 py-3 mt-5 rounded-t-xl rounded-b-xl float-right'>Riwayat Pengecekan</button>
                    {/* content end */}
                </div>
            </div>

            {/* footer */}
            <div className=" h-[6.3vh] w-full bg-[#0b598a] bottom-0 left-0 fixed flex justify-center items-center z-20">
                <p className='text-slate-50'>2024 copyright PEKA.com</p>
            </div>
            {/* footerend*/}

        </>

    )
}

export default IdentitasAnak;