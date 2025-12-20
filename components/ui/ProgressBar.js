import { getProgressColor } from '@/lib/utils/helpers'

export default function ProgressBar({ percentage, showLabel = true, size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }

  const progressColor = getProgressColor(percentage)

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-gray-900">{percentage}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]} overflow-hidden`}>
        <div
          className={`${progressColor} ${sizeClasses[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
