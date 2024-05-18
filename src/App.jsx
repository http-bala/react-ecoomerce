import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Loginsignup from './pages/Loginsignup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Shop/>}/>
        <Route path='/mens'element={<ShopCategory category="mens"/>}/>
        <Route path='/womens'element={<ShopCategory category="womens"/>}/>
        <Route path='/kids'element={<ShopCategory category="kid"/>}/>
        <Route path='/poduct'element={<Product/>}>
          <Route path=':productId' element={Product}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App