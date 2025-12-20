'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CourseCard from '@/components/courses/CourseCard'
import CourseFilters from '@/components/courses/CourseFilters'
import EmptyState from '@/components/ui/EmptyState'
import { getAllCourses } from '@/lib/services/dataService'
import { STRINGS } from '@/constants/strings'
import { ROUTES } from '@/constants/routes'

export default function CoursesPage() {
  const [filters, setFilters] = useState({})
  const courses = getAllCourses(filters)

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
              {STRINGS.COURSES.TITLE}
            </h1>
            <p className="text-xl text-gray-600">
              {STRINGS.COURSES.SUBTITLE}
            </p>
          </div>

          {/* Filters */}
          <CourseFilters onFilterChange={handleFilterChange} initialFilters={filters} />

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{courses.length}</span> courses
            </p>
          </div>

          {/* Course Grid */}
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <EmptyState
              title={STRINGS.EMPTY.NO_COURSES}
              description={STRINGS.EMPTY.NO_COURSES_DESC}
              icon="search"
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
