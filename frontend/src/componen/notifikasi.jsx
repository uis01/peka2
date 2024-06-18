import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/input.css'
// import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


function Notifikasi() {
    const [open, setOpen] = useState (false);
    const [open2, setsrc] = useState (false);
    return (
        <>
             <div className="containerRoot flex flex-row h-full bg-slate-200">
{/* navigation Start  */}

<div className={`${open ? "w-48" : "hidden"} h-full z-10 sm:containerNav top-0 sm:w-1/6 sm:h-[100vh] justify-items-center sm:flex flex-col sm:mr-52 fixed bg-white capitalize`}>
    <FiX className={`text-slate-600 bottom-0 top-5 right-5 sm:hidden absolute z-10 rounded-full size-5 hover:bg-slate-400 hover:text-white ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
    <div className='img flex justify-center items-center mt-5'>
        <img src="/img/logoNavbar.png" className='w-[130px] h-[115px]' />
    </div>
    <div className="listNav text-white decoration list-none mt-[4vh]">
        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)]'>
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
        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
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


<div className="containerIsi w-full p-4 sm:pl-32 mt-0 sm:mt-10 mb-20 mx-auto sm:ml-52 sm:mr-0 ">

    {/* top container */}
    <div className="containerTop flex flex-row justify-between w-full">
        {/* button nav */}

        <FiMenu className='text-slate-600 top-0 bottom-0 my-auto mr-4 sm:hidden' onClick={() => setOpen(!open)} />

        {/* button nav end */}
        <h1 className="sm:text-4xl text-2xl font-bold mr-auto my-auto">
            Notifikasi
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
                    <div className='content-center mt-20 w-full '>
                        <div className=" rounded overflow-hidden shadow-lg max-w-4xl m-auto mb-5 bg-white p-5 rounded-b-3xl rounded-t-3xl">
                            <table className='float-left w-10/12'>
                                <tr>
                                    <td rowSpan={2}><div className="containerBell size-16 rounded-full bg-[rgba(16,92,140,1)] px-1 flex items-center mx-[15px] p-1">
                                        <img src="/img/Notification.png" alt="" className=" m-auto" />
                                    </div>
                                    </td>
                                    <td><div className='font-bold text-2xl'>Kegiatan posyandu akan segera dimulai</div></td>
                                </tr>
                                <tr>
                                    <td><div className='text-base'>Ayo segera datang ke tempat, jangan lupa nomor antrianmu!</div></td>
                                </tr>
                            </table>
                            <div className='float-right'><img src="/img/Pencil.png" /></div>
                        </div>
                        <div className=" rounded overflow-hidden shadow-lg max-w-4xl m-auto mb-5 bg-white p-5 rounded-b-3xl rounded-t-3xl">
                            <table className='float-left w-10/12'>
                                <tr>
                                    <td rowSpan={2}><div className="containerBell size-16 rounded-full bg-[rgba(16,92,140,1)] px-1 flex items-center mx-[15px] p-1">
                                        <img src="/img/Notification.png" alt="" className=" m-auto" />
                                    </div>
                                    </td>
                                    <td><div className='font-bold text-2xl'>Kegiatan posyandu akan segera dimulai</div></td>
                                </tr>
                                <tr>
                                    <td><div className='text-base'>Ayo segera datang ke tempat, jangan lupa nomor antrianmu!</div></td>
                                </tr>
                            </table>
                            <div className='float-right'><img src="/img/Pencil.png" /></div>
                        </div>
                        <div className=" rounded overflow-hidden shadow-lg max-w-4xl m-auto mb-5 bg-white p-5 rounded-b-3xl rounded-t-3xl">
                            <table className='float-left w-10/12'>
                                <tr>
                                    <td rowSpan={2}><div className="containerBell size-16 rounded-full bg-[rgba(16,92,140,1)] px-1 flex items-center mx-[15px] p-1">
                                        <img src="/img/Notification.png" alt="" className=" m-auto" />
                                    </div>
                                    </td>
                                    <td><div className='font-bold text-2xl'>Kegiatan posyandu akan segera dimulai</div></td>
                                </tr>
                                <tr>
                                    <td><div className='text-base'>Ayo segera datang ke tempat, jangan lupa nomor antrianmu!</div></td>
                                </tr>
                            </table>
                            <div className='float-right'><img src="/img/Pencil.png" /></div>
                        </div>
                        <FaPlus className='text-white font-medium text-4xl mx-auto mt-10 bg-black rounded-full size-12 p-2'/>                    
                    </div>

                    
                </div>
            </div>
            {/* footer */}
            <div className=" h-[6.3vh] w-full bg-[#0b598a] bottom-0 left-0 fixed flex justify-center items-center">
                <p className='text-slate-50'>2024 copyright PEKA.com</p>
            </div>
            {/* footerend*/}

        </>

    )
}

export default Notifikasi;