// import { useState } from 'react'
// import { useRouter } from 'next/router'

// export default function SearchBar() {
//     const [query, setQuery] = useState('')
//     const router = useRouter()

//     const handleSubmit = (event) => {
//         event.preventDefault()
//       //  if(query.trim() === '') return 
//         if(query.trim()){
//             router.push(`/search?q=${encodeURIComponent(query)}`)
//             setQuery('')
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} className="flex">
//             <input 
//                 type="text"
//                 value={query}
//                 onChange={(event) => setQuery(event.target.value)}
//                 placeholder="Search for news"
//                 className="border border-gray-400 rounded px-4 py-2 w-full focus:outline-none m-1"
//             />
//             <button
//                 type="submit"
//                 className="bg-blue-500 text-white font-semibold rounded rounded-r px-4 py-2 hover:bg-blue-600 focus:outline-none m-1"
//             >
//                 Search
//             </button>
//         </form>
//     )
// }

// import { Typeahead } from 'react-bootstrap-typeahead';
// import 'react-bootstrap-typeahead/css/Typeahead.css';


import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const router = useRouter()
    const handleSubmit = (event) => {
        event.preventDefault()
        //  if(query.trim() === '') return 
        if(query.trim()){
            router.push(`/search?q=${encodeURIComponent(query)}`)
            setQuery('')
        }
    }

    const handleSearch = async (value) => {
        try {
            const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(value)}&apiKey=f0d705cdde7f4416a9c6aaa70d662f50`)
            setResults(data.articles)
        } catch (error) {
            console.error(error)
            setResults([])
        }
    }

    const handleInputChange = (event) => {
        const { value } = event.target
        setQuery(value)

        // Debounce search to reduce API requests
        const debounceId = setTimeout(() => {
            handleSearch(value)
        }, 300)

        return () => {
            clearTimeout(debounceId)
        }
    }

    const handleSelect = (result) => {
        setQuery('')
        setResults([])
        router.push(`/search?q=${encodeURIComponent(result.title)}`)
    }

    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="flex">
                <input 
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for news"
                    className="border border-gray-400 rounded px-4 py-2 w-full focus:outline-none ml-1 mb-1  text-secondary"
                />
                {/* <Typeahead
                    id="search-bar"
                    options={results}
                    value={query}
                    labelKey="title"
                    placeholder="Search for news"
                    onChange={handleInputChange}
                    
                /> */}

                <button
                    type="submit"
                    className="bg-green-500  font-semibold rounded rounded-r px-4 py-2 hover:bg-green-600 focus:outline-none ml-1 mb-1 mr-1"
                >
                    Search
                </button>
            </form>
            {results.length > 0 && (
                <div className="absolute m-1 rounded px-4 py-2  top-full left-0 w-full md:mr-4 sm:m bg-white border border-gray-400 z-10">
                    {results.slice(0,10).map((result) => (
                        <div 
                            key={result.title} 
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSelect(result)}
                        >
                            {result.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
