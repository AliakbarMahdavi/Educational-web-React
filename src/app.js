import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom"

// components
import Menu from './Components/manu';
import Home from './Components/home';
import Product from "./Components/product"
import Contact from "./Components/contact"
import Aboutus from "./Components/aboutus"
import Cart from "./Components/cart"
import Login from "./Components/login"
import NotFound from "./Components/notFound"
import Footer from './Components/footer';
import Signup from './Components/signup';

// context
import CartContextProvider from './context/cartContextProvider';

//css
import Style from "./app.module.css"


const App = () =>{
    
        return (
            <CartContextProvider>
                <Menu/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/product" element={<Product/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/aboutus" element={<Aboutus/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="/notFound" element={<NotFound/>}/>
                        <Route path="/*" element={<Navigate to="/notFound"/>}/>
                    </Routes>

                <Footer/>
            </CartContextProvider>
        );
}

export default App;