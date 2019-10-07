import React, { useState, useEffect } from 'react'

export default function EffectHook() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You have updated ${count} times`;
    });

    return (
        <div>
            <p>You have clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click Me</button>
        </div>
    )
}
