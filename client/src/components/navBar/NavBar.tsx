import React from 'react';
import { Link } from 'react-router-dom';
import logo_site from '../../images/logo_site.png';

import { IoIosPerson } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

import '../../css/navBar.css';

function NavBar() {
    return (
        <header>
            <section className='header-top-navbar'>
                <figure>
                    <Link to="/">
                        <img className='logo' src={logo_site} alt="Le logo du site" />
                    </Link>
                </figure>
                <div className='connect'><Link to="/login"><IoIosPerson /></Link></div>
                <div className='search'><Link to="/"><IoMdSearch /></Link></div>
            </section>
            <nav className='navbar-header'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/plants">Plant</Link></li>
                    <li><Link to="/articles">Article</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header >
    )
}

export default NavBar
