import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import User from '../Components/User';
import Blog from '../Components/Blog';
import About from '../Components/About';
import UserDetail from '../Components/UserDetail';



function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/user' element={<User />} >
                <Route path='/user/:name' element={<UserDetail />} />
            </Route> */}

            <Route path='/user' element={<User />} >

            </Route>
            <Route path='/user/:name' element={<UserDetail />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
        </Routes>


    )
}

export default Routing