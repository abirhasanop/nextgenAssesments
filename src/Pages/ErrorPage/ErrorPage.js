import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center p-16 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    {/* <HandThumbDownIcon className='w-40 h-40 text-green-400' /> */}
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
                            <span className='sr-only'>Error</span>
                            <div className='flex justify-center items-center h-full'>
                                4
                                <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-[#1E2772]'></div>
                                4
                            </div>
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl mb-8 text-gray-500'>
                            Sorry, we couldn't find this page.
                        </p>
                        <Link to='/'>
                            <button className='px-8 btn bg-[#1E2772] hover:bg-[#222d91] hover:shadow-lg py-3 font-semibold rounded'>
                                Back to homepage
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;