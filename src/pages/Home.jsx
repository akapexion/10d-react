import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from '../components/Slideshow'

const Home = ({employmentDetails}) => {
  return (
    <>

      <Slideshow/>
      <div className='bg-red-600 text-white'>Home Page</div>

      <h1>{ employmentDetails.name }</h1>
      <h1>{ employmentDetails.emp_id }</h1>
      <h1>{ employmentDetails.age }</h1>

      <Link to="/products">Go to Products Page</Link>

      <br />

      <a href="/products">Go to Products Page through Anchor</a>
    </>
  )
}

export default Home
