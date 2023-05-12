import React from 'react';
import { Link } from 'react-router-dom';

import logo_site from '../../images/logo_site.png';
import logo_linkedin from '../../images/linkedin.png';

import '../../css/footer.css'

function Footer() {
    return (
        <footer>
            <section className="container-footer">
                <section className="footer-section">
                    <Link className='link-footer' to='/'>
                        <figure>
                            <img className='logo-site-footer' src={logo_site} alt="logo du site en bas de page" />
                        </figure>
                    </Link>
                </section>
                <section className="footer-section">
                    <Link className='link-footer' to='/monsite'>
                        <div>
                            Powered by Idurar & Co. - 2023
                        </div>
                    </Link>
                </section>
                <section className="footer-section">
                    <Link className='link-footer' to='https://www.linkedin.com/in/hamiddev78/' target="_blank">
                        <figure>
                            <img className='logo-linked-footer' src={logo_linkedin} alt="" />
                        </figure>
                    </Link>
                </section>
            </section>
        </footer>
    )
}

export default Footer