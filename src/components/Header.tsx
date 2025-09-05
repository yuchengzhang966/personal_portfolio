'use client'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <nav className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-black text-xl font-semibold tracking-tight">
          Jenny(Yucheng) Zhang
        </div>
        
        <ul className="hidden md:flex space-x-8">
          <li>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Work
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </li>
        </ul>

        <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all duration-300">
          Remix
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
} 