import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='my-[10vh]'>
            <div className='h-[10vh]  w-full fixed top-0 left-0 right-0 z-30 bg-white shadow-md clear-both'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
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
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navber;