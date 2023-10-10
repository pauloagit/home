import React from "react"
import {Route, Routes} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "../pages/Home";
import PreHomePage from 'prehome/Prehome'
import LoginPage from 'login/Login'
import ShoppingCartPage from 'cart/ShoppingCart'
import SearchPage from 'shop/Search'
import CategoryPage from 'shop/Category'
import ProductPage from 'shop/Product'

import "./index.css";

/*<div className="container">
    <h1 style={{background: 'blue'}}>Home App</h1>
    <PreHomePage/>
    <LoginPage/>
    <ShoppingCartPage/>
    <div style={{borderStyle: "inset", padding: '5px'}}>
        <SearchPage/>
        <CategoryPage/>
        <ProductPage/>
    </div>

</div>*/
const App = () => (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/pre-home" element={<PreHomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/shopping-cart" element={<ShoppingCartPage/>}></Route>
                <Route path="/search" element={<SearchPage/>}></Route>
                <Route path="/category" element={<CategoryPage/>}></Route>
                <Route path="/product" element={<ProductPage/>}></Route>
            </Routes>
        </div>
    </>
);

export default App
