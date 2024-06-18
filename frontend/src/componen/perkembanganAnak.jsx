import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/input.css'
// import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

function PerkembanganAnak() {
    const [open, setOpen] = useState (false);
    const [open2, setsrc] = useState (false);
    return (
        <>
            <div className="containerRoot flex flex-row h-full bg-slate-200">



{/* navigation Start  */}

<div className= {`${open ? "w-48" : "hidden"} h-full z-10 sm:containerNav sm:w-1/6 sm:h-[100vh] justify-items-center sm:flex flex-col sm:mr-52 fixed bg-white capitalize`}>
<FiX className={`text-slate-600 bottom-0 top-5 right-5 sm:hidden absolute z-10 rounded-full size-5 hover:bg-slate-400 hover:text-white ${!open && "rotate-180"}`} onClick={() => setOpen (!open)} />
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


<div className="containerIsi p-4 sm:pl-32 mt-0 w-full sm:mt-10 mb-20 mx-auto sm:ml-52 sm:mr-0 ">

    {/* top container */}
    <div className="containerTop flex flex-row justify-between w-full">
    {/* button nav */}

    <FiMenu className='text-slate-600 top-0 bottom-0 my-auto mr-4 sm:hidden' onClick={() => setOpen (!open)}/>

    {/* button nav end */}
        <h1 className="sm:text-4xl text-2xl font-bold mr-auto my-auto">
            Perkembangan Anak
        </h1>
        <div className="containerInput mr-5 my-auto justify-center items-center flex">
            <input type="text" placeholder='cari....' className={`${open2 ? "block absolute w-auto" : "hidden"}  shadow appearance-none border rounded left-4  py-2 px-3  text-gray-700 focus:outline-none focus:shadow-outline sm:flex bg-white sm:rounded-sm sm:outline-0 sm:h-5 sm:px-5 sm:py-5 sm:rounded-t-xl sm:rounded-b-xl `}/>
        </div>
        <div className="containerLogo align-middle float-right relative sm:float-none flex flex-row w-32  sm:justify-center sm:items-center">
        <FaSearch className='text-slate-600  my-auto  text-3xl sm:hidden' onClick={() => setsrc (!open2)}/>
            <div className="containerBell  rounded-md bg-[rgba(16,92,140,1)] px-1 flex mx-[15px] p-1">
                <img src="/img/imgDashboard/bell 4.png" alt="" className="h-[30px] w-[30px]" />
            </div>
            <div className="containerProfil">
                <img src="/img/imgDashboard/Female Profile.png" alt="" className="w-[40px] h-[40px] " />
            </div>
        </div>
    </div>
    {/* Top container end*/}

                    <div className='content-center mt-20 max-w-9xl '>
                        <div className='float-left'>
                            <div className="bg-blue-900  overflow-hidden shadow-lg text-center text-white max-w-64 px-8 py-2">Nama Anak Terdaftar</div>

                            <div className="  overflow-hidden shadow-lg max-w-64	bg-white py-36">
                                {/* kosong dulu ya gess */}
                            </div>
                        </div>
                        <div className='w-3/5 text-sm	 text-blue-900 float-right font-semibold mt-2 px-4 py-4 bg-white'>
                            <label >Berat Badan</label><br />
                            <input className="bg-slate-200 rounded-md outline-0 h-5 px-5 py-5 w-32 mb-3" readOnly /><br />
                            <label >Tinggi Badan</label><br />
                            <input className="bg-slate-200 rounded-md outline-0 h-5 px-5 py-5 w-32 mb-3" readOnly /><br />
                            <div className='my-5'>
                                <label className='mr-5'>Tampilkan Grafik berdasarkan riwayat</label>
                            <input type="checkbox" /><br />
                            </div>
                            <label >Deskripsi</label><br />
                            <input className="bg-slate-200 rounded-md outline-0 h-48 px-5 py-5 w-full mb-3" readOnly /><br />
                            <label >Rekomendasi Makanan Penambah Nutrisi</label><br />
                            <div className='inline-grid grid-cols-4 gap-4'>
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            <img src="/img/Add File.png" className='w-12 mr-1' />
                            </div>
                        </div>           
                    </div>
                    <button className='bg-blue-900 text-white px-5 py-3 mt-8 rounded-t-xl rounded-b-xl float-right'>Kirim</button>
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

export default PerkembanganAnak;