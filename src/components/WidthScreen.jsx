import { useState, useEffect } from 'react'

export default function WidthScreen() {
    const [width, setWidth] = useState(window.innerWidth);

    // mount effect
    useEffect(() => {
        // menambahkan event listener
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })

        return () => {
            // membersihkan event listener
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
        }

    }, [])

    return (
        <div>
            lebar layar
            {width}
        </div>
    )
}
