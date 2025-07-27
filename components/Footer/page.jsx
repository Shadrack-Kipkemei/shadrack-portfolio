import Link from 'next/link'
import { socialLinks } from '@/constants/social/page'


export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Shadrack Kipkemei. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        {socialLinks.map((social) => (
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
                </div>
            </div>
        </footer>
    )
}