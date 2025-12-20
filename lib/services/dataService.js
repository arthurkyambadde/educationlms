// Data access service - abstraction layer for data retrieval

import { courses } from '../data/courses'
import { lessons } from '../data/lessons'
import { quizzes } from '../data/quizzes'

/**
 * Get all courses with optional filtering
 * @param {Object} filters - Filter options
 * @param {string} filters.category - Filter by category
 * @param {string} filters.difficulty - Filter by difficulty level
 * @param {string} filters.search - Search query
 * @returns {Array} Filtered courses
 */
export function getAllCourses(filters = {}) {
  let filteredCourses = [...courses]

  // Filter by category
  if (filters.category && filters.category !== 'All') {
    filteredCourses = filteredCourses.filter(
      course => course.category === filters.category
    )
  }

  // Filter by difficulty
  if (filters.difficulty && filters.difficulty !== 'All') {
    filteredCourses = filteredCourses.filter(
      course => course.difficulty === filters.difficulty
    )
  }

  // Search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filteredCourses = filteredCourses.filter(course =>
      course.title.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  }

  // Sort
  if (filters.sort) {
    switch (filters.sort) {
      case 'title':
        filteredCourses.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'newest':
        filteredCourses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
      case 'popular':
      default:
        // In a real app, this would sort by enrollment count
        break
    }
  }

  return filteredCourses
}

/**
 * Get a single course by ID with its lessons and quizzes
 * @param {string} id - Course ID
 * @returns {Object|null} Course object with lessons and quizzes
 */
export function getCourseById(id) {
  const course = courses.find(c => c.id === id)
  if (!course) return null

  // Get course lessons
  const courseLessons = lessons.filter(l => course.lessonIds.includes(l.id))
  
  // Get course quizzes
  const courseQuizzes = quizzes.filter(q => course.quizIds.includes(q.id))

  return {
    ...course,
    lessons: courseLessons.sort((a, b) => a.order - b.order),
    quizzes: courseQuizzes,
  }
}

/**
 * Get a single lesson by ID with course context
 * @param {string} id - Lesson ID
 * @returns {Object|null} Lesson object with course info
 */
export function getLessonById(id) {
  const lesson = lessons.find(l => l.id === id)
  if (!lesson) return null

  const course = courses.find(c => c.id === lesson.courseId)
  const courseLessons = lessons.filter(l => l.courseId === lesson.courseId)
    .sort((a, b) => a.order - b.order)

  const currentIndex = courseLessons.findIndex(l => l.id === id)
  const previousLesson = currentIndex > 0 ? courseLessons[currentIndex - 1] : null
  const nextLesson = currentIndex < courseLessons.length - 1 ? courseLessons[currentIndex + 1] : null

  return {
    ...lesson,
    course: course ? { id: course.id, title: course.title } : null,
    previousLesson,
    nextLesson,
    totalLessons: courseLessons.length,
    currentLessonNumber: currentIndex + 1,
  }
}

/**
 * Get lessons for a specific course
 * @param {string} courseId - Course ID
 * @returns {Array} Array of lessons
 */
export function getLessonsByCourseId(courseId) {
  return lessons
    .filter(l => l.courseId === courseId)
    .sort((a, b) => a.order - b.order)
}

/**
 * Get a quiz by ID
 * @param {string} id - Quiz ID
 * @returns {Object|null} Quiz object
 */
export function getQuizById(id) {
  const quiz = quizzes.find(q => q.id === id)
  if (!quiz) return null

  const course = courses.find(c => c.id === quiz.courseId)
  const lesson = quiz.lessonId ? lessons.find(l => l.id === quiz.lessonId) : null

  return {
    ...quiz,
    course: course ? { id: course.id, title: course.title } : null,
    lesson: lesson ? { id: lesson.id, title: lesson.title } : null,
  }
}

/**
 * Search courses by query
 * @param {string} query - Search query
 * @returns {Array} Matching courses
 */
export function searchCourses(query) {
  if (!query || query.trim() === '') return courses

  const searchLower = query.toLowerCase()
  return courses.filter(course =>
    course.title.toLowerCase().includes(searchLower) ||
    course.description.toLowerCase().includes(searchLower) ||
    course.longDescription.toLowerCase().includes(searchLower) ||
    course.instructor.name.toLowerCase().includes(searchLower) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
    course.category.toLowerCase().includes(searchLower)
  )
}

/**
 * Get courses by category
 * @param {string} category - Category name
 * @returns {Array} Courses in category
 */
export function getCoursesByCategory(category) {
  if (category === 'All') return courses
  return courses.filter(c => c.category === category)
}

/**
 * Get featured courses (first 6 courses for demo)
 * @returns {Array} Featured courses
 */
export function getFeaturedCourses() {
  return courses.slice(0, 6)
}

/**
 * Get all unique categories
 * @returns {Array} Array of category names
 */
export function getAllCategories() {
  const categories = new Set(courses.map(c => c.category))
  return ['All', ...Array.from(categories).sort()]
}

/**
 * Get course statistics
 * @returns {Object} Statistics object
 */
export function getCourseStats() {
  const totalCourses = courses.length
  const totalLessons = lessons.length
  const totalQuizzes = quizzes.length
  const categories = getAllCategories().length - 1 // Exclude 'All'

  return {
    totalCourses,
    totalLessons,
    totalQuizzes,
    categories,
  }
}
