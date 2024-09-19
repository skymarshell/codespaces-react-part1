import React, { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("Type here!")
    return (<>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <h2>You type {value.length} chars</h2>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <p>You clicked {count} Times</p>
    </>)
}