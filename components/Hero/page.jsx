import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { socialLinks } from '@/constants/social/page'

export default function Hero() {
    return (
        <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shadrack</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semifold text-gray-700 dark:text-gray-300 mb-6">Full-Stack Software Developer</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                            Motivated and detail-oriented Software Developer with hands-on experience in building full-stack applications using Python (Flask), JavaScript, React, and SQL.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Link
                                href="#projects"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                            >
                                View My Work 
                            </Link>
                            <Link
                                href="#contact"
                                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                Contact Me 
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-6 w-6" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl">
                            <Image
                                src="/shaddy.jpeg"
                                alt="Shadrack"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}