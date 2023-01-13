import React from 'react';
import { useContext } from 'react';
import { FaEye } from "react-icons/fa"
import { HiDocumentText } from "react-icons/hi"
import { Context } from '../../Contexts/Contexts';
import Pagination from '../Pagination/Pagination';

const Table = () => {
    // const [isOpen, setIsOpen] = useState(true)
    const { dark } = useContext(Context)
    return (
        <div className={`${dark ? "bg-[#0F1729] shadow-2xl" : "bg-white"} p-8`}>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead style={{ "background": "white" }}>
                        <tr>
                            <th></th>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Remark</th>
                            <th>Hours</th>
                            <th>Overtime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>Jahid Hasan</td>
                            <td>HR & Admin</td>
                            <td>
                                <div className='bg-[#4AA785] text-center text-white rounded-xl'>
                                    <p>9:45 am</p>
                                </div>
                            </td>
                            <td>
                                <div className='bg-[#4AA785] text-center text-white rounded-xl'>
                                    <p>9:45 am</p>
                                </div>
                            </td>
                            <td><HiDocumentText className='text-2xl text-[#1E2772]' /></td>
                            <td></td>
                            <td></td>
                            <td className='text-2xl text-[#1E2772]'>
                                {/* {isOpen ? <FaEye /> : <FaEyeSlash />} */}
                                <FaEye />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>Jahid Hasan</td>
                            <td>HR & Admin</td>
                            <td>
                                <div className='bg-[#E25959] text-center text-white rounded-xl'>
                                    <p>9:45 am</p>
                                </div>
                            </td>
                            <td>
                                <div className='bg-[#E25959] text-center text-white rounded-xl'>
                                    <p>9:45 am</p>
                                </div>
                            </td>
                            <td><HiDocumentText className='text-2xl text-[#1E2772]' /></td>
                            <td></td>
                            <td></td>
                            <td className='text-2xl text-[#1E2772]'>
                                {/* {isOpen ? <FaEye /> : <FaEyeSlash />} */}
                                <FaEye />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>Jahid Hasan</td>
                            <td>HR & Admin</td>
                            <td>
                                <div className='bg-[#4AA785] text-center text-white rounded-xl'>
                                    <p>9:45 am</p>
                                </div>
                            </td>
                            <td>
                                <div className='bg-[#4AA785] text-center text-white rounded-xl'>
                                    <p>9:45 am</p>
                                </div>
                            </td>
                            <td><HiDocumentText className='text-2xl text-[#1E2772]' /></td>
                            <td></td>
                            <td></td>
                            <td className='text-2xl text-[#1E2772]'>
                                {/* {isOpen ? <FaEye /> : <FaEyeSlash />} */}
                                <FaEye />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* paginations */}
            <Pagination />
        </div>
    );
};

export default Table;