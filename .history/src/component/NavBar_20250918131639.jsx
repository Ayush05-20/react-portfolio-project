import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll listener for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu with ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // Active section highlight
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-lg' : 'py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent text-glow">
              Ayush
            </span>
            <span className="bg-gradient-to-r from-violet-600 to-sky-400 bg-clip-text text-transparent text-glow-light">
              .me
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors',
                activeSection === item.href.substring(1)
                  ? 'text-sky-400'
                  : 'hover:text-sky-400'
              )}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md z-50"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transform transition-transform duration-300 md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col space-y-8 text-lg">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  'font-medium transition-colors',
                  activeSection === item.href.substring(1)
                    ? 'text-sky-400'
                    : 'hover:text-sky-400'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-8 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
