'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import * as progressService from '@/lib/services/progressService'

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load progress on mount
  useEffect(() => {
    const loadProgress = () => {
      const userProgress = progressService.getProgress()
      setProgress(userProgress)
      setLoading(false)
    }

    loadProgress()
  }, [])

  // Enroll in a course
  const enrollInCourse = (courseId) => {
    progressService.enrollInCourse(courseId)
    setProgress(progressService.getProgress())
  }

  // Check if enrolled
  const isEnrolled = (courseId) => {
    return progressService.isEnrolled(courseId)
  }

  // Mark lesson as complete
  const markLessonComplete = (lessonId, courseId) => {
    progressService.markLessonComplete(lessonId, courseId)
    setProgress(progressService.getProgress())
  }

  // Check if lesson is complete
  const isLessonComplete = (lessonId) => {
    return progressService.isLessonComplete(lessonId)
  }

  // Save quiz score
  const saveQuizScore = (quizId, score, passed, answers) => {
    progressService.saveQuizScore(quizId, score, passed, answers)
    setProgress(progressService.getProgress())
  }

  // Get quiz score
  const getQuizScore = (quizId) => {
    return progressService.getQuizScore(quizId)
  }

  // Get course progress
  const getCourseProgress = (courseId, lessonIds) => {
    return progressService.getCourseProgress(courseId, lessonIds)
  }

  // Get enrolled courses
  const getEnrolledCourses = () => {
    return progressService.getEnrolledCourses()
  }

  // Update last accessed lesson
  const updateLastAccessedLesson = (courseId, lessonId) => {
    progressService.updateLastAccessedLesson(courseId, lessonId)
    setProgress(progressService.getProgress())
  }

  // Get learning stats
  const getLearningStats = () => {
    return progressService.getLearningStats()
  }

  // Reset progress
  const resetProgress = () => {
    progressService.resetProgress()
    setProgress(progressService.getProgress())
  }

  const value = {
    progress,
    loading,
    enrollInCourse,
    isEnrolled,
    markLessonComplete,
    isLessonComplete,
    saveQuizScore,
    getQuizScore,
    getCourseProgress,
    getEnrolledCourses,
    updateLastAccessedLesson,
    getLearningStats,
    resetProgress,
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
