import React from 'react';
import { useContext } from 'react';
import { Context } from '../../Contexts/Contexts';

const Tasksummery = () => {
    const { dark } = useContext(Context)

    return (
        <div>
            <h4 className='font-bold my-10'>Task Summary</h4>

            <div className={`${dark ? "bg-[#070c16]" : "bg-white"} flex flex-col w-[273px] h-[344px] p-5 shadow-sm rounded-xl border-2 border-dashed border-purple-400 `}>
                <div className="flex flex-col w-full">
                    <p className="font-semibold">Total Task</p>
                    <p className="text-lg font-bold mb-3">112</p>
                    <div className="flex flex-col mt-4">
                        <div>
                            <label>Completed</label>
                            <div className="flex justify-between items-center h-7 overflow-hidden bg-[#F4F4F4] rounded-lg">
                                <div className="bg-[#C6C7F8] h-7 w-[10%]"></div>
                                <div className='mr-2'>
                                    <span className='font-semibold text-lg text-[#BABABA]'>50</span>
                                    <span className='font-semibold text-lg text-[#BABABA]'>/</span>
                                    <span className='font-semibold text-lg'>80</span>
                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <label>In Progress</label>
                            <div className="flex justify-between h-7 overflow-hidden bg-[#F4F4F4] rounded-lg">
                                <div className="bg-[#C6C7F8] h-7 w-1/2"></div>
                                <div className='mr-2'>
                                    <span className='font-semibold text-lg'>15</span>
                                    <span className='font-semibold text-lg text-[#BABABA]'>/</span>
                                    <span className='font-semibold text-lg'>112</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Pending</label>
                            <div className="flex justify-between h-7 overflow-hidden bg-[#F4F4F4] rounded-lg">
                                <div className="bg-[#C6C7F8] h-7 w-[25%]"></div>
                                <div className='mr-2'>
                                    <span className='font-semibold text-lg'>50</span>
                                    <span className='font-semibold text-lg text-[#BABABA]'>/</span>
                                    <span className='font-semibold text-lg'>80</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasksummery;