import React from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaFacebook, FaGithub, FaInstagram, FaTimes} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const Navbar = () => {

    const [nav, setNav] = React.useState(false);
    const handleClick = () => setNav(!nav);

    return (<div
        className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 bg-emerald-900 shadow-2xl">
        <div>
            <img src={Logo} alt="Logo" style={{width: '60px'}}/>
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
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-full rounded-l-none'>
                    <a className='flex justify-between items-center w-full text-white' href="/">Facebook <FaFacebook
                        size={30}/></a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] rounded-full rounded-l-none mt-2'>
                    <a className='flex justify-between items-center w-full text-white' href="/">Github <FaGithub
                        size={30}/></a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 rounded-full rounded-l-none mt-2'>
                    <a className='flex justify-between items-center w-full text-white' href="/">E-Mail <HiOutlineMail
                        size={30}/></a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600 rounded-full rounded-l-none mt-2'>
                    <a className='flex justify-between items-center w-full text-white' href="/">Instagram <FaInstagram
                        size={30}/></a>
                </li>
            </ul>
        </div>


    </div>);
};

export default Navbar;