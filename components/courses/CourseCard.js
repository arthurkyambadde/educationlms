"use client";

import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";
import { formatDuration, getDifficultyColor } from "@/lib/utils/helpers";
import { STRINGS } from "@/constants/strings";
import { ROUTES } from "@/constants/routes";
import { FaBookOpen, FaClock } from "react-icons/fa6";

export default function CourseCard({ course }) {
  const { isEnrolled, getCourseProgress } = useProgress();
  const enrolled = isEnrolled(course.id);
  const progress = enrolled
    ? getCourseProgress(course.id, course.lessonIds)
    : 0;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      {/* Thumbnail */}
      <div className="relative h-48 bg-[#125D63] overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <div className="text-white text-6xl font-bold opacity-20">
            {course.title.charAt(0)}
          </div>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/90 shadow-sm ${
              course.difficulty === "Beginner"
                ? "text-green-600"
                : course.difficulty === "Intermediate"
                ? "text-[#FFB606]"
                : "text-red-500"
            }`}
          >
            {course.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        <div className="text-xs uppercase tracking-wider text-[#FFB606] font-bold mb-2">
          {course.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-[#222222] mb-3 line-clamp-2 hover:text-[#125D63] transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-[#666666] text-sm mb-5 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center mb-5 pb-5 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-[#125D63] flex items-center justify-center text-white text-sm font-semibold border-2 border-[#FFB606]">
            {course.instructor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="ml-3">
            <p className="text-xs text-gray-500">Instructor</p>
            <span className="text-sm font-semibold text-[#222222]">
              {course.instructor.name}
            </span>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-[#666666] mb-6">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center"
              title={`${course.lessonIds.length} Lessons`}
            >
              <FaBookOpen className="w-4 h-4 mr-1.5 text-[#FFB606]" />
              {course.lessonIds.length}
            </div>
            <div
              className="flex items-center"
              title={`Duration: ${formatDuration(course.duration)}`}
            >
              <FaClock className="w-4 h-4 mr-1.5 text-[#FFB606]" />
              {formatDuration(course.duration)}
            </div>
          </div>
        </div>

        <div className="mt-auto">
          {enrolled ? (
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-[#125D63]">
                  {progress === 100
                    ? STRINGS.COURSES.COMPLETED
                    : STRINGS.COURSES.IN_PROGRESS}
                </span>
                <span className="text-[#FFB606] font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-[#FFB606] h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <Link
                href={ROUTES.COURSE_DETAIL(course.id)}
                className="block w-full text-center mt-4 bg-[#125D63] hover:bg-[#0e4b50] text-white py-2.5 rounded-md font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {STRINGS.COURSES.CONTINUE}
              </Link>
            </div>
          ) : (
            <Link
              href={ROUTES.COURSE_DETAIL(course.id)}
              className="block w-full text-center bg-white border-2 border-[#FFB606] text-[#222222] hover:bg-[#FFB606] hover:text-white py-2.5 rounded-md font-bold transition-all duration-300 text-sm uppercase tracking-wide"
            >
              {STRINGS.COURSES.VIEW_DETAILS}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
