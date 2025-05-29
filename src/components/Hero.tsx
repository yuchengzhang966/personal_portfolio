'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToWork = () => {
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
            
            <button 
              onClick={scrollToWork}
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
            </button>
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