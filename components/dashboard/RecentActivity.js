"use client";

import { useState, useEffect } from "react";
import { STRINGS } from "@/constants/strings";
import {
  FaBookOpen,
  FaBullseye,
  FaUserGraduate,
  FaCheck,
  FaClipboardList,
} from "react-icons/fa6";

export default function RecentActivity({ activities }) {
  if (!activities || activities.length === 0) {
    return (
      <div className="card p-8 text-center">
        <div className="text-4xl mb-3 flex justify-center">
          <FaClipboardList className="text-gray-400" />
        </div>
        <p className="text-gray-600">{STRINGS.EMPTY.NO_PROGRESS_DESC}</p>
      </div>
    );
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "lesson":
        return <FaBookOpen />;
      case "quiz":
        return <FaBullseye />;
      case "course":
        return <FaUserGraduate />;
      default:
        return <FaCheck />;
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getRelativeTime = (dateString) => {
    if (!mounted) return "";

    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) {
      return `${diffMins} ${diffMins === 1 ? "minute" : "minutes"} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
    } else if (diffDays < 7) {
      return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  return (
    <div className="card p-6">
      <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
        {STRINGS.DASHBOARD.RECENT_ACTIVITY}
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl">
              {getActivityIcon(activity.type)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {activity.title}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {activity.courseName}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {getRelativeTime(activity.timestamp)}
              </p>
            </div>

            {/* Status Badge */}
            {activity.status && (
              <div
                className={`flex-shrink-0 px-2 py-1 rounded-full text-xs font-semibold ${
                  activity.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : activity.status === "passed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {activity.status === "completed" && "Completed"}
                {activity.status === "passed" && "Passed"}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
