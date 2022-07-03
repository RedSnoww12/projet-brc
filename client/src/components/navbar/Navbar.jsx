import logo from '../../assets/logo_fd-b.jpg';
import logoAvatar from '../../assets/user.png';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import Footer from '../Footer/footer';


const Navbar = () => {
    return(
        <div className="nav">
            <Link to='/'><a className="navbar_logo">
                <img
                    src={logo}
                    alt="brc Logo"
                    height="150"
                    loading="lazy"
                />
                </a></Link>
                <nav className='nav_contener'>
                <ul className="nav__links">
                    <Link to=''> <li className="nav-item"><a className="nav-link" href="#">Les Raffles</a></li></Link>
                    <li className="nav-item"><a className="nav-link" href="#">Comment Participer ? </a></li>
                </ul>
                </nav>
            
            <div className="right_items">
                <li className="nav-item">
                <Link to='/login'><img
                    src={logoAvatar}
                    className="rounded-circle"
                    height="50"
                    list-style = "none"
                    alt="Customer Profile Picture"
                    loading="lazy"/></Link>
                </li>
        </div>
        </div>       
    );
}

export default Navbar;
