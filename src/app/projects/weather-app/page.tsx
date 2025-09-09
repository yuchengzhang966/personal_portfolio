'use client'

import Link from 'next/link'

export default function WeatherAppProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Weather App</h1>
          <Link 
            href="/" 
            className="group flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
        </Link>
        </div>
      </header>

      {/* Weather App Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Weather Forecast
          </h2>
          <p className="text-white/80 text-lg">
            Beautiful weather app with live data
          </p>
        </div>

        {/* Weather Card Example */}
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Today */}
            <div className="text-center">
              <div className="text-6xl mb-4">☀️</div>
              <h3 className="text-white text-xl font-semibold mb-2">Today</h3>
              <p className="text-white/80 text-3xl font-bold mb-1">24°C</p>
              <p className="text-white/60">Sunny</p>
        </div>

            {/* Tomorrow */}
            <div className="text-center">
              <div className="text-6xl mb-4">🌤️</div>
              <h3 className="text-white text-xl font-semibold mb-2">Tomorrow</h3>
              <p className="text-white/80 text-3xl font-bold mb-1">22°C</p>
              <p className="text-white/60">Partly Cloudy</p>
              </div>

            {/* Day After */}
            <div className="text-center">
              <div className="text-6xl mb-4">🌧️</div>
              <h3 className="text-white text-xl font-semibold mb-2">Wednesday</h3>
              <p className="text-white/80 text-3xl font-bold mb-1">18°C</p>
              <p className="text-white/60">Rainy</p>
                    </div>
                </div>
              </div>

        {/* Project Details */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
          <h3 className="text-white text-2xl font-bold mb-4">About This Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Features</h4>
              <ul className="text-white/80 space-y-1">
                <li>• Real-time weather data</li>
                <li>• 7-day forecast</li>
                <li>• Location search</li>
                <li>• Responsive design</li>
              </ul>
                </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Weather API</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
        </div>
        </div>
      </main>
    </div>
  )
}