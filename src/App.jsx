import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Counter from './hooks/Counter'
import Toggle from './hooks/Toggle'

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
                <Route path="/counter" element={<Counter/>}/>
                <Route path="/toggle" element={<Toggle/>}/>
            </Routes>

            <Footer/>

        </BrowserRouter>     
    </>
  )
}

export default App
