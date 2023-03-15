import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header>
            <nav>
                <section>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/plants">Plant</Link></li>
                        <li><Link to="/">Logo</Link></li>
                        <li><Link to="/articles">Article</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </section>
            </nav>
        </header>
    )
}

export default NavBar