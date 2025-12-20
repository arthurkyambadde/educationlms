'use client'

import { useState } from 'react'
import { CONFIG } from '@/constants/config'
import { STRINGS } from '@/constants/strings'
import { HiSearch } from 'react-icons/hi'

export default function CourseFilters({ onFilterChange, initialFilters = {} }) {
  const [filters, setFilters] = useState({
    category: initialFilters.category || 'All',
    difficulty: initialFilters.difficulty || 'All',
    search: initialFilters.search || '',
    sort: initialFilters.sort || 'popular',
  })

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setFilters(prev => ({ ...prev, search: value }))
    // Debounce search in real app
    onFilterChange({ ...filters, search: value })
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {STRINGS.COMMON.SEARCH}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={STRINGS.COURSES.SEARCH_PLACEHOLDER}
              value={filters.search}
              onChange={handleSearchChange}
              className="input pl-10"
            />
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {STRINGS.COURSES.FILTER_CATEGORY}
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="input"
          >
            {CONFIG.CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {STRINGS.COURSES.FILTER_DIFFICULTY}
          </label>
          <select
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            className="input"
          >
            {CONFIG.DIFFICULTY_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sort Options */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          {STRINGS.COMMON.SORT}:
        </div>
        <div className="flex space-x-2">
          {CONFIG.SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleFilterChange('sort', option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters.sort === option.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
