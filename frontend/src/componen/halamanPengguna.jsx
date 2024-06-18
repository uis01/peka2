import './css/input.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function HalamanPengguna() {
    const [open, setOpen] = useState(false);
    const [open2, setsrc] = useState(false);
    return (
        <>
            <div className="containerRoot max-h-full min-h-screen w-full flex flex-row top-0 bg-slate-200 px-2">

                {/* navigation Start  */}

                <div className={`${open ? "w-48" : "hidden"} h-full sm:left-0 z-30 sm:containerNav sm:w-1/6 sm:h-[100vh] justify-items-center top-0 sm:flex flex-col sm:mr-52 fixed bg-white capitalize`}>
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
                        <h1 className="sm:text-4xl text-2xl font-bold sm:left-0 my-auto top-1 sm:relative sm:z-0  left-16 z-10 absolute">
                            Halaman <br className='sm:hidden' />Pengguna
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
                    <div className='content-center mt-20 w-4/5 mx-auto '>
                        <div className='flex space-x-8 '>
                            <div className=" rounded sm:overflow-hidden shadow-lg w-1/2   bg-white py-5 px-3 rounded-b-3xl rounded-t-3xl relative">
                                <button className='border-none rounded-full absolute z-10 right-3 top-3 py-2 px-5 text-white font-medium bg-gray-500 text-xs '>Log Out</button>
                                <div className=" flex">
                                    <img className=" rounded-full border-4 border-blue-700  p-1 w-24 h-24 object-cover object-top " src="https://img2.beritasatu.com/cache/beritasatu/480x310-3/2024/01/1706710072-1065x699.webp" />
                                    <div className='ml-3 my-auto'>
                                        <p className='capitalize text-xl text-blue-700 flex font-bold'>sri wahyuni</p>
                                        <p className='text-sm font-semibold text-slate-700'>Admin</p>
                                        <div className='flex mt-1'>
                                            <FaLocationDot className='text-sm text-amber-600 ' /><p className='text-xs text-slate-700 capitalize font-medium'>jawa timur, indonesia</p>
                                        </div>
                                    </div>
                                </div>
                                <table className='w-full text-center capitalize mt-8 text-blue-600'>
                                    <tr>
                                        <th className='font-medium text-xs w-1/3'>tanggal lahir</th>
                                        <th className='font-medium text-xs w-1/3'>status</th>
                                        <th className='font-medium text-xs w-1/3'>id number</th>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold text-lg'>18 Mei 1990</td>
                                        <td className='font-semibold text-lg'>online</td>
                                        <td className='font-semibold text-lg'>2405001</td>
                                    </tr>
                                </table>
                                <div className='bg-slate-100 w-full min-h-52 max-h-52  rounded-xl mt-5 text-blue-600 py-8 px-3'>Saya merupakan seorang kader posyandu berusia 34 tahun yang telah berkecimpung dalam pekerjaan ini selama kurang dari 4 tahun.</div>
                            </div>
                            <div className=" rounded sm:overflow-hidden shadow-lg w-1/2 px-20  bg-white py-5 rounded-b-3xl rounded-t-3xl">
                            <h1 className='w-full capitalize text-2xl text-center text-blue-700 font-bold'>aktivitas terbaru</h1>
                                <ul className='list-disc mt-3 space-y-2 text-blue-600'>
                                    <li >Menambahkan 1 notifikasi pada 6 Mei 2024</li>
                                    <li>Mengirim 1 data perkembangan balita pada 4 Mei 2024</li>
                                    <li>Menambahkan 1 notifikasi pada 3Mei 2024</li>
                                    <li>Mengirim 1 data perkembangan balita pada 2 Mei 2024</li>
                                </ul>

                            </div>
                        </div>
                        <div className=" rounded sm:overflow-hidden shadow-lg w-full px-3 inline-block bg-white py-5 mt-8 rounded-b-3xl rounded-t-3xl">
                        <table className='text-blue-600 float-left capitalize w-1/2 border-spacing-x-5 border-spacing-y-1 border-separate'>
                            <tr>
                                <td>
                                    <label className='font-medium text-xs'> first name</label><br />
                                    <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                                <td>
                                    <label className='font-medium text-xs'> last name</label><br />
                                    <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <label className='font-medium text-xs'>email</label><br />
                                <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                            </tr>
                            <tr>
                            <td colSpan={2}>
                                <label className='font-medium text-xs'>phone number</label><br />
                                <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                            </tr>
                        </table>
                        <table className='text-blue-600 float-right capitalize w-1/2 border-spacing-x-5 border-spacing-y-1 border-separate'>
                        <tr>
                            <td colSpan={2}>
                                <label className='font-medium text-xs'>address</label><br />
                                <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='font-medium text-xs'>country</label><br />
                                    <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                                <td>
                                    <label className='font-medium text-xs'>city</label><br />
                                    <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='font-medium text-xs'>province</label><br />
                                    <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                                <td>
                                    <label className='font-medium text-xs'>gender</label><br />
                                    <input className="bg-slate-200 rounded-sm text-center outline-0 h-5 px-5 py-7 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                </td>
                            </tr>
                            
                        </table>

                        </div>
                        <button className='bg-blue-700 text-white px-3 py-3 mt-5 rounded-t-xl rounded-b-xl float-right'>Simpan</button>
                    </div>
                    
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

export default HalamanPengguna;