export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-16 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            Contact
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Let's connect
          </h2>
          <p className="text-gray-500 text-sm">
            Open to frontend developer and SDE roles — fresher friendly!
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center">

          <p className="text-gray-500 text-sm mb-6">
            Feel free to reach out for opportunities, collaborations or just a chat!
          </p>

          {/* Email */}
          <a
            href="mailto:bhumikabanke2509@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all mb-6"
          >
            bhumikabanke2509@gmail.com
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-xs">or connect on</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://linkedin.com/in/bhumika-banke-bb72b6262"
              target="_blank"
              className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              LinkedIn
            </a>
             <a
              href="https://github.com/Bhumika955"
              target="_blank"
              className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
            >
              GitHub
            </a>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-xs mt-8">
          Built with Next.js + Tailwind CSS · Bhumika Banke 2026
        </p>

      </div>
    </section>
  );
}