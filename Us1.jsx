import React, { useState } from 'react'
function Us1() {
    const [count, setCount] = useState(0)
    function handleCount() {
        setCount(count + 1)
    }
    return (
        <>
            <p>you clicked{count}times</p>
            <button onClick={handleCount}>Click me</button>
        </>
    )
}
export default Us1
