import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/Home';
import Plants from '../../pages/Plants/Plants';
import Articles from '../../pages/articles/Articles';
import Blog from '../../pages/blog/Blog';
import Login from '../../pages/login/Login';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/plants' element={<Plants />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default RoutesApp;