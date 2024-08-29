import React from 'react'

export default function CalculatorA({ gaya, output = 0 }) {
    return (
        <div className={gaya}>
            <h1 className='font-bold'>calculator A</h1>
            <p>menampilkan output calculator</p>

            <div className='p-4 border border-black mt-5'>
                <p>output: </p>
                <p>{output}</p>
            </div>
        </div>
    )
}
