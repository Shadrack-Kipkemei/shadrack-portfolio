'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../ThemeToggle/page'
import { socialLinks } from '@constants/social'


const navlinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

export default function Header() {
    const usePathname = usePathname()

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    Shadrack Kipkemei
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    {navlinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${pathname === link.href
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'

                            }`}
                        >
                            {link.name}
                        </Link>

                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <div classname="flex space-x-4">
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