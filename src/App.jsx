import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import Lifecycle from './pages/Lifecycle'
import About from './pages/About'
import Products from './pages/Products'
import Calculator from './pages/Calculator'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  )
}
