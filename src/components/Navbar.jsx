import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);


  return (
    <>
      <div className="navbar bg-slate-900 text-white flex justify-between p-4">
        <div id='logo' className='font-extrabold'>
          Brand
        </div>

        <div id='items'>
          <ul className='md:flex hidden gap-10'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>

        <div className='md:hidden block' id='btn'>
          <button onClick={() => setToggle(!toggle)}>
              <Menu />
          </button>
        </div>
      </div>

      <div id='mobile-navbar' className={`text-center bg-slate-900 text-white ${toggle ? "block" : "hidden"}`}>
          <p> <Link to="/">Home</Link> </p>
          <p> <Link to="/products">Products</Link>  </p>
      </div>
    </>
  )
}

export default Navbar
