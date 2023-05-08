import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/Home';
import Plants from '../../pages/Plants/Plants';
import Articles from '../../pages/articles/Articles';
import Blogs from '../../pages/blog/Blog';
import Login from '../../pages/login/Login';
import Subscribe from '../../pages/subscribe/Subscribe';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/plants' element={<Plants />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
    )
}

export default RoutesApp;