"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { STRINGS } from "@/constants/strings";
import { ROUTES } from "@/constants/routes";
import ProgressBar from "@/components/ui/ProgressBar";
import {
  FaLaptopCode,
  FaChartBar,
  FaPalette,
  FaChartLine,
  FaMobileScreen,
  FaStar,
  FaCheck,
} from "react-icons/fa6";

export default function EnrolledCourseCard({ course, progress }) {
  const progressPercentage = progress?.percentage || 0;
  const isCompleted = progressPercentage === 100;
  const [lastAccessed, setLastAccessed] = useState(null);

  useEffect(() => {
    if (progress?.lastAccessed) {
      setLastAccessed(
        new Date(progress.lastAccessed).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      );
    }
  }, [progress?.lastAccessed]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Technology":
        return <FaLaptopCode />;
      case "Business":
        return <FaChartBar />;
      case "Design":
        return <FaPalette />;
      case "Data Science":
        return <FaChartLine />;
      case "Marketing":
        return <FaMobileScreen />;
      default:
        return <FaStar />;
    }
  };

  return (
    <div className="card card-hover overflow-hidden">
      {/* Thumbnail */}
      <div className="relative h-48 bg-primary-50">
        {isCompleted && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg z-10">
            <FaCheck className="text-xs" />
            <span>{STRINGS.DASHBOARD.COMPLETED_COURSES}</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-primary-200">
          {getCategoryIcon(course.category)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
            {course.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-600 mb-4">
          By {course.instructor.name}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {STRINGS.PROGRESS.COURSE_PROGRESS}
            </span>
            <span className="text-sm font-bold text-primary-600">
              {progressPercentage}%
            </span>
          </div>
          <ProgressBar progress={progressPercentage} />
        </div>

        {/* Last Accessed */}
        {lastAccessed && !isCompleted && (
          <p className="text-xs text-gray-500 mb-4">
            Last accessed: {lastAccessed}
          </p>
        )}

        {/* Action Button */}
        <Link
          href={
            progress?.currentLessonId
              ? ROUTES.LESSON(course.id, progress.currentLessonId)
              : ROUTES.COURSE_DETAIL(course.id)
          }
          className={`btn btn-block ${
            isCompleted ? "btn-outline" : "btn-primary"
          }`}
        >
          {isCompleted
            ? STRINGS.COMMON.VIEW_ALL
            : progressPercentage > 0
            ? STRINGS.COURSES.CONTINUE
            : STRINGS.COURSE_DETAIL.START_LEARNING}
        </Link>
      </div>
    </div>
  );
}
