import React from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaFacebook, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = React.useState(false);
    const handleClick = () => setNav(!nav);

    return (<div
        className="fixed w-full h-[60px] flex justify-between items-center px-4 text-gray-300 bg-emerald-900">
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}}/>
        </div>

        {/*Menu*/}
        <div>
            <ul className='md:flex hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile menus*/}

        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-emerald-900 flex flex-col justify-center items-center'}>
            <li className='py-6 text-1xl uppercase font-semibold'>Home</li>
            <li className='py-6 text-1xl uppercase font-semibold'>About</li>
            <li className='py-6 text-1xl uppercase font-semibold'>Skill</li>
            <li className='py-6 text-1xl uppercase font-semibold'>Services</li>
            <li className='py-6 text-1xl uppercase font-semibold'>Contact</li>
        </ul>

        {/*Social icons*/}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li>
                    <a href="/" >Facebook <FaFacebook/></a>
                </li>
            </ul>
        </div>


    </div>);
};

export default Navbar;