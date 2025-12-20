'use client'

import { STRINGS } from '@/constants/strings'
import { FaBookOpen, FaCircleCheck, FaBullseye, FaClock } from 'react-icons/fa6'

export default function DashboardStats({ stats }) {
  const statCards = [
    {
      label: STRINGS.DASHBOARD.ENROLLED_COURSES,
      value: stats.totalEnrolled,
      icon: <FaBookOpen />,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      label: STRINGS.PROGRESS.LESSONS_COMPLETED,
      value: stats.totalLessonsCompleted,
      icon: <FaCircleCheck />,
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      label: STRINGS.PROGRESS.QUIZZES_PASSED,
      value: stats.quizzesPassed,
      icon: <FaBullseye />,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      label: STRINGS.DASHBOARD.TOTAL_HOURS,
      value: Math.round(stats.totalLessonsCompleted * 0.5), // Estimate 30 min per lesson
      icon: <FaClock />,
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className="card p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center text-2xl`}
            >
              {stat.icon}
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
