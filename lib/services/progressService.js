// Progress tracking service - manages localStorage for user progress

import { CONFIG } from '@/constants/config'

const STORAGE_KEY = CONFIG.STORAGE_KEYS.PROGRESS

/**
 * Get initial progress state
 * @returns {Object} Initial progress object
 */
function getInitialProgress() {
  return {
    userId: 'demo-user', // Simulated user ID
    enrolledCourses: [],
    completedLessons: [],
    quizScores: {},
    courseProgress: {},
    lastUpdated: new Date().toISOString(),
  }
}

/**
 * Load progress from localStorage
 * @returns {Object} Progress object
 */
export function getProgress() {
  if (typeof window === 'undefined') return getInitialProgress()

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return getInitialProgress()
    
    const progress = JSON.parse(stored)
    return progress
  } catch (error) {
    console.error('Error loading progress:', error)
    return getInitialProgress()
  }
}

/**
 * Save progress to localStorage
 * @param {Object} progress - Progress object to save
 */
export function saveProgress(progress) {
  if (typeof window === 'undefined') return

  try {
    const updatedProgress = {
      ...progress,
      lastUpdated: new Date().toISOString(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProgress))
  } catch (error) {
    console.error('Error saving progress:', error)
  }
}

/**
 * Enroll in a course
 * @param {string} courseId - Course ID
 */
export function enrollInCourse(courseId) {
  const progress = getProgress()
  
  if (!progress.enrolledCourses.includes(courseId)) {
    progress.enrolledCourses.push(courseId)
    progress.courseProgress[courseId] = {
      percentage: 0,
      lastAccessed: new Date().toISOString(),
      currentLessonId: null,
      enrolledAt: new Date().toISOString(),
    }
    saveProgress(progress)
  }
}

/**
 * Check if enrolled in a course
 * @param {string} courseId - Course ID
 * @returns {boolean} True if enrolled
 */
export function isEnrolled(courseId) {
  const progress = getProgress()
  return progress.enrolledCourses.includes(courseId)
}

/**
 * Mark a lesson as complete
 * @param {string} lessonId - Lesson ID
 * @param {string} courseId - Course ID
 */
export function markLessonComplete(lessonId, courseId) {
  const progress = getProgress()
  
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
  }

  // Update course progress
  if (courseId && progress.courseProgress[courseId]) {
    progress.courseProgress[courseId].lastAccessed = new Date().toISOString()
  }

  saveProgress(progress)
}

/**
 * Check if a lesson is complete
 * @param {string} lessonId - Lesson ID
 * @returns {boolean} True if complete
 */
export function isLessonComplete(lessonId) {
  const progress = getProgress()
  return progress.completedLessons.includes(lessonId)
}

/**
 * Save quiz score
 * @param {string} quizId - Quiz ID
 * @param {number} score - Score percentage
 * @param {boolean} passed - Whether the quiz was passed
 * @param {Array} answers - User's answers
 */
export function saveQuizScore(quizId, score, passed, answers = []) {
  const progress = getProgress()
  
  const existingAttempts = progress.quizScores[quizId]?.attempts || 0
  
  progress.quizScores[quizId] = {
    score,
    passed,
    attempts: existingAttempts + 1,
    lastAttempt: new Date().toISOString(),
    answers,
  }

  saveProgress(progress)
}

/**
 * Get quiz score
 * @param {string} quizId - Quiz ID
 * @returns {Object|null} Quiz score object
 */
export function getQuizScore(quizId) {
  const progress = getProgress()
  return progress.quizScores[quizId] || null
}

/**
 * Calculate course progress percentage
 * @param {string} courseId - Course ID
 * @param {Array} lessonIds - Array of lesson IDs in the course
 * @returns {number} Progress percentage (0-100)
 */
export function getCourseProgress(courseId, lessonIds = []) {
  const progress = getProgress()
  
  if (lessonIds.length === 0) return 0

  const completedCount = lessonIds.filter(id =>
    progress.completedLessons.includes(id)
  ).length

  const percentage = Math.round((completedCount / lessonIds.length) * 100)

  // Update stored progress
  if (progress.courseProgress[courseId]) {
    progress.courseProgress[courseId].percentage = percentage
    saveProgress(progress)
  }

  return percentage
}

/**
 * Get all enrolled courses
 * @returns {Array} Array of enrolled course IDs
 */
export function getEnrolledCourses() {
  const progress = getProgress()
  return progress.enrolledCourses
}

/**
 * Get courses in progress (enrolled but not 100% complete)
 * @param {Array} courses - Array of course objects
 * @returns {Array} Courses in progress with progress data
 */
export function getCoursesInProgress(courses) {
  const progress = getProgress()
  
  return progress.enrolledCourses
    .map(courseId => {
      const course = courses.find(c => c.id === courseId)
      if (!course) return null

      const progressData = progress.courseProgress[courseId]
      if (!progressData || progressData.percentage === 100) return null

      return {
        ...course,
        progress: progressData,
      }
    })
    .filter(Boolean)
}

/**
 * Get completed courses
 * @param {Array} courses - Array of course objects
 * @returns {Array} Completed courses
 */
export function getCompletedCourses(courses) {
  const progress = getProgress()
  
  return progress.enrolledCourses
    .map(courseId => {
      const course = courses.find(c => c.id === courseId)
      if (!course) return null

      const progressData = progress.courseProgress[courseId]
      if (!progressData || progressData.percentage < 100) return null

      return {
        ...course,
        progress: progressData,
      }
    })
    .filter(Boolean)
}

/**
 * Update last accessed lesson for a course
 * @param {string} courseId - Course ID
 * @param {string} lessonId - Lesson ID
 */
export function updateLastAccessedLesson(courseId, lessonId) {
  const progress = getProgress()
  
  if (progress.courseProgress[courseId]) {
    progress.courseProgress[courseId].currentLessonId = lessonId
    progress.courseProgress[courseId].lastAccessed = new Date().toISOString()
    saveProgress(progress)
  }
}

/**
 * Get learning statistics
 * @returns {Object} Statistics object
 */
export function getLearningStats() {
  const progress = getProgress()
  
  const totalEnrolled = progress.enrolledCourses.length
  const totalLessonsCompleted = progress.completedLessons.length
  const totalQuizzesTaken = Object.keys(progress.quizScores).length
  const quizzesPassed = Object.values(progress.quizScores).filter(q => q.passed).length

  return {
    totalEnrolled,
    totalLessonsCompleted,
    totalQuizzesTaken,
    quizzesPassed,
  }
}

/**
 * Reset all progress (for demo/testing)
 */
export function resetProgress() {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem(STORAGE_KEY)
}
