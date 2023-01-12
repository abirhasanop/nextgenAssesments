import React from 'react';
import { IoIosPeople } from "react-icons/io"

const Dashboard = () => {
    return (
        <div className='p-10'>
            <h1 className='text-3xl font-bold mb-10'>Dashboard</h1>
            <p className='font-bold mb-3'>Company Status</p>
            <section className='flex gap-5 flex-wrap justify-center md:justify-start'>
                {
                    [...Array(4)].map((j, i) => {
                        return (
                            <section key={i}>
                                <div className='bg-white w-72 h-56 rounded-lg p-6'>
                                    <div className='flex items-center gap-2 mb-4'>
                                        <IoIosPeople />
                                        <p className='text-[#A5A5A5] font-medium'>Total Employee</p>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-3xl font-extrabold'>450</h1>
                                        <button className='btn btn-sm bg-[#1E2772]'>View All</button>
                                    </div>
                                    <hr className='mt-8 mb-6' />

                                    {/* avatar collection */}
                                    <div className="avatar-group -space-x-4">
                                        <div className="avatar w-10 h-10">
                                            <div className="">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEk9YCDScWfzPgmBJhn4zGjnyCE3XnjkNYFw&usqp=CAU" alt='img' />
                                            </div>
                                        </div>
                                        <div className="avatar w-10 h-10">
                                            <div className="">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hi1fjvpFnozJTzTvdHSppN9RqfbYPq4z2IAWCvLQbbq2PCTlvTM88QVgyv3-eUOJkfo&usqp=CAU" alt='img' />
                                            </div>
                                        </div>
                                        <div className="avatar w-10 h-10">
                                            <div className="">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOJiLGUkojd7YimbSuTeu_Z5qHSaEgwdo5g&usqp=CAU" alt='img' />
                                            </div>
                                        </div>
                                        <div className="avatar w-10 h-10">
                                            <div className="">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQil7FrsbJlGXeQLBVEDFI8_lBNFFd1kJnxIA&usqp=CAU" alt='img' />
                                            </div>
                                        </div>
                                        <div className="avatar placeholder">
                                            <div className="w-9 h-9 bg-neutral-focus text-neutral-content">
                                                <span>+99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    })
                }
            </section>
        </div>
    );
};

export default Dashboard;