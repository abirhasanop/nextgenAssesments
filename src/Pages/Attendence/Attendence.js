import React from 'react';
import { IoMdSettings } from "react-icons/io"
import Table from '../../Components/Table/Table';
import { FaAngleDown } from "react-icons/fa"
import ReactToPdf from 'react-to-pdf'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Contexts/Contexts';

const Attendence = () => {
    const { dark } = useContext(Context)
    const ref = React.createRef();

    const options = {
        // orientation: 'landscape',
        // unit: 'in',
        format: "a3"
    };


    return (
        <div className='p-10'>
            {/* header */}
            <div className='flex flex-col  md:flex-row  justify-between items-center mb-10'>
                <h1 className='text-3xl font-bold mb-10'>Dashboard</h1>
                <div className='flex md:gap-10 items-center'>
                    <ReactToPdf targetRef={ref} filename="report.pdf" options={options} x={0} y={20} scale={0.8}>
                        {({ toPdf }) => (
                            <button onClick={toPdf} className='btn bg-[#1E2772]'>Download Report</button>
                        )}

                    </ReactToPdf>

                    <button className='btn btn-ghost'><IoMdSettings className='text-5xl text-[#1E2772]' /></button>
                </div>
            </div>
            {/* filters */}
            <section className='flex flex-wrap gap-5 mb-10 justify-center md:justify-start'>
                <label htmlFor='date' className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center `}>
                    <input id='date' type="date" className=' text-gray-500' />
                </label>
                <div className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center `}>
                    <p className='text-base text-gray-500'>Department</p>
                </div>
                <div className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem]`}>
                    <div className="dropdown w-full h-full">
                        <label tabIndex={0} className={`btn ${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} text-gray-500 border-none  w-full h-full flex gap-3`}>
                            Attendance <FaAngleDown className='text-xl' />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Total Attendance</Link></li>
                            <li><Link>Only Employees</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem]`}>
                    <div className="dropdown w-full h-full">
                        <label tabIndex={0} className={`btn ${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} text-gray-500 border-none  w-full h-full flex gap-3`}>
                            Present <FaAngleDown className='text-xl' />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Total Present</Link></li>
                            <li><Link>Employees</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center `}>
                    <p className='text-base text-gray-500'>Check In</p>
                </div>
                <div className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center `}>
                    <p className='text-base text-gray-500'>Location</p>
                </div>
                <div className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem]`}>
                    <div className="dropdown w-full h-full">
                        <label tabIndex={0} className={`btn ${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} text-gray-500 border-none  w-full h-full flex gap-3`}>
                            Designation <FaAngleDown className='text-xl' />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>All</Link></li>
                            <li><Link>Employees</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={`${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} border border-[#00000033] rounded-lg w-64 h-[4.5rem]`}>
                    <div className="dropdown w-full h-full">
                        <label tabIndex={0} className={`btn ${dark ? "bg-[#070c16]" : "bg-white hover:bg-gray-100"} text-gray-500 border-none  w-full h-full flex gap-3`}>
                            Department <FaAngleDown className='text-xl' />
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Technical</Link></li>
                            <li><Link>Marketing</Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* table */}
            <section ref={ref}>
                <Table />
            </section>
        </div>
    );
};

export default Attendence;