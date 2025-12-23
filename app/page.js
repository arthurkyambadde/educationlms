import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { getFeaturedCourses, getCourseStats } from "@/lib/services/dataService";
import { STRINGS } from "@/constants/strings";
import { ROUTES } from "@/constants/routes";
import { formatNumber } from "@/lib/utils/helpers";
import { FaBookOpen, FaUserGraduate, FaStar, FaLaptopCode, FaBriefcase, FaPalette, FaChartLine, FaBullhorn, FaLightbulb } from "react-icons/fa6";

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const stats = getCourseStats();

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Eduka Theme */}
        <section className="bg-[#125D63] text-white min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden py-12 md:py-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')]"></div>

          <div className="container-custom relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-[#FFB606] text-white text-sm font-bold mb-4 tracking-wide uppercase">
                  Welcome to {STRINGS.NAV.LOGO}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 leading-tight">
                  {STRINGS.HERO.TITLE}
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-200 leading-relaxed max-w-xl">
                  {STRINGS.HERO.SUBTITLE}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={ROUTES.COURSES}
                    className="bg-[#FFB606] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-[#e0a005] transition-colors shadow-lg text-center uppercase tracking-wide text-sm md:text-base"
                  >
                    {STRINGS.HERO.CTA_PRIMARY}
                  </Link>
                  <Link
                    href={ROUTES.DASHBOARD}
                    className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white hover:text-[#125D63] transition-colors text-center uppercase tracking-wide text-sm md:text-base"
                  >
                    {STRINGS.HERO.CTA_SECONDARY}
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="hidden lg:block relative">
                <div className="absolute -inset-4 bg-[#FFB606] rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative">
                  <Image
                    src="/hero-image.png"
                    alt="Students learning online with Eduka platform"
                    width={550}
                    height={450}
                    priority
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Moved below Hero */}
        <section className="py-12 bg-[#F9F9F9]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-[#FFB606] flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-[#125D63]/10 flex items-center justify-center text-[#125D63] text-3xl">
                  <FaBookOpen className="text-2xl" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#222222]">
                    {formatNumber(stats.totalCourses)}+
                  </div>
                  <div className="text-[#666666] font-medium uppercase tracking-wide text-sm">
                    {STRINGS.HERO.STATS_COURSES}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-[#FFB606] flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-[#125D63]/10 flex items-center justify-center text-[#125D63] text-3xl">
                  <FaUserGraduate className="text-2xl" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#222222]">50K+</div>
                  <div className="text-[#666666] font-medium uppercase tracking-wide text-sm">
                    {STRINGS.HERO.STATS_STUDENTS}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-[#FFB606] flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-[#125D63]/10 flex items-center justify-center text-[#125D63] text-3xl">
                  <FaStar className="text-2xl" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#222222]">95%</div>
                  <div className="text-[#666666] font-medium uppercase tracking-wide text-sm">
                    {STRINGS.HERO.STATS_COMPLETION}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20 bg-[#F9F9F9]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-[#FFB606] font-bold uppercase tracking-wider text-sm mb-2 block">
                Top Class Courses
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#222222] mb-6">
                Featured Courses
              </h2>
              <div className="w-20 h-1 bg-[#125D63] mx-auto mb-6"></div>
              <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                Start learning with our most popular courses selected just for
                you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href={ROUTES.COURSES}
                className="inline-block bg-[#125D63] text-white px-10 py-4 rounded-full font-bold hover:bg-[#0e4b50] transition-colors shadow-lg uppercase tracking-wide"
              >
                {STRINGS.COMMON.VIEW_ALL} {STRINGS.NAV.COURSES}
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-[#FFB606] font-bold uppercase tracking-wider text-sm mb-2 block">
                Categories
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#222222] mb-6">
                Explore by Category
              </h2>
              <div className="w-20 h-1 bg-[#125D63] mx-auto mb-6"></div>
              <p className="text-lg text-[#666666] max-w-2xl mx-auto">
                Find the perfect course for your learning goals
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: STRINGS.CATEGORIES.TECHNOLOGY,
                  icon: FaLaptopCode,
                  color: "from-primary-500 to-primary-600",
                },
                {
                  name: STRINGS.CATEGORIES.BUSINESS,
                  icon: FaBriefcase,
                  color: "from-accent-500 to-accent-600",
                },
                {
                  name: STRINGS.CATEGORIES.DESIGN,
                  icon: FaPalette,
                  color: "from-primary-400 to-primary-500",
                },
                {
                  name: STRINGS.CATEGORIES.DATA_SCIENCE,
                  icon: FaChartLine,
                  color: "from-accent-400 to-accent-500",
                },
                {
                  name: STRINGS.CATEGORIES.MARKETING,
                  icon: FaBullhorn,
                  color: "from-primary-500 to-accent-500",
                },
                {
                  name: STRINGS.CATEGORIES.PERSONAL_DEVELOPMENT,
                  icon: FaLightbulb,
                  color: "from-accent-500 to-primary-500",
                },
              ].map((category) => (
                <Link
                  key={category.name}
                  href={`${ROUTES.COURSES}?category=${encodeURIComponent(
                    category.name
                  )}`}
                  className="card card-hover p-6 text-center group"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
              Join thousands of learners advancing their careers with our
              expert-led courses
            </p>
            <Link
              href={ROUTES.COURSES}
              className="btn btn-primary btn-lg shadow-xl"
            >
              {STRINGS.COMMON.GET_STARTED}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
