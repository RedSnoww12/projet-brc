import logo from '../../assets/logo_fd-b.jpg';
import logoAvatar from '../../assets/user.png';
import React, { useState } from 'react';
import './navbar.css';


const Navbar = () => {
    return(
        <div class="nav">
            <a class="navbar_logo" href="#">
                <img
                    src={logo}
                    alt="brc Logo"
                    height="150"
                    loading="lazy"
                />
                </a>  
                <nav class='nav_contener'>
                <ul class="nav__links">
                    <li class="nav-item"><a class="nav-link" href="#">Les Raffles</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Comment Participer ? </a></li>
                </ul>
                </nav>
            
            <div class="right_items">
                <li class="nav-item">
                <img
                    src={logoAvatar}
                    class="rounded-circle"
                    height="50"
                    list-style = "none"
                    alt="Customer Profile Picture"
                    loading="lazy"/>
                </li>
        </div>
        </div>       
    );
}

export default Navbar;
