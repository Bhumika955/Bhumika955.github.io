"use client";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between sticky top-0 z-50">

      <a href="#" className="text-gray-900 font-semibold text-lg">
        Bhumika<span className="text-blue-600">.dev</span>
      </a>

      <div className="hidden md:flex items-center gap-6">
        <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-all">About</a>
        <a href="#skills" className="text-sm text-gray-500 hover:text-gray-900 transition-all">Skills</a>
        <a href="#projects" className="text-sm text-gray-500 hover:text-gray-900 transition-all">Projects</a>
        <a href="#contact" className="text-sm text-gray-500 hover:text-gray-900 transition-all">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          Open to Work
        </div>
        <a href="#contact" className="bg-blue-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          Hire Me
        </a>
      </div>

    </nav>
  );
}