import axios from 'axios';
import React from 'react'

const APIIntegration = () => {

    const fetchAllProducts = async() => {
        try{
            const res = await axios.get("https://dummyjson.com/products");
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }

    fetchAllProducts();


  return (
    <>

    </>
  )
}

export default APIIntegration
