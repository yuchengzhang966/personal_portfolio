'use client'

import React from 'react'
import Link from 'next/link'

// Project data - Add new projects here!
const projects = [
  {
    id: 1,
    title: "Paper to Threads n8n",
    description: "An n8n workflow to convert academic papers into engaging Twitter/X threads, making research more accessible.",
    type: "automation",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: "🤖",
    tags: ["n8n", "Automation", "AI", "OpenAI"],
    link: "https://github.com/yuchengzhang966/paper_to_threads_n8n",
  },

  {
    id: 2,
    title: "COVID-19 Dashboard",
    description: "Interactive data visualization with D3.js",
    type: "dashboard",
    gradient: "from-cyan-500 to-blue-500",
    icon: "📊",
    tags: ["React", "D3.js", "Vite", "Data Viz"],
    link: "https://covid-vaccine-main.vercel.app" // External link to live site
  },
  {
    id: 3,
    title: "GoBuddy AI",
    description: "An AI-powered voice assistant for business travelers, providing seamless airport navigation, real-time transport options, and personalized local guidance.",
    type: "mobile",
    gradient: "from-sky-500 to-indigo-500",
    icon: "✈️",
    tags: ["AI", "Voice Assistant", "Travel Tech", "Mobile App"],
    link: "https://gobuddyai.com/",
  },
  {
    id: 4,
    title: "PDF to Branded PowerPoint Converter",
    description: "A Python tool that converts PDF presentations into professionally branded PowerPoints, using AI to extract content and apply custom templates.",
    type: "automation",
    gradient: "from-orange-400 to-rose-400",
    icon: "🖼️",
    tags: ["Python", "OpenAI", "AI", "Automation"],
    link: "https://github.com/yuchengzhang966/ppt",
  },
  {
    id: 5,
    title: "Ethereum Big Data Analysis",
    description: "An analysis of the Ethereum ecosystem using Hadoop and Spark to find correlations between ETH price, NFT sales, and Twitter activity.",
    type: "dashboard",
    gradient: "from-purple-600 via-slate-800 to-indigo-600",
    icon: "📈",
    tags: ["Hadoop", "Spark", "Big Data", "Scala"],
    link: "https://github.com/yuchengzhang966/BigDataEther",
  },
  {
    id: 6,
    title: "Reversi Game",
    description: "A multiplayer web-based Reversi game where users can compete, view rankings, and spectate matches. Features user authentication, bot opponents, and game history.",
    type: "web",
    gradient: "from-green-400 to-teal-500",
    icon: "🎮",
    tags: ["React", "Node.js", "MongoDB", "Redis", "WebSockets"],
    link: "https://reversi.pro",
  },
  {
    id: 7,
    title: "SageArk.io",
    description: "Led the end-to-end development of a comprehensive Learning Management System (LMS) for modern educational needs.",
    type: "web",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🎓",
    tags: ["LMS", "Full-Stack", "EdTech", "React", "Node.js"],
    link: "https://sageark.io",
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

type Project = typeof projects[0];

// Helper components defined outside the main component to prevent re-declaration on each render.

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
);

const renderProjectContent = (project: Project) => {
    if (project.icon === "logo") {
      return (
        <div className="relative z-10 text-center p-6">
          <LogoSVG />
          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="flex gap-2 justify-center flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    }

    // Default project card layout
    return (
      <div className="relative z-10 text-center p-6">
        <div className="text-6xl mb-4">{project.icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>
        <div className="flex gap-2 justify-center flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )
  };

export default function Projects() {
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
            const isInteractive = project.link && project.link !== "#";
            const ProjectCard = (
              <div
                className={`group relative bg-gradient-to-br ${project.gradient} rounded-3xl min-h-[400px] flex items-center justify-center transform transition-all duration-300 overflow-hidden ${isInteractive ? 'hover:-translate-y-2 hover:scale-105 cursor-pointer' : ''}`}
              >
                {/* Matte overlay layer */}
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10"></div>
                {renderProjectContent(project)}
              </div>
            )

            // If project has a link, wrap in appropriate component
            if (isInteractive) {
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