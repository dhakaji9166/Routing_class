import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import User from '../Components/User';
import Blog from '../Components/Blog';
import About from '../Components/About';



function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
        </Routes>


    )
}

export default Routing