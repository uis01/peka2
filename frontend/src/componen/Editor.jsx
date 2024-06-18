import './css/input.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
// import React, { useState } from 'react';


function Editor() {

    const [open, setOpen] = useState(false);
    const [open2, setsrc] = useState(false);

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <div className="containerRoot h-full bg-white ">

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
                        <li className=' py-[0.5vh] mt-[5vh] ml-8  border-r-2 border-solid border-[rgba(16,92,140,1)]'>
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


                <div className="containerIsi p-4 sm:pl-32 mt-0 sm:mt-10 mb-40 mx-auto sm:ml-52 sm:mr-0 ">

                    {/* top container */}
                    <div className="containerTop flex flex-row justify-between w-full">
                        {/* button nav */}

                        <FiMenu className='text-slate-600 top-0 bottom-0 my-auto mr-4 sm:hidden' onClick={() => setOpen(!open)} />

                        {/* button nav end */}
                        <h1 className="sm:text-4xl text-2xl font-bold mr-auto my-auto">
                            Editor
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

                    {/* content  */}
                    <div className='flex flex-row mb-10'>
                        <div className='flex flex-col w-full '>
                            <div className=' h-32 w-full flex  items-center'>
                                <input type="text" placeholder='' className="bg-white rounded-sm outline-0 border border-[rgba(16,92,140,1)] h-5 w-2/3 py-5 ml-2 rounded-t-xl rounded-b-xl" />
                            </div>
                            <div className=''>
                                <div className=' h-80 w-full flex  items-center'>
                                    <input type="text" placeholder='' className="bg-white rounded-sm outline-0 border border-[rgba(16,92,140,1)] w-2/3 pb-[40vh] ml-2 rounded-t-xl rounded-b-xl" />
                                </div>

                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div className="flex flex-col items-center justify-end p-5 bg-[rgba(16,92,140,1)] rounded-lg shadow-md">
                                <h2 className="mb-4 text-lg font-semibold text-white">Upload Gambar</h2>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                />
                                {preview && (
                                    <div className="mt-4">
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="max-w-xs rounded-md shadow-md"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        
                    </div>
                    <button className='bg-blue-900 text-white px-8 py-3 mt-8 rounded-full float-right'>Tambah</button>
                    {/* content end  */}

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

export default Editor;