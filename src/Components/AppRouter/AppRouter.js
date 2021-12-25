import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/NavBar'
import Filtro2 from '../Filtro/Filtro2';
import ContactPage from '../../pages/ContactPage/ContactPage';
import HomePage from '../../pages/HomePage/HomePage.js';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage'
import CartPage from '../../pages/CartPage/CartPage'
import React from "react";
import Filtro from '../Filtro/Filtro';


import Filtrobtn from '../Filtro/Filtrobtn';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Filtrobtn />
            
            <Routes>
                <Route path='/Category/2' element={<Filtro2 />} />
                <Route path='/Category/1' element={<Filtro />} />
               
                <Route path='/products/:id' element={<ItemDetailPage />} />
                            
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
