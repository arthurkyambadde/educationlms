// Helper utility functions

/**
 * Format duration in minutes to human-readable string
 * @param {number} minutes - Duration in minutes
 * @returns {string} Formatted duration
 */
export function formatDuration(minutes) {
  if (minutes < 60) {
    return `${minutes} min`
  }

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (remainingMinutes === 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`
  }

  return `${hours}h ${remainingMinutes}m`
}

/**
 * Calculate progress percentage
 * @param {number} completed - Number of completed items
 * @param {number} total - Total number of items
 * @returns {number} Percentage (0-100)
 */
export function calculateProgress(completed, total) {
  if (total === 0) return 0
  return Math.round((completed / total) * 100)
}

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @param {string} format - Format type ('short', 'long', 'relative')
 * @returns {string} Formatted date
 */
export function formatDate(date, format = 'short') {
  const d = new Date(date)

  if (format === 'relative') {
    return getRelativeTime(d)
  }

  const options = format === 'long'
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'short', day: 'numeric' }

  return d.toLocaleDateString('en-US', options)
}

/**
 * Get relative time string (e.g., "2 days ago")
 * @param {Date} date - Date to compare
 * @returns {string} Relative time string
 */
function getRelativeTime(date) {
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)

  if (diffInSeconds < 60) return 'just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`
  return `${Math.floor(diffInSeconds / 31536000)} years ago`
}

/**
 * Generate a unique ID
 * @returns {string} Unique ID
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Create URL-friendly slug from text
 * @param {string} text - Text to slugify
 * @returns {string} Slug
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Shuffle array (Fisher-Yates algorithm)
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Clamp number between min and max
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 */
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

/**
 * Check if value is empty
 * @param {*} value - Value to check
 * @returns {boolean} True if empty
 */
export function isEmpty(value) {
  if (value == null) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

/**
 * Deep clone an object
 * @param {Object} obj - Object to clone
 * @returns {Object} Cloned object
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} Initials
 */
export function getInitials(name) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Calculate reading time for text
 * @param {string} text - Text content
 * @param {number} wordsPerMinute - Reading speed (default: 200)
 * @returns {number} Reading time in minutes
 */
export function calculateReadingTime(text, wordsPerMinute = 200) {
  const wordCount = text.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Format time remaining for quiz
 * @param {number} seconds - Seconds remaining
 * @returns {string} Formatted time (MM:SS)
 */
export function formatTimeRemaining(seconds) {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/**
 * Get difficulty color class
 * @param {string} difficulty - Difficulty level
 * @returns {string} Tailwind color class
 */
export function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case 'Beginner':
      return 'text-green-600 bg-green-100'
    case 'Intermediate':
      return 'text-yellow-600 bg-yellow-100'
    case 'Advanced':
      return 'text-red-600 bg-red-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

/**
 * Get progress color class
 * @param {number} percentage - Progress percentage
 * @returns {string} Tailwind color class
 */
export function getProgressColor(percentage) {
  if (percentage === 0) return 'bg-gray-300'
  if (percentage < 30) return 'bg-red-500'
  if (percentage < 70) return 'bg-yellow-500'
  if (percentage < 100) return 'bg-blue-500'
  return 'bg-green-500'
}
