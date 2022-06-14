import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../index.css"
import HomePage from './HomePage';
import Pokemon from './Pokemon';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/:name" element={<Pokemon/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App