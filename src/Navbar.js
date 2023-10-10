import React from "react"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import CartIcon from "../components/cartIcon.js";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Micro Buysmart
            </Link>
            <ul>
                <CustomLink to="/pre-home">Pre Home</CustomLink>
                <CustomLink to="/search">Search</CustomLink>
                <CustomLink to="/category">Category</CustomLink>
                <CustomLink to="/product">Product</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/shopping-cart">
                    <CartIcon/>
                </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}