'use client'

import { useState, useEffect } from 'react';
import Button from './Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add the glass effect when scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <header 
      className={`fixed inset-x-0 top-0 md:top-6 md:max-w-5xl md:mx-auto md:rounded-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}
    >
      <nav className="w-full px-8 py-3 flex justify-between items-center">
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

        <Button />

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