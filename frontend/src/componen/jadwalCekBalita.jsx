import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/input.css'
// import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";


function JadwalCekBalita() {
    const [open, setOpen] = useState(false);
    const [open2, setsrc] = useState(false);
    return (
        <>
            <div className="containerRoot flex flex-row h-full bg-slate-200 ">

{/* navigation Start  */}

<div className={`${open ? "w-48" : "hidden"} h-full z-10 sm:containerNav top-0 sm:w-1/6 sm:h-[100vh] justify-items-center sm:flex flex-col sm:mr-52 fixed bg-white capitalize`}>
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
        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)]'>
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

        <FiMenu className='text-slate-600 top-0 bottom-0 my-auto mr-4 sm:hidden' onClick={() => setOpen(!open)} />

        {/* button nav end */}
        <h1 className="sm:text-4xl text-2xl font-bold mr-auto my-auto">
            Jadwal Cek Balita
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

                    <div className='content-center mt-20 w-full'>
                        <div className='float-left mb-5'>
                            <button className='bg-[rgba(48,161,233,1)] text-white px-3 py-2 rounded-md mr-10'><Link to="/jadwal">Kalender</Link></button>
                            <button className='bg-blue-900 text-white px-3 py-2 rounded-md '>Kegiatan</button>
                        </div>
                        <select name="filter" id="#" className='bg-blue-900 text-white px-3 py-1 rounded-full float-right mb-5'>
                            <option value="">Filter by</option>
                            <option value="">Terbaru</option>
                            <option value="">Terlama</option>
                        </select>
                    </div>

                    <div className='content-center mt-2 w-full '>
                        <div className='float-left'>
                            <div className="bg-blue-900  overflow-hidden shadow-lg max-w-80 py-5 rounded-xl mb-3">
                                <table className=' ml-5'>
                                    <tr>
                                        <td className='pl-3'><div className="text-white font-bold text-xl">Hari ini</div></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2} className='pl-3'><div className="text-white font-bold text-6xl">05</div></td>
                                        <td className='pl-3'><div className="text-white text-lg">Minggu</div></td>
                                    </tr>
                                    <tr>
                                        <td className='pl-3'><div className="text-white text-lg">Mei 2024</div></td>
                                    </tr>
                                </table>

                            </div>

                            <div className="  overflow-hidden shadow-lg max-w-80	bg-white py-5 rounded-xl">
                                <table className='w-10/12 m-auto'>
                                    <tr>
                                        <td><div className="font-bold text-xl mb-3">Jadwal Kamu</div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-3" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-3" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-3" readOnly />
                                        </td>
                                    </tr>
                                </table>


                            </div>
                        </div>
                        <table className='max-w-7xl	text-xs	 text-blue-900 float-right text-center table-auto border-collapse mt-2 px-4 py-4 bg-white'>
                                    <tr>
                                    <th className='px-4 py-4'>No</th>
                                    <th className='px-4 py-4'>Tanggal Pendaftaran</th>
                                    <th className='px-4 py-4'>Nama Anak</th>
                                    <th className='px-4 py-4'>NIK Anak</th>
                                    <th className='px-4 py-4'>Nama Ibunda</th>
                                    <th className='px-4 py-4'>Nomor Antrian</th>
                                    </tr> 
                                     
                                    <tr>
                                        <td className='px-4 py-4'>1</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>2</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>3</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>4</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>
                                    <tr>
                                        <td className='px-4 py-4'>5</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>   
                                    <tr>
                                        <td className='px-4 py-4'>6</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>7</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>8</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>  
                                    <tr>
                                        <td className='px-4 py-4'>9</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>
                                    <tr>
                                        <td className='px-4 py-4'>10</td>
                                        <td className='px-4 py-4'>06 Mei 2024</td>
                                        <td className='px-4 py-4'>Saripudin</td>
                                        <td className='px-4 py-4'>1234567890</td>
                                        <td className='px-4 py-4'>Siti</td>
                                        <td className='px-4 py-4'>001</td>
                                    </tr>   
                                </table>    
                    </div>
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

export default JadwalCekBalita;