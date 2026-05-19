import React, { useEffect, useState } from 'react'

const SideEffects = () => {

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
    console.log("Extra Logic...");
    }, [toggle]);

  return (
    <>
        <p>SideEffects</p>

        <p>{count}</p>

        <button onClick={() => setCount(count+1)}>ADD</button>

        <br /> <br />

        <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  )
}

export default SideEffects
