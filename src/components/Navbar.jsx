import React from 'react';

// styling file
import './navbar.style.css';

// Images and icons
import Logo from '../assets/logo.PNG';
import { AiOutlineSearch, AiFillHome, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { GrSend } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="nav"> 
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
                <AiOutlineSearch />
            </div>
            <div className="menu__icons">
                <li><AiFillHome /></li>
                <li><GrSend /></li>
                <li><AiOutlineCompass /></li>
                <li><AiOutlineHeart /></li>
                <li><FaUserCircle /></li>
            </div>
        </div>
    )
}

export default Navbar;
