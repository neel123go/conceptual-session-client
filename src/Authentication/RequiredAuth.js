import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiredAuth = () => {
    const location = useLocation();
    const user = true;

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default RequiredAuth;