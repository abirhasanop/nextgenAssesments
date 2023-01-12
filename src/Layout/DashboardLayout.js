import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Slidebar from '../Components/Slidebar/Slidebar';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    {/* <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/">Sidebar Item 1</Link></li>
                        <li><Link to="/attendence">Sidebar Item 2</Link></li>
                    </ul> */}
                    <Slidebar />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;