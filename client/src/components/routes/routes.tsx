import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Plants from '../../pages/Plants';
import Articles from '../../pages/Articles';
import Blog from '../../pages/Blog';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/plants' element={<Plants />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
    )
}

export default RoutesApp;