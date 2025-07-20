'use client'

import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')

        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
    )
}