import React, { useState } from 'react'

const Counter = () => {

    // state variables here
    const [count, setCount] = useState(5);  // hook function

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

  return (
    <>
        <p>My Current Count is {count}</p>

        <button onClick={handleIncrement} className='bg-blue-600 text-white px-10 py-2'>Increment</button>
        <button onClick={handleDecrement} className='bg-red-600 text-white px-10 py-2'>Decrement</button>
    </>
  )
}

export default Counter
