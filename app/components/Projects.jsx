const projects = [
  {
    name: "TalentAI-Nexus",
    desc: "AI-powered platform to verify fake jobs, prepare company-wise interviews, and practice AI mock interviews. Solves 3 real problems freshers face.",
    tags: ["Next.js", "Groq AI", "Redux", "Tailwind CSS"],
    color: "blue",
    link: "https://github.com/Bhumika955/TalentAI-Nexus",
    featured: true,
  },
  {
    name: "Finance Dashboard",
    desc: "A comprehensive finance tracking dashboard with real-time data visualization and expense management built with TypeScript.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    color: "green",
    link: "https://github.com/Bhumika955/Finance-dashboard-system",
    featured: false,
  },
  {
    name: "Doctor Search",
    desc: "Doctor discovery platform where users can search and filter doctors by specialty and location with appointment booking.",
    tags: ["TypeScript", "React.js", "Tailwind CSS"],
    color: "purple",
    link: "https://github.com/Bhumika955/doctor-search-website",
    featured: false,
  },
  {
    name: "Photo Gallery",
    desc: "A beautiful responsive photo gallery with smooth animations and filtering capabilities.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    color: "orange",
    link: "https://github.com/Bhumika955/photo-gallery",
    featured: false,
  },
];

const colorMap = {
  blue: "bg-blue-50 text-blue-800",
  green: "bg-green-50 text-green-800",
  purple: "bg-purple-50 text-purple-800",
  orange: "bg-orange-50 text-orange-800",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-6 py-16 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            Projects
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Things I have built
          </h2>
          <p className="text-gray-500 text-sm">
            Real problems, real solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              className="bg-white border border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-all block"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full mb-3">
                  Featured Project
                </div>
              )}

              {/* Project Icon */}
              <div className={"w-10 h-10 rounded-lg flex items-center justify-center mb-3 " + colorMap[project.color]}>
                <span className="font-bold text-lg">
                  {project.name[0]}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-gray-900 font-medium text-base mb-2">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <span className="text-blue-600 text-xs">
                View on GitHub →
              </span>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}