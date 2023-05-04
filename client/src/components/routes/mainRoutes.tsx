import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
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