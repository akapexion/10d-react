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
        <div>
            {data.map( (p) => (
            <div>
                {p.title}
            </div>
            ) )}

        </div>
    </>
  )
}

export default APIIntegration
