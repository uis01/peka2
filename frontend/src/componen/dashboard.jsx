import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/input.css'
// import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";


function Dashboard() {
    const [open, setOpen] = useState (false);
    const [open2, setsrc] = useState (false);
    return (
        <>
            <div className="containerRoot flex flex-row h-full">



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


                <div className="containerIsi p-4 sm:pl-32 mt-0 sm:mt-10 mb-20 mx-auto sm:ml-52 sm:mr-0 ">

                    {/* top container */}
                    <div className="containerTop flex flex-row justify-between w-full">
                    {/* button nav */}

                    <FiMenu className='text-slate-600 top-0 bottom-0 my-auto mr-4 sm:hidden' onClick={() => setOpen (!open)}/>
                
                    {/* button nav end */}
                        <h1 className="sm:text-4xl text-2xl font-bold mr-auto my-auto">
                            Dashboard
                        </h1>
                        <div className="containerInput mr-5 my-auto justify-center items-center flex">
                            <input type="text" placeholder='cari....' className={`${open2 ? "block absolute w-auto" : "hidden"}  shadow appearance-none border rounded left-4  py-2 px-3  text-gray-700 focus:outline-none focus:shadow-outline sm:flex bg-slate-200 sm:rounded-sm sm:outline-0 sm:h-5 sm:px-5 sm:py-5 sm:rounded-t-xl sm:rounded-b-xl `}/>
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

                    {/* mid dashboard*/}
                    <div className="containerMidDashboard sm:mt-28 mt-10">
                        <div className="container1 p-5 w-4xl sm:h-36 relative m-auto mt-5 border-solid border-2 border-[rgba(16,92,140,1)] rounded-xl flex flex-col justify-center items-start text-4xl font-bold">
                            <h1 className='text-xl sm:text-4xl font-bold sm:w-full w-2/3'> Halo Bunda Sari</h1>
                            <h2 className='text-sm  sm:text-xl font-semibold sm:w-full w-1/2'>Sudah siap untuk jalani hari ini?</h2>
                            <img src="/img/imgDashboard/gambar1.png" alt="" className=' sm:right-10 right-0 absolute z-2 h-max w-36 sm:w-56 bottom-0' />
                        </div>

                        <div className="container1 p-2 w-4xl relative m-auto mt-5 border-solid border-2 border-[rgba(16,92,140,1)] rounded-xl flex flex-col justify-center items-start">
                            <h1 className='text-xl sm:text-2xl font-bold sm:w-full w-1/2'>Perkembangan anak</h1>
                            <br />
                            <h2 className='text-xs  sm:text-xl font-medium sm:w-full w-1/2'>tambahkan data mengenai deskripsi <br /> tentang perkembangan si buah hati </h2>
                            <button className='sm:block hidden sm:bg-[rgba(16,92,140,1)] sm:mt-3   sm:p-2 sm:absolute sm:z-20 sm:ml-96 sm:border-solid sm:border-[rgba(16,92,140,1)] sm:border-2 sm:rounded-3xl sm:text-white sm:hover:bg-cyan-600'>
                            <Link to="/perkembanganAnak"> + Tambahkan data </Link>
                            </button>
                            <img src="/img/imgDashboard/gambar2.png" alt="" className='h-max w-40 sm:w-56 sm:right-10 top-47 absolute z-10 right-0 ' />
                        </div>
                        

                    </div>
                    <button className='sm:hidden bg-[rgba(16,92,140,1)] my-5 w-full p-2 border-solid border-[rgba(16,92,140,1)] border-2 rounded-xl text-white hover:bg-cyan-600'>
                                + Tambahkan data
                            </button>

                    {/* mid dashboard end */}


                    <br />
                    {/* continerDown */}
                    <div className="ContainerDown text-white">
                        <div className="containerDown1 rounded-xl w-4xl bg-[rgba(16,92,140,1)] m-auto flex items-center p-2 mb-5">
                            <img src="/img/imgDashboard/gambar3.png" alt="" className='w-36 mr-2 sm:h-auto ' />
                            <div className="text">
                                <h1 className='text-2xl mb-3 font-semibold capitalize'>lorem</h1>
                                <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea at repellendus, facere ut quod eaque amet ducimus neque, inventore, voluptates error dolores voluptatibus dolore? Voluptas sed facilis quaerat asperiores.</p>
                            </div>
                        </div>

                        <div className="containerDown1 rounded-xl w-4xl bg-[rgba(16,92,140,1)] m-auto flex items-center p-2 mb-5">
                            <img src="/img/imgDashboard/gambar3.png" alt="" className='w-36 mr-2' />
                            <div className="text">
                                <h1 className='text-2xl mb-3 font-semibold'>lorem</h1>
                                <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea at repellendus, facere ut quod eaque amet ducimus neque, inventore, voluptates error dolores voluptatibus dolore? Voluptas sed facilis quaerat asperiores.</p>
                            </div>
                        </div>


                    </div>
                    {/* downcontainer end*/}
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


export default Dashboard;