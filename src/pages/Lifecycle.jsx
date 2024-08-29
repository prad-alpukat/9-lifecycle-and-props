import { useEffect } from 'react'

export default function Home() {

    // mounting phase
    useEffect(() => {
        // code
        console.log("mounting")
    }, [])

    // updating phase
    useEffect(() => {
        // code
        console.log("updating")
    }, [
        // masukkan state atau props yang akan diawasi
    ])

    // unmounting phase
    useEffect(() => {
        return () => {
            // code
            console.log("unmounting")
        }
    }, [])

    // mounting and unmounting phase
    useEffect(() => {
        // code
        console.log("mounting")

        return () => {
            // code
            console.log("unmounting")
        }
    }, [])

    return (
        <div className='flex items-center justify-center h-screen'>
            <h1 className='text-3xl font-bold'>Home</h1>
        </div>
    )
}
