import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import Index from '../Layout/Defaultlayout/Index'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Index />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Blog' element={<Blog />} />
                        <Route path='/Service' element={<Service />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing
