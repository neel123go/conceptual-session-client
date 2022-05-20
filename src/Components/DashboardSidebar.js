import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div>
            <div className="drawer drawer-mobile bg-indigo-200">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">
                        <li className='border-l-4 border-primary text-warning hover:bg-primary hover:text-white mb-3 rounded-xl'><NavLink to='/dashboard/add-service' >Add Service</NavLink></li>
                        <li className='border-l-4 border-primary text-warning hover:bg-primary hover:text-white rounded-xl'><NavLink to='/dashboard/add-admin'>Add Admin</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;