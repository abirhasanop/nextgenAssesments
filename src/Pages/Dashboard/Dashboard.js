import React from 'react';
import { IoIosPeople } from "react-icons/io"
import ExpenceReport from '../../Components/ExpenceReport/ExpenceReport';
import Tasksummery from '../../Components/TaskSummery/Tasksummery';
import ReactToPdf from 'react-to-pdf'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../Contexts/Contexts';
const Dashboard = () => {
    const [status, SetStatus] = useState([])
    const { dark } = useContext(Context)
    const ref = React.createRef();

    const options = {
        // orientation: 'landscape',
        // unit: 'in',
        format: "a4"
    };

    useEffect(() => {
        fetch(`statusData.json`)
            .then(res => res.json())
            .then(data => SetStatus(data))
    }, [])


    return (
        <div className='p-10'>
            <h1 className='text-3xl font-bold mb-10 text-center md:text-start'>Dashboard</h1>
            <p className='font-bold mb-3 text-center md:text-start'>Company Status</p>
            <section className='flex gap-5 flex-wrap justify-center md:justify-start'>
                {
                    status?.map((stat, i) => {
                        const { name, number } = stat
                        return (
                            <section key={i}>
                                <div className={`${dark ? "bg-[#070c16]" : "bg-white"} w-72 h-56 rounded-lg p-6`}>
                                    <div className='flex items-center gap-2 mb-4'>
                                        <IoIosPeople />
                                        <p className='text-[#A5A5A5] font-medium'>{name}</p>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-3xl font-extrabold'>{number}</h1>
                                        <Link to="/coming-soon">
                                            <button className='btn btn-sm bg-[#1E2772] hover:bg-[#25319e] hover:shadow-xl'>View All</button>
                                        </Link>
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
            <div className='flex gap-5 flex-col items-center md:justify-start justify-center md:flex-row'>
                {/* Expence Report Section */}


                <div ref={ref} className=''>
                    <h4 className='font-bold my-10'>Expense Report</h4>
                    <div className={`${dark ? "bg-[#070c16]" : "bg-white"} w-[400px] lg:w-[599px] h-[344px] rounded-2xl p-9`}>
                        <div className='flex justify-between'>
                            <div className='flex gap-3 text-[#A5A5A5] font-semibold'>
                                <a href="#_">Day</a>
                                <a href="#_">Week</a>
                                <a href="#_">Month</a>
                                <a href="#_">Year</a>
                            </div>
                            <ReactToPdf targetRef={ref} filename="expence-report.pdf" options={options} x={45} y={20} scale={0.8}>
                                {({ toPdf }) => (
                                    <button onClick={toPdf} className='btn bg-[#1E2772] hover:shadow-lg hover:bg-[#25319e] btn-sm'>Export Details</button>
                                )}

                            </ReactToPdf>

                        </div>
                        <h1 className='text-3xl font-extrabold mt-2 mb-3'>৳45,000</h1>

                        <ExpenceReport />
                    </div>
                </div>




                {/* Task summary sections */}
                <Tasksummery />
            </div>
        </div>
    );
};

export default Dashboard;