'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/ui/ProgressBar'
import { useProgress } from '@/context/ProgressContext'
import { getCourseById } from '@/lib/services/dataService'
import { formatDuration, getDifficultyColor } from '@/lib/utils/helpers'
import { STRINGS } from '@/constants/strings'
import { ROUTES } from '@/constants/routes'
import { HiBookOpen, HiClock, HiCheckCircle } from 'react-icons/hi'

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { isEnrolled, enrollInCourse, getCourseProgress, isLessonComplete } = useProgress()
  
  const course = getCourseById(params.courseId)

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {STRINGS.ERROR.COURSE_NOT_FOUND}
            </h1>
            <Link href={ROUTES.COURSES} className="btn btn-primary btn-md">
              {STRINGS.COMMON.BACK}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const enrolled = isEnrolled(course.id)
  const progress = enrolled ? getCourseProgress(course.id, course.lessonIds) : 0

  const handleEnroll = () => {
    enrollInCourse(course.id)
    // Navigate to first lesson
    if (course.lessons && course.lessons.length > 0) {
      router.push(ROUTES.LESSON(course.id, course.lessons[0].id))
    }
  }

  const handleContinue = () => {
    // Find first incomplete lesson or first lesson
    const firstIncomplete = course.lessons.find(lesson => !isLessonComplete(lesson.id))
    const targetLesson = firstIncomplete || course.lessons[0]
    if (targetLesson) {
      router.push(ROUTES.LESSON(course.id, targetLesson.id))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
          <div className="container-custom">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="mb-4 text-primary-100">
                <Link href={ROUTES.COURSES} className="hover:text-white">
                  {STRINGS.NAV.COURSES}
                </Link>
                <span className="mx-2">/</span>
                <span>{course.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-xl mb-6 text-primary-100">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`badge ${getDifficultyColor(course.difficulty)} text-base px-4 py-2`}>
                  {course.difficulty}
                </span>
                <div className="flex items-center text-primary-100">
                  <HiBookOpen className="w-5 h-5 mr-2" />
                  {course.lessons.length} {STRINGS.COURSES.LESSONS}
                </div>
                <div className="flex items-center text-primary-100">
                  <HiClock className="w-5 h-5 mr-2" />
                  {formatDuration(course.duration)}
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-semibold">
                  {course.instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Instructor</div>
                  <div className="text-primary-100">{course.instructor.name}</div>
                </div>
              </div>

              {/* Progress (if enrolled) */}
              {enrolled && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <ProgressBar percentage={progress} size="lg" />
                </div>
              )}

              {/* CTA Button */}
              <button
                onClick={enrolled ? handleContinue : handleEnroll}
                className="btn bg-white text-primary-600 hover:bg-gray-100 btn-lg shadow-xl"
              >
                {enrolled ? STRINGS.COURSE_DETAIL.CONTINUE_COURSE : STRINGS.COURSE_DETAIL.ENROLL_NOW}
              </button>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* About */}
                <div className="card p-8 mb-8">
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    {STRINGS.COURSE_DETAIL.OVERVIEW}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {course.longDescription}
                  </p>
                </div>

                {/* Curriculum */}
                <div className="card p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    {STRINGS.COURSE_DETAIL.CURRICULUM}
                  </h2>
                  <div className="space-y-2">
                    {course.lessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center flex-1">
                          <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-4">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                            <p className="text-sm text-gray-600">{lesson.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 ml-4">
                          <span className="text-sm text-gray-500">{formatDuration(lesson.duration)}</span>
                          {enrolled && isLessonComplete(lesson.id) && (
                            <HiCheckCircle className="w-6 h-6 text-green-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Instructor Info */}
                <div className="card p-6 mb-6">
                  <h3 className="text-lg font-heading font-bold mb-4">
                    {STRINGS.COURSE_DETAIL.INSTRUCTOR}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center text-white text-xl font-semibold">
                      {course.instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">{course.instructor.name}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{course.instructor.bio}</p>
                </div>

                {/* Course Includes */}
                <div className="card p-6">
                  <h3 className="text-lg font-heading font-bold mb-4">
                    {STRINGS.COURSE_DETAIL.COURSE_INCLUDES}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <HiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {course.lessons.length} {STRINGS.COURSE_DETAIL.LESSONS_COUNT}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <HiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {course.quizzes.length} {STRINGS.COURSE_DETAIL.QUIZZES_COUNT}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <HiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {STRINGS.COURSE_DETAIL.LIFETIME_ACCESS}
                    </li>
                    <li className="flex items-center text-gray-700">
                      <HiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {STRINGS.COURSE_DETAIL.CERTIFICATE}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
