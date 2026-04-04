export default function Hero() {
  return (
    <section id="about" className="bg-white border-b border-gray-100 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full mb-6">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          Open to Work — Software Engineer Roles
        </div>

        {/* Avatar */}
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-6">
          BB
        </div>

        {/* Name */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-3">
          Bhumika Banke
        </h1>

        {/* Title */}
        <p className="text-xl text-blue-600 font-medium mb-4">
         Software Engineer
        </p>

        {/* Bio */}
        <p className="text-gray-500 text-base leading-relaxed mb-4 max-w-xl mx-auto">
          BTech CSE final year student from Bhopal, building AI-powered web
applications with React, Next.js & modern tech. I solve real problems
through clean code and thoughtful engineering.
        </p>

        {/* Location */}
        <p className="text-gray-400 text-sm mb-8">
          Bhopal, Madhya Pradesh · CGPA 8.31 · 2026 Passout
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm hover:bg-gray-50 transition-all"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/Bhumika955"
            target="_blank"
            className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm hover:bg-gray-50 transition-all"
          >
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 justify-center">
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-900">3+</div>
            <div className="text-xs text-gray-400 mt-1">Months Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-900">4+</div>
            <div className="text-xs text-gray-400 mt-1">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-gray-900">8.31</div>
            <div className="text-xs text-gray-400 mt-1">CGPA</div>
          </div>
        </div>

      </div>
    </section>
  );
}
