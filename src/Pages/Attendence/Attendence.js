import React from 'react';
import { IoMdSettings } from "react-icons/io"
import Table from '../../Components/Table/Table';

const Attendence = () => {
    return (
        <div className='p-10'>
            {/* header */}
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold mb-10'>Dashboard</h1>
                <div className='flex gap-10 items-center'>
                    <button className='btn btn-lg bg-[#1E2772]'>Download Report</button>
                    <button className='btn btn-ghost'><IoMdSettings className='text-5xl text-[#1E2772]' /></button>
                </div>
            </div>
            {/* filters */}
            <section className='flex flex-wrap gap-5 mb-10 justify-center md:justify-start'>
                <label htmlFor='date' className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center hover:bg-gray-100'>
                    <input id='date' type="date" className='hover:bg-gray-100 text-gray-500' />
                </label>
                <div className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center hover:bg-gray-100'>
                    <p className='text-base text-gray-500'>Department</p>
                </div>
                <div className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center'>
                    <input type="date" />
                </div>
                <div className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center'>
                    <input type="date" />
                </div>
                <div className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center'>
                    <input type="date" />
                </div>
                <div className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center'>
                    <input type="date" />
                </div>
                <div className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center'>
                    <input type="date" />
                </div>
                <div className='bg-white border border-[#00000033] rounded-lg w-64 h-[4.5rem] flex justify-center items-center'>
                    <input type="date" />
                </div>
            </section>

            {/* table */}
            <div>
                <Table />
            </div>
        </div>
    );
};

export default Attendence;