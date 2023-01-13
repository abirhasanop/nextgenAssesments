import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { BiLogOutCircle } from "react-icons/bi"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { IoNotifications } from "react-icons/io5"
import { FcDepartment } from "react-icons/fc"
import { FiLogOut } from "react-icons/fi"
import { IoMdSettings } from "react-icons/io"
import { FaAngleDown } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import { useState } from 'react';
import Logo from "../../Assets/taskImage.png"

const Slidebar = () => {
    const [settingIsOpen, setSettingIsOpen] = useState(false)
    return (
        <div>

            <aside className="w-96 h-full" aria-label="Sidebar">
                <div className="pl-14 px-3 py-4 overflow-y-auto rounded bg-[#1E2772] h-full text-white dark:bg-gray-800">
                    <Link to="/" className="flex items-center pl-2.5 mb-5">
                        <img src={Logo} className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NEXTGEN IT</span>
                    </Link>
                    <ul className="space-y-2">
                        <li>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-[#202c96]" : ""} flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700`}>
                                <svg aria-hidden="true" className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/attendence" className={({ isActive }) => `${isActive ? "bg-[#202c96]" : ""} flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700`}>
                                <FaClipboardList className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Attendance</span>
                                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">57</span>
                            </NavLink>
                        </li>
                        <li>
                            <Link to="/coming-soon" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700">
                                <IoIosPeople className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Employees</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">80</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coming-soon" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700">
                                <BiLogOutCircle className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Leaves</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coming-soon" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700">
                                <FaMoneyCheckAlt className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Expense</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coming-soon" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700">
                                <IoNotifications className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Notice</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coming-soon" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700">
                                <FcDepartment className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Departments</span>
                            </Link>
                        </li>
                        <li className=''>

                            <p onClick={() => setSettingIsOpen(!settingIsOpen)} href="#_" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700 cursor-pointer ">
                                <IoMdSettings className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
                                {
                                    settingIsOpen ? <><FaAngleDown className='mr-4' /></> : <><FaAngleRight className='mr-4' /></>
                                }
                            </p>



                            <div className={`flex justify-end w-[60%] ${settingIsOpen ? "flex" : "hidden"}`}>
                                <ul className='list-disc cursor-pointer'>
                                    <li>
                                        <p className='hover:bg-[#202c96] rounded-lg pl-2 p-1 flex items-center'>Approval</p>
                                    </li>
                                    <li>
                                        <p className='hover:bg-[#202c96] rounded-lg pl-2 p-1 flex items-center'>Leave</p>
                                    </li>
                                    <li>
                                        <p className='hover:bg-[#202c96] rounded-lg pl-2 p-1 flex items-center'>Office Setting</p>
                                    </li>
                                    <li>
                                        <p className='hover:bg-[#202c96] rounded-lg pl-2 p-1 flex items-center'>My Subscriptions</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#202c96] dark:hover:bg-gray-700">
                                <FiLogOut className='text-xl' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Slidebar;