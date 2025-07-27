'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../ThemeToggle/page'
import { socialLinks } from '@/constants/social/page'
import { useEffect, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      // If at top of page, set to Home
      if (window.scrollY < 100) {
        setActiveSection('/')
        return
      }

      // Check which section is in view
      const sections = document.querySelectorAll('section[id]')
      let current = activeSection
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = `#${section.id}`
        }
      })
      
      setActiveSection(current)
    }

    // Set initial state and add scroll listener
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  // Check if link is active
  const isActive = (href) => {
    if (href === '/') {
      return activeSection === '/' || (pathname === '/' && activeSection === '/')
    }
    return activeSection === href
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Shadrack Kipkemei
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            {socialLinks.slice(0, 2).map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}