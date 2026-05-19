import axios from 'axios';
import React, { useEffect, useState } from 'react'

const APIIntegration = () => {

    const [data, setData] = useState([]);

    const fetchProductsAPIData = async() => {
        try{
            const response = await axios.get("https://dummyjson.com/products");
            console.log(response.data.products);
            setData(response.data.products);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProductsAPIData();
    }, [])

  return (
    <>  

        <div className="products-header text-center font-bold text-2xl mb-3">
            <p>Products Header</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 px-24 gap-5'>
            {data.map( (p) => (
            <div className='border border-gray-300 shadow-md'>
                <div className="banner">
                    <img src={p.thumbnail} alt="" />
                </div>
                <div className="content p-3">
                    <p>{p.title}</p>
                    <p>{p.price}</p>
                </div>
            </div>
            ) )}

        </div>
    </>
  )
}

export default APIIntegration
