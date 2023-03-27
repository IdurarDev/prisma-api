import { Link } from 'react-router-dom';

import '../../css/navBar.css';

function NavBar() {
    return (
        <header className='navbar-header'>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/plants">Plant</Link></li>
                    <li><Link to="/">Logo</Link></li>
                    <li><Link to="/articles">Article</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/login">Sign in - Sign on</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar