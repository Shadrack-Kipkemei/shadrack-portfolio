import { experiences } from '@/constants/experience/page'



export default function Experience() {
    return (
        <section id="experience" className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-8 md:pl-0 md:text-right' : 'md:pl-8 md:pr-0'}`}
                        >
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semifold text-gray-900 dark:text-white">
                                            {exp.position}
                                        </h3>
                                        <span className="text-sm text-blue-600 dark:text-blue-400">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                                        {exp.company} · {exp.location}
                                    </h4>
                                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Timeline dot */}
                            <div className={`absolute top-4 w-3 h-3 rounded-full bg:blue-600 dark:bg-blue-400 ${index % 2 === 0 ? 'left-1 md:left-1/2 md:-ml-1.5' : 'left-1 md:left-1/2 md:-ml-1.5'}`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}