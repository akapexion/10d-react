import React, { useState } from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);

        console.log(toggle);
    }

  return (
    <>
        <p>Toggle</p>

        <button onClick={handleToggle}>Toggle BTN</button>

        <ul className={`${toggle ? "block" : "hidden"}`}>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </>
  )
}

export default Toggle
