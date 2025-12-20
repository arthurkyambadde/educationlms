"use client";

import { useAuth } from "@/context/AuthContext";
import { useProgress } from "@/context/ProgressContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DashboardStats from "@/components/dashboard/DashboardStats";
import EnrolledCourseCard from "@/components/dashboard/EnrolledCourseCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { courses } from "@/lib/data/courses";
import { lessons } from "@/lib/data/lessons";
import { STRINGS } from "@/constants/strings";
import { ROUTES } from "@/constants/routes";
import { FaBookOpen } from "react-icons/fa6";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const {
    progress,
    getLearningStats,
    loading: progressLoading,
  } = useProgress();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [stats, setStats] = useState(null);
  const [filter, setFilter] = useState("all"); // all, in-progress, completed

  useEffect(() => {
    if (!progress) return;

    // Get learning stats
    const learningStats = getLearningStats();
    setStats(learningStats);

    // Get enrolled courses with progress
    const enrolled = progress.enrolledCourses
      .map((courseId) => {
        const course = courses.find((c) => c.id === courseId);
        if (!course) return null;

        const courseProgress = progress.courseProgress[courseId];
        return {
          ...course,
          progress: courseProgress,
        };
      })
      .filter(Boolean)
      .sort((a, b) => {
        // Sort by last accessed (most recent first)
        const aTime = new Date(a.progress?.lastAccessed || 0);
        const bTime = new Date(b.progress?.lastAccessed || 0);
        return bTime - aTime;
      });

    setEnrolledCourses(enrolled);

    // Generate recent activities from completed lessons and quizzes
    const activities = [];

    // Add completed lessons
    progress.completedLessons.slice(-10).forEach((lessonId) => {
      const lesson = lessons.find((l) => l.id === lessonId);
      if (lesson) {
        const course = courses.find((c) => c.id === lesson.courseId);
        activities.push({
          type: "lesson",
          title: `Completed: ${lesson.title}`,
          courseName: course?.title || "Unknown Course",
          timestamp: new Date().toISOString(), // In real app, would store actual completion time
          status: "completed",
        });
      }
    });

    // Add quiz attempts
    Object.entries(progress.quizScores)
      .slice(-5)
      .forEach(([quizId, quizData]) => {
        activities.push({
          type: "quiz",
          title: `Quiz ${quizData.passed ? "Passed" : "Attempted"}`,
          courseName: "Course Quiz",
          timestamp: quizData.lastAttempt,
          status: quizData.passed ? "passed" : "attempted",
        });
      });

    // Sort by timestamp (most recent first)
    activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setRecentActivities(activities.slice(0, 10));
  }, [progress, getLearningStats]);

  // Filter courses
  const filteredCourses = enrolledCourses.filter((course) => {
    if (filter === "in-progress") {
      return (
        course.progress?.percentage > 0 && course.progress?.percentage < 100
      );
    } else if (filter === "completed") {
      return course.progress?.percentage === 100;
    }
    return true;
  });

  const coursesInProgress = enrolledCourses.filter(
    (c) => c.progress?.percentage > 0 && c.progress?.percentage < 100
  );

  if (authLoading || progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">{STRINGS.LOADING.PLEASE_WAIT}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Sign In Required
            </h1>
            <p className="text-gray-600 mb-6">
              Please sign in to view your dashboard
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="container-custom">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
              {STRINGS.DASHBOARD.WELCOME}, {user.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-gray-600">
              {STRINGS.DASHBOARD.CONTINUE_LEARNING}
            </p>
          </div>

          {/* Stats Cards */}
          {stats && (
            <div className="mb-8">
              <DashboardStats stats={stats} />
            </div>
          )}

          {/* Empty State - No Enrolled Courses */}
          {enrolledCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4 flex justify-center text-gray-400">
                <FaBookOpen />
              </div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                {STRINGS.EMPTY.NO_ENROLLMENTS}
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {STRINGS.EMPTY.NO_ENROLLMENTS_DESC}
              </p>
              <Link href={ROUTES.COURSES} className="btn btn-primary btn-lg">
                {STRINGS.EMPTY.BROWSE_COURSES}
              </Link>
            </div>
          )}

          {/* Continue Learning Section */}
          {coursesInProgress.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {STRINGS.DASHBOARD.CONTINUE_LEARNING}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesInProgress.slice(0, 3).map((course) => (
                  <EnrolledCourseCard
                    key={course.id}
                    course={course}
                    progress={course.progress}
                  />
                ))}
              </div>
            </div>
          )}

          {/* My Courses Section */}
          {enrolledCourses.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-heading font-bold text-gray-900">
                  {STRINGS.DASHBOARD.MY_COURSES}
                </h2>

                {/* Filter Tabs */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === "all"
                        ? "bg-primary-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    All ({enrolledCourses.length})
                  </button>
                  <button
                    onClick={() => setFilter("in-progress")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === "in-progress"
                        ? "bg-primary-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {STRINGS.DASHBOARD.IN_PROGRESS} ({coursesInProgress.length})
                  </button>
                  <button
                    onClick={() => setFilter("completed")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === "completed"
                        ? "bg-primary-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {STRINGS.DASHBOARD.COMPLETED_COURSES} (
                    {
                      enrolledCourses.filter(
                        (c) => c.progress?.percentage === 100
                      ).length
                    }
                    )
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <EnrolledCourseCard
                    key={course.id}
                    course={course}
                    progress={course.progress}
                  />
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="card p-8 text-center">
                  <p className="text-gray-600">No courses in this category</p>
                </div>
              )}
            </div>
          )}

          {/* Recent Activity */}
          {enrolledCourses.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {STRINGS.DASHBOARD.RECENT_ACTIVITY}
              </h2>
              <RecentActivity activities={recentActivities} />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
