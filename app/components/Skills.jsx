const skills = [
  { name: "React.js", level: "Expert", color: "blue" },
  { name: "Next.js", level: "Expert", color: "blue" },
  { name: "Tailwind CSS", level: "Expert", color: "blue" },
  { name: "JavaScript ES6+", level: "Advanced", color: "blue" },
  { name: "Redux Toolkit", level: "Advanced", color: "purple" },
  { name: "HTML5 / CSS3", level: "Expert", color: "blue" },
  { name: "REST API Integration", level: "Advanced", color: "purple" },
  { name: "Axios / Fetch", level: "Advanced", color: "purple" },
  { name: "Git / GitHub", level: "Advanced", color: "purple" },
  { name: "Firebase", level: "Intermediate", color: "green" },
  { name: "TypeScript", level: "Learning", color: "amber" },
];

const colorMap = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  green: "bg-green-50 text-green-700 border-green-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 px-6 py-16">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            Technical Skills
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            What I work with
          </h2>
          <p className="text-gray-500 text-sm">
            Technologies I use to build production-ready applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-all"
            >
              <p className="text-gray-900 text-sm font-medium mb-1">
                {skill.name}
              </p>
              <span
                className={"text-xs px-2 py-0.5 rounded-full border " + colorMap[skill.color]}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Currently learning TypeScript to strengthen production-level development
        </p>

      </div>
    </section>
  );
}