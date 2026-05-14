import React from 'react'
import { Link } from 'react-router-dom'
import APIIntegration from '../hooks/APIIntegration'

const Products = () => {
  return (
    <>
      <div>Products Page</div>

      <Link to="/">Go to Home Page</Link>

      <APIIntegration/>
    </>
  )
}

export default Products
