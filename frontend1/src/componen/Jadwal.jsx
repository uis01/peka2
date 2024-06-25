import './css/input.css'
import { Link } from 'react-router-dom';
import './css/input.css'
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

function Jadwal () {
    const [open, setOpen] = useState(false);
    const [open2, setsrc] = useState(false);
    return (
        <>
            <div className="containerRoot  h-full bg-white ">

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


                <div className="containerIsi p-4 sm:pl-32 mt-0 sm:mt-10 mb-20 mx-auto sm:ml-52 sm:mr-0 ">

                    {/* top container */}
                    <div className="containerTop flex flex-row justify-between w-full">
                        {/* button nav */}

                        <FiMenu className='text-slate-600 top-0 bottom-0 my-auto mr-4 sm:hidden' onClick={() => setOpen(!open)} />

                        {/* button nav end */}
                        <h1 className="sm:text-4xl text-2xl font-bold mr-auto my-auto">
                        Jadwal Cek Balita
                        </h1>
                        <div className="containerInput mr-5 my-auto justify-center items-center flex">
                            <input type="text" placeholder='cari....' className={`${open2 ? "block absolute w-auto" : "hidden"}  shadow appearance-none border rounded left-4  py-2 px-3  text-gray-700 focus:outline-none focus:shadow-outline sm:flex bg-slate-200 sm:rounded-sm sm:outline-0 sm:h-5 sm:px-5 sm:py-5 sm:rounded-t-xl sm:rounded-b-xl `} />
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
                        <div className="containerContent w-full h-[80vh] mt-20 flex flex-row m-auto justify-between">

                            {/* content1 */}
                            
                            <div className="container1 w-[25vw] h-[80vh] flex flex-col ml-2">
                                <div className='flex flex-row justify-start gap-8 mb-5'>
                                    <button className='bg-[rgba(16,92,140,1)] text-white px-4 py-2'>
                                        kalender
                                    </button>
                                <button className='bg-[rgba(48,161,233,1)] text-white px-4'>
                                    <Link to="/jadwalCekBalita">kegiatan</Link>
                                </button>
                                </div>
                                <div className="tanggalHari bg-[rgba(16,92,140,1)] w-full h-1/5  flex flex-row items-center rounded-xl gap-x-5 border-2 border-black">
                                    <div className="hari ml-3 ">
                                        <h1 className=' text-1xl text-white font-bold'>Hari Ini</h1>
                                        <h1 className='text-5xl text-white font-bold'>05</h1>
                                    </div> 
                                    <div className="text mt-7 text-base">
                                        <h1 className='text-white'> Minggu</h1>
                                        <h1 className='text-white'>Mei, 2024</h1>
                                    </div>
                                </div>
                                <div className="containerJadwal w-full h-[43%] border-2 border-[rgba(16,92,140,1)] mt-2 mb-2 rounded-xl">
                                    <div className="text ml-4">
                                        <h1 className='mb-5 mt-2'>Jadwal Kamu</h1>
                                        <div className="w-[90%] h-10 bg-[rgba(16,92,140,1)] rounded-lg mb-4"></div>
                                        <div className="w-[90%] h-10 bg-[rgba(16,92,140,1)] rounded-lg mb-4"></div>
                                        <div className="w-[90%] h-10 bg-[rgba(16,92,140,1)] rounded-lg mb-4"></div>
                                    </div>
                                </div>
                                <div className="containerNotif border-2 border-[rgba(16,92,140,1)] h-40 list-disc rounded-xl">
                                    <div className="notif ml-3">
                                        <h1>Akan datang</h1>
                                        <li className=' '>
                                            lorem ipsum <br />
                                        <p className=' text-sm text-[gray]'>
                                            04.24 PM
                                        </p>
                                        </li>
                                        <li className=' '>
                                            lorem ipsum <br /><p className=' text-sm text-[gray]'>04.24 PM</p>
                                        </li>
                                        <li className=' '>
                                            lorem ipsum <br />
                                            <p className=' text-sm text-[gray]'>
                                            04.24 PM
                                            </p>
                                        </li>
                                    </div>
                                    
                                    
                                </div>
                                
                                   

                                

                            </div>
                            {/* content1 end  */}

                            <div className="flex flex-col items-center justify-center w-[40vw] h-auto">
                                <div className="tombol justify-self-end items-end ml-96 mb-6 flex ">
                                    <button className='bg-[rgba(16,92,140,1)] px-4 py-2 font-bold text-white'>
                                        + Tambah
                                    </button>
                                </div>
                                <div className="grid grid-cols-7 bg-zinc-800 text-white border-2 border-black">
                                    <div className="text-center p-6 border-2 border-white">SEN</div>
                                    <div className="text-center p-6 border-2 border-white">SEL</div>
                                    <div className="text-center p-6 border-2 border-white">RAB</div>
                                    <div className="text-center p-6 border-2 border-white">KAM</div>
                                    <div className="text-center p-6 border-2 border-white">JUM</div>
                                    <div className="text-center p-6 border-2 border-white">SAB</div>
                                    <div className="text-center p-6 border-2 border-white">MING</div>
                                    <div className="text-center p-3 border-2 border-white">1</div>
                                    <div className="text-center p-3 border-2 border-white">2</div>
                                    <div className="text-center p-3 border-2 border-white">3</div>
                                    <div className="text-center p-3 border-2 border-white">4</div>
                                    <div className="text-center p-3 border-2 border-white">5</div>
                                    <div className="text-center p-3 border-2 border-white">6</div>
                                    <div className="text-center p-3 border-2 border-white">7</div>
                                    <div className="text-center p-3 border-2 border-white">8</div>
                                    <div className="text-center p-3 border-2 border-white">9</div>
                                    <div className="text-center p-3 border-2 border-white">10</div>
                                    <div className="text-center p-3 border-2 border-white">11</div>
                                    <div className="text-center p-3 border-2 border-white">12</div>
                                    <div className="text-center p-3 border-2 border-white">13</div>
                                    <div className="text-center p-3 border-2 border-white">14</div>
                                    <div className="text-center p-3 border-2 border-white">15</div>
                                    <div className="text-center p-3 border-2 border-white">16</div>
                                    <div className="text-center p-3 border-2 border-white">17</div>
                                    <div className="text-center p-3 border-2 border-white">18</div>
                                    <div className="text-center p-3 border-2 border-white">19</div>
                                    <div className="text-center p-3 border-2 border-white">20</div>
                                    <div className="text-center p-3 border-2 border-white">21</div>
                                    <div className="text-center p-3 border-2 border-white">22</div>
                                    <div className="text-center p-3 border-2 border-white">23</div>
                                    <div className="text-center p-3 border-2 border-white">24</div>
                                    <div className="text-center p-3 border-2 border-white">25</div>
                                    <div className="text-center p-3 border-2 border-white">26</div>
                                    <div className="text-center p-3 border-2 border-white">27</div>
                                    <div className="text-center p-3 border-2 border-white">28</div>
                                    <div className="text-center p-3 border-2 border-white">29</div>
                                    <div className="text-center p-3 border-2 border-white">30</div>
                                    <div className="text-center p-3 border-2 border-white"></div>
                                    <div className="text-center p-3 border-2 border-white"></div>
                                    <div className="text-center p-3 border-2 border-white"></div>
                                    <div className="text-center p-3 border-2 border-white"></div>
                                    <div className="text-center p-3 border-2 border-white"></div>
                                </div>
                            </div>                      
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

export default Jadwal