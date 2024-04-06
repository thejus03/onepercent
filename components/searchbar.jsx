import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from "use-debounce"
import { universalSearch } from '../utils/supabase/actions'

const SearchComponent = () => {
  const router = useRouter()
  const { replace } = useRouter()
  const [query, setQuery] = useState("")
  const [queryResults, setQueryResults] = useState([])
  const searchParams = useSearchParams()
  const pathname = usePathname();

  const handleRedirect = (redirecturl, redirectsection, event) => {
    const params = new URLSearchParams(searchParams)
    params.set("animate", redirectsection)
    replace(`${redirecturl == 'network' && 'network'}?${params.toString()}`)
    setTimeout(() => {
      const sectionElement = document.getElementById(redirectsection)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000)

  }
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
      setQuery(term)
    } else {
      params.delete("query")
      setQuery('')
    }
    // update URL
    replace(`${pathname}?${params.toString()}`)
  }, 600)

  useEffect(() => {
    const getResults = async (queryTerm) => {
      try {
        const results = await universalSearch(queryTerm)
        setQueryResults(results)
        console.log(results[0].html_id)
      }
      catch (error) {
        console.log("error fetching search results", error)
      }
    }
    getResults(query)

  }, [query])

  return (
    <div className='relative flex flex-col'>
      <input
        id="search"
        name="search"
        className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 focus:outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        type="search"
      />
      {/* display search */}
      <ul className={`absolute left-0 top-8 w-full mt-2 border-gray-300 rounded shadow-md z-10 ${queryResults?.length && 'bg-white border'}`}>
        {queryResults?.length > 0 && queryResults.map((result, i) => (
          <li onClick={() => handleRedirect(result.tag, result.html_id, event)} className='py-2 px-4 hover:bg-gray-100 border-y-[1px] border-grey-100' key={i}>
            <div className='max-w-full'>
              <h4 className='font-bold'>{result.title}</h4>
              <span className='flex flex-wrap max-w-full whitespace-normal text-wrap break-all'>{result.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchComponent