import { useState, useEffect } from 'react'

export default function Home() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("update count", count)
    }, [count])

    return (
        <div className='container py-5'>
            <p>{count}</p>
            <button
                className='bg-blue-500 p-3'
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                increment
            </button>
        </div>
    )
}
