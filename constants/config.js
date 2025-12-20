// Application configuration

export const CONFIG = {
  // App Info
  APP_NAME: 'EduLearn',
  APP_TAGLINE: 'Master New Skills Online',

  // Storage Keys
  STORAGE_KEYS: {
    PROGRESS: 'edulearn_progress',
    USER: 'edulearn_user',
    PREFERENCES: 'edulearn_preferences',
  },

  // Quiz Settings
  QUIZ: {
    PASS_THRESHOLD: 70, // percentage
    DEFAULT_TIME_LIMIT: 30, // minutes
    MAX_ATTEMPTS: 3,
  },

  // Pagination
  PAGINATION: {
    COURSES_PER_PAGE: 12,
    LESSONS_PER_PAGE: 20,
  },

  // Course Settings
  COURSE: {
    MIN_LESSONS_FOR_CERTIFICATE: 5,
    MIN_COMPLETION_FOR_CERTIFICATE: 100, // percentage
  },

  // Categories
  CATEGORIES: [
    'All',
    'Technology',
    'Business',
    'Design',
    'Personal Development',
    'Marketing',
    'Data Science',
  ],

  // Difficulty Levels
  DIFFICULTY_LEVELS: [
    'All',
    'Beginner',
    'Intermediate',
    'Advanced',
  ],

  // Duration Ranges (in minutes)
  DURATION_RANGES: [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under 2 hours', min: 0, max: 120 },
    { label: '2-5 hours', min: 120, max: 300 },
    { label: '5-10 hours', min: 300, max: 600 },
    { label: '10+ hours', min: 600, max: Infinity },
  ],

  // Sort Options
  SORT_OPTIONS: [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'title', label: 'Title (A-Z)' },
  ],
}
