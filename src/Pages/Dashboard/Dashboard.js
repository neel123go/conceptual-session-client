import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../Components/DashboardSidebar';

const Dashboard = () => {
    return (
        <DashboardSidebar>
            <div className='h-screen w-full p-5'>
                <h2 className='text-3xl text-left mb-2'>Welcome to Dashboard</h2>
                <Outlet />
            </div>
        </DashboardSidebar>
    );
};

export default Dashboard;