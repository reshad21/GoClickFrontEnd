import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navber from '../Pages/Shared/Navber/Navber';
import { useTheme } from '../context/ThemeContext';

const Main = () => {

    const { theme } = useTheme();
    return (
        <div data-theme={theme}>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;