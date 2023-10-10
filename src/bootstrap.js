import App from './App'
import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import "./index.css"

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)