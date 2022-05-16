import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ROUTES } from '../utils/Constants'
import Home from '../pages/home/Home'

const RoutesList = () => {
    return (
        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesList