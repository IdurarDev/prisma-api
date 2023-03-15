import { BrowserRouter } from 'react-router-dom';

import NavBar from '../NavBar';
import Footer from '../Footer';
import RoutesApp from './routes';

function mainRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <div>
                <RoutesApp />
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default mainRoutes