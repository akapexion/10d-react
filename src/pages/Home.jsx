import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({employmentDetails}) => {
  return (
    <>
      <div>Home Page</div>

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
