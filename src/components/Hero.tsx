'use client'

import Image from 'next/image'
import type { MouseEvent } from 'react'

export default function Hero() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="mt-20 py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              <span className="block">Write code</span>
              <span className="block">Build products</span>
              <span className="block">Drive business impacts.</span>
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/jenny-yucheng-zhang-a4a51b174/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/yuchengzhang966" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="mailto: jennyyucheng50@gmail.com" 
                aria-label="Email Me"
                className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </a>
            </div>
            
            <a
              href="#work"
              onClick={handleScroll}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 group"
            >
              See My Work
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 16 16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.33333 8H12.6667" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3.33334L12.6667 8L8 12.6667" />
              </svg>
            </a>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <Image
                src="/images/pic_headshot.png"
                alt="Profile Picture"
                width={280}
                height={280}
                className="rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 