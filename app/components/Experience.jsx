export default function Experience() {
  return (
    <section id="experience" className="bg-white px-6 py-16 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-xs px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
            Work Experience
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Where I have worked
          </h2>
          <p className="text-gray-500 text-sm">
            Real industry exposure during college
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">

          {/* Top Row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-gray-900 font-medium text-base">
                Software Development Engineer Intern
              </h3>
              <p className="text-blue-600 text-sm mt-1">
                LabelLift — Music Distribution & Artist Management
              </p>
            </div>
            <span className="bg-white border border-gray-200 text-gray-500 text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
              Oct 2025 – Jan 2026
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-blue-500 mt-0.5">→</span>
              Built production-grade UI components using React.js, Next.js and Tailwind CSS
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-blue-500 mt-0.5">→</span>
              Integrated 10+ RESTful APIs to fetch real-time financial and wallet transaction data
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-blue-500 mt-0.5">→</span>
              Collaborated with Agile team and managed code using Git and GitHub
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-blue-500 mt-0.5">→</span>
              Implemented feature enhancements and bug fixes in active codebase
            </li>
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {["React.js", "Next.js", "Tailwind CSS", "REST APIs", "Git", "Agile"].map((tag) => (
              <span
                key={tag}
                className="bg-white border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}