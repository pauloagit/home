import React from "react";
import PreHomePage from 'prehome/Prehome'
import LoginPage from 'login/Login'
import ShoppingCartPage from 'cart/ShoppingCart'
import SearchPage from 'shop/Search'
import CategoryPage from 'shop/Category'
import ProductPage from 'shop/Product'

import "./index.css";

const App = () => (
    <div className="container">
        <h1 style={{background: 'blue'}}>Home App</h1>
        <PreHomePage/>
        <LoginPage/>
        <ShoppingCartPage/>
        <div style={{borderStyle: "inset", padding: '5px'}}>
            <SearchPage/>
            <CategoryPage/>
            <ProductPage/>
        </div>

    </div>
);

export default App
