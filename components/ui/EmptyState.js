import Link from 'next/link'
import { HiAcademicCap, HiBookOpen, HiLightBulb } from 'react-icons/hi'
import { STRINGS } from '@/constants/strings'

export default function EmptyState({
  title = STRINGS.EMPTY.NO_RESULTS,
  description,
  actionText,
  actionHref,
  icon = 'search',
}) {
  const icons = {
    search: <HiLightBulb className="w-16 h-16" />,
    courses: <HiBookOpen className="w-16 h-16" />,
    progress: <HiAcademicCap className="w-16 h-16" />,
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-gray-300 mb-4">{icons[icon] || icons.search}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-6 max-w-md">{description}</p>
      )}
      {actionText && actionHref && (
        <Link href={actionHref} className="btn btn-primary btn-md">
          {actionText}
        </Link>
      )}
    </div>
  )
}
