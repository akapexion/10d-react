import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-slate-900 text-white flex justify-between p-4">
        <div id='logo' className='font-extrabold'>
          Brand
        </div>

        <div id='items'>
          <ul className='flex gap-10'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>

        <div id='btn'>
          <button>Signin</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
