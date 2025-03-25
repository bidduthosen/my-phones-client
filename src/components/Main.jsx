import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Link  to={'/'}> All phones</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;