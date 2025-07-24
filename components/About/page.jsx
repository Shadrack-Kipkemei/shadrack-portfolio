import { skills } from '@/constants/skills/page'
import { education } from '@/constants/education/page'


export default function About() {
    return (
        <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 max-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semifold text-gray-900 dark:text-white mb-4">
                            Who I Am
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            I'm a passionate software developer based in Kenya, specializing in building full-stack web applications. 
              With expertise in both frontend and backend technologies, I create efficient, scalable, and user-friendly solutions.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            My journey in tech started with my interest in solving real-world problems through code. 
              I enjoy the entire development process from concept to deployment and always strive to learn new technologies.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                        </p>
                    </div>
                    
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-semifold text-gray-900 dark:text-white mb-4">
                            My Skills
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-semifold text-gray-900 dark:text-white mb-4">
                            Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu) => (
                                <div key={edu.id} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                                    <h4 className="font-medium text-gray-900 dark:text-white">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {edu.duration}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}