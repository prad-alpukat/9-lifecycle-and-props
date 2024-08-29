import React from 'react'

export default function CalculatorB({ gaya, increment, decrement }) {
    return (
        <div className={gaya}>
            <h1 className='font-bold'>calculator B</h1>
            <p>menampilkan controller calculator</p>

            <div>
                <button onClick={increment} className='bg-blue-500 p-3'>increment</button>
                <button onClick={decrement} className='bg-red-500 p-3'>decrement</button>
            </div>
        </div>
    )
}
