import React from 'react'

const CourseJourneySection = () => {
    const modules = [
        {
            title: "Alphabet & Pronunciation",
            description: "Master each Arabic letter with clear pronunciation guides designed for non-Arabic speakers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            )
        },
        {
            title: "Harakaat & Sounds",
            description: "Learn the vowel movements that bring letters to life and form proper Arabic sounds.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
            )
        },
        {
            title: "Joining Letters into Words",
            description: "Understand how letters connect and change shape in different positions within words.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "Full Verse Practice",
            description: "Apply your skills by reading complete Quranic verses with proper flow and rhythm.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Light Tajweed for Beginners",
            description: "Learn essential Tajweed rules in a simple, practical way without overwhelming theory.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                </svg>
            )
        }
    ]

    return (
        <section className="py-16 bg-white ">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Quran Reading Journey</h2>
                    <p className="text-xl text-gray-600">Step-by-step progression from absolute beginner to confident Quran reader</p>
                </div>

                <div className="max-w-4xl  mx-4">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

                        <div className="space-y-8">
                            {modules.map((module, index) => (
                                <div key={index} className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white transform -translate-x-1/2">
                                        {module.icon}
                                    </div>
                                    <div className="bg-indigo-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                                        <h3 className="text-xl font-bold mb-2 text-indigo-900">{module.title}</h3>
                                        <p className="text-gray-700">{module.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseJourneySection
