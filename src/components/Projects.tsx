'use client'

import Link from 'next/link'

// Project data - Add new projects here!
const projects = [
  {
    id: 1,
    title: "Paper to Threads n8n",
    description: "An n8n workflow to convert academic papers into engaging Twitter/X threads, making research more accessible.",
    type: "automation",
    gradient: "from-purple-500 to-indigo-600",
    icon: "🤖",
    tags: ["n8n", "Automation", "AI", "OpenAI"],
    link: "https://github.com/yuchengzhang966/paper_to_threads_n8n",
  },

  {
    id: 2,
    title: "COVID-19 Dashboard",
    description: "Interactive data visualization with D3.js",
    type: "dashboard",
    gradient: "from-blue-500 to-cyan-600",
    icon: "📊",
    tags: ["React", "D3.js", "Vite", "Data Viz"],
    link: "https://covid-vaccine-main.vercel.app" // External link to live site
  },
  {
    id: 3,
    title: "Weather App",
    description: "Beautiful weather forecast with maps",
    type: "web",
    gradient: "from-sky-400 to-blue-600",
    icon: "🌤️",
    tags: ["React", "Weather API", "Next.js"],
    link: "/projects/weather-app" // Internal Next.js route
  },
  {
    id: 4,
    title: "Mobile App",
    description: "Cross-platform mobile solution",
    type: "mobile",
    gradient: "from-green-500 to-emerald-600",
    icon: "📱",
    tags: ["React Native", "Expo"],
    link: "#"
  },
  // 🎯 TO ADD A NEW PROJECT: Just copy this template and modify!
  /*
  {
    id: 5,
    title: "Your Project Name",
    description: "Brief description of your project",
    type: "web", // "web", "mobile", "design", "dashboard"
    gradient: "from-blue-500 to-cyan-600", // Any Tailwind gradient
    icon: "💻", // Any emoji or you can add custom SVG logic
    tags: ["Technology1", "Technology2", "Technology3"],
    link: "/projects/your-project" // "/projects/project-name" or "https://external-link.com"
  },
  */
]

export default function Projects() {
  // Custom SVG component for the logo
  const LogoSVG = () => (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" className="mx-auto mb-4" role="img" aria-labelledby="logoTitle">
      <title id="logoTitle">Brand Identity Logo</title>
      <path 
        d="M20 60C20 32 32 20 60 20C88 20 100 32 100 60C100 88 88 100 60 100C32 100 20 88 20 60Z" 
        stroke="#4F46E5" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M100 60C100 32 112 20 140 20C168 20 180 32 180 60C180 88 168 100 140 100C112 100 100 88 100 60Z" 
        stroke="#7C3AED" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M60 20C60 48 72 60 100 60C128 60 140 48 140 20" 
        stroke="#06B6D4" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M60 100C60 72 72 60 100 60C128 60 140 72 140 100" 
        stroke="#06B6D4" 
        strokeWidth="3" 
        fill="none"
      />
    </svg>
  )

  // Dashboard component for the analytics project
/*   const DashboardPreview = () => (
    <div className="max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Summary</h3>
        <span className="text-sm text-gray-500">February 2024</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-2xl font-bold mb-1">120</div>
          <div className="text-sm opacity-90 mb-1">Upcoming Appt.</div>
          <div className="text-xs opacity-75">4 not confirmed</div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
          <div className="text-2xl mb-2">✓</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">72</div>
          <div className="text-sm text-gray-600 mb-1">Finished Appt.</div>
          <div className="text-xs text-green-500 font-semibold">↑ 3.4%</div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="text-2xl font-bold text-gray-900 mb-4">$ 1,023.70</div>
        <div className="h-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  )
 */
  // COVID-19 Map visualization component
  const CovidMapPreview = () => (
    <div className="max-w-sm mx-auto p-4">
      {/* Header with stats */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Global COVID-19 Data</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-xs text-blue-100 mb-1">Total Cases</div>
            <div className="text-sm font-bold text-white">10.05B</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-xs text-blue-100 mb-1">Total Deaths</div>
            <div className="text-sm font-bold text-white">89.7M</div>
          </div>
        </div>
      </div>

      {/* World map using uploaded image */}
      <div className="relative bg-white/5 rounded-xl p-4 backdrop-blur-sm">
        {/* Map image container */}
        <div className="relative w-full h-32 rounded-lg overflow-hidden">
          <img 
            src="/images/map.png" 
            alt="World COVID-19 Data Map"
            className="w-full h-full object-cover opacity-80"
          />
          
          {/* Interactive hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent hover:via-blue-500/10 transition-all duration-300"></div>
        </div>
        
        {/* Color scale reference */}
        <div className="flex justify-center mt-3 mb-2">
          <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
            <div className="flex items-center gap-1 mr-3">
              <div className="w-3 h-2 bg-gradient-to-r from-blue-200 to-blue-900 rounded"></div>
              <span className="text-xs text-white/80">Intensity</span>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-white/80">High</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-white/80">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <span className="text-white/80">Low</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProjectContent = (project: typeof projects[0]) => {
    // Special cases for complex projects
    /* if (project.title === "COVID-19 Dashboard") {
      return (
        <div className="p-8">
          <CovidMapPreview />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-blue-100">{project.description}</p>
          </div>
        </div>
      )
    } */

/*     if (project.type === "dashboard") {
      return (
        <div className="p-8">
          <DashboardPreview />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        </div>
      )
    } */

    if (project.icon === "logo") {
      return (
        <div className="text-center p-6">
          <LogoSVG />
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    }

    // Default project card layout
    return (
      <div className="text-center p-6">
        <div className="text-6xl mb-4">{project.icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>
        <div className="flex gap-2 justify-center flex-wrap">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const ProjectCard = (
              <div
                className={`group bg-gradient-to-br ${project.gradient} rounded-3xl min-h-[400px] flex items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer`}
              >
                {renderProjectContent(project)}
              </div>
            )

            // If project has a link, wrap in appropriate component
            if (project.link && project.link !== "#") {
              // Check if it's an external link (starts with http)
              if (project.link.startsWith('http')) {
                return (
                  <a 
                    key={project.id} 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {ProjectCard}
                  </a>
                )
              } else {
                // Internal Next.js route
                return (
                  <Link key={project.id} href={project.link}>
                    {ProjectCard}
                  </Link>
                )
              }
            }

            // Otherwise return plain div
            return (
              <div key={project.id}>
                {ProjectCard}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 