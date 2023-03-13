import { Link } from 'react-router-dom';

export const navBar = () => {
    return (
        <header>
            <nav>
                <div>Fawaid aloushoubs</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/plants">Plante</Link></li>
                    <li><Link to="/articles">Article</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>

    )
}
