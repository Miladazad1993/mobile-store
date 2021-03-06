import React from 'react';
import { Route, Routes } from 'react-router';
import Footer from './components/footer/footer';
import Home from './components/home.js/Home';
import Navbar from './components/navbar/navbar';
import CartDetail from './components/productDetail/cartDetail';
import ProductDetail from './components/productDetail/productDetail';

const AppRoutes = () => {
    return ( 
        <>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detailProduct/:id" element={<ProductDetail/>} />
                    <Route path="/cartDetail" element={<CartDetail/>} />
                </Routes>
           <Footer />
        </>
     );
}
 
export default AppRoutes;