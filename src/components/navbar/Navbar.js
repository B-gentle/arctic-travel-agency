import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseCircleLine } from "react-icons/ri";
import logo from './../../assets/logo.png';

const Navbar = () => {

    const [dropDownAction, setdropDownAction] = useState(false);
    
    const displayMenu = ()=> {
        setdropDownAction(true);
    }

    const hideMenu = ()=>{
        setdropDownAction(false)
    }
    return (
            <nav className='navbar'>
                <div className='nav-brand'>
                    <img src={logo} alt='logo'/>
                    <a href='#link'>Arctic Travels</a>
                </div>

                <div className='menu-icon' onClick={displayMenu}>
                    <RiMenu3Line />
                </div>

                <ul className={dropDownAction ? 'nav-list dropdown' : 'nav-list'}>
                    <li><a href='#link'>About Us</a></li>
                    <li><a href='#link'>Support</a></li>
                    <li><a href='#link'>FAQ</a></li>
                    <li className='close-btn' onClick={hideMenu}><RiCloseCircleLine /></li>
                </ul>

                <button>Sign in</button>
            </nav>
    )
}

export default Navbar