import { useState, useEffect } from 'react'

export default function DeBounce() {
    const [search, setSearch] = useState('')
    const [debounceSearch, setDebounceSearch] = useState('')

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceSearch(search);
            console.log('search')
        }, 1000)

        return () => {
            clearTimeout(handler)
        }
    }, [search])

    return (
        <div>
            <input type="text" onInput={(e) => { setSearch(e.target.value) }} />
            <p>Search : {debounceSearch}</p>
        </div>
    )
}
