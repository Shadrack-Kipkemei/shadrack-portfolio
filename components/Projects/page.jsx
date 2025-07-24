import Link from 'next/link'
import { projects } from '@/constants/projects/page'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'



export default function Projects() {
    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                                        {project.title.charAt(0)}
                                    </span>
                                )}
                            </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semifold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-3">
                                        {project.githubUrl && (
                                            <Link
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                <FaGithub className="mr-1" /> Code
                                            </Link>
                                        )}
                                        {project.liveUrl && (
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                <FaExternalLinkAlt className="mr-1" /> Live Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}