import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {

  const employeeInfo = {
    emp_id: 12345,
    name : "Ali",
    age : 25
  }


  return (
    <>
        <BrowserRouter>
            
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home employmentDetails = {employeeInfo} />}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>

            <Footer/>

        </BrowserRouter>     
    </>
  )
}

export default App
