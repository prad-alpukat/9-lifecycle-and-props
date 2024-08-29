import { useState } from 'react'
import CalculatorA from '../components/CalculatorA'
import CalculatorB from '../components/CalculatorB'

export default function Calculator() {
    const [output, setOutput] = useState(0)

    function increment() {
        setOutput(output + 1)
    }

    function decrement() {
        setOutput(output - 1)
    }

    return (
        <div className='container grid grid-cols-2 min-h-screen'>
            <CalculatorA output={output} gaya="bg-red-200 h-full" />
            <CalculatorB increment={increment}
                decrement={decrement} gaya="bg-blue-200 h-full" />
        </div>
    )
}
