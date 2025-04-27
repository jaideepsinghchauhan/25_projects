import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Header from './components/header'

const ShoppingCart = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default ShoppingCart
