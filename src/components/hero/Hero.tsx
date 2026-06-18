'use client'

import { useState, useCallback } from 'react'
import { HeroSearchProps } from './Hero.types'

/**
 * Client Component for search input with debounced onChange
 * Handles user interaction and search state
 */
export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchPlaceholder = 'Search programs, courses...',
}) => {
  const [searchValue, setSearchValue] = useState('')

  // Debounced search handler (can be enhanced with actual debounce logic)
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    // TODO: Implement actual search functionality
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={searchPlaceholder}
          className="w-full px-6 py-4 rounded-full text-gray-900 bg-white/90 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Search"
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#e84925] text-white text-sm font-semibold rounded-full hover:bg-[#d13f1e] transition-all"
          aria-label="Submit search"
          style={{ fontFamily: 'Futura, sans-serif' }}
        >
          Search
        </button>
      </div>
    </div>
  )
}
