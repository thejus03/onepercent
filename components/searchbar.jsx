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
    </div>
  )
}

export default SearchComponent