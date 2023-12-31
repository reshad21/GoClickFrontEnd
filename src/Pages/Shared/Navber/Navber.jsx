import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

const Navber = () => {
    // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    // const switchTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme)
    // }


    const { theme, switchTheme } = useTheme();

    // data-theme={theme}
    return (
        <div className='mt-[7vh]' data-theme={theme}>
            <div className='h-[10vh]  w-full fixed top-0 left-0 right-0 z-30  shadow-md clear-both'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost normal-case text-xl">GoClick</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to='/manufacturer'>Manufacturer</Link>
                            </li>
                            <li>
                                <Link to='/transporter'>Transporter</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button onClick={switchTheme} className="btn">Toggle</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navber;