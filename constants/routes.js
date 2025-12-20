// Route definitions

export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  COURSE_DETAIL: (id) => `/courses/${id}`,
  LESSON: (courseId, lessonId) => `/courses/${courseId}/lessons/${lessonId}`,
  QUIZ: (quizId) => `/quiz/${quizId}`,
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
}

export const API_ROUTES = {
  // Future API endpoints (for backend migration)
  COURSES: '/api/courses',
  LESSONS: '/api/lessons',
  QUIZZES: '/api/quizzes',
  PROGRESS: '/api/progress',
  USER: '/api/user',
}
