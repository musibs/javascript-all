import React, { useState } from 'react'

export default function ExampleHook() {
    
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You have clicked the button {count} times</p>
            <button onClick={() => setCount(count+1)} >Click Me</button>
        </div>
    )
}
