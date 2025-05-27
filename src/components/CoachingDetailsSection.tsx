import React from 'react'

const CoachingDetailsSection = () => {
    return (
        <section className="py-16 bg-cream-500 text-deepPurple-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Left: Video Placeholder */}
                    <div className="md:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-deep-purple-700">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-6 text-emerald-00">
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Live Tutoring Session</h3>
                                    <p className="mt-2">Personalized 1-on-1 Quran reading instruction</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Want Personal Guidance, Motivation & Feedback?</h2>
                        <p className="text-xl mb-8 text-deepPurple-600">
                            Our coaching program gives you direct access to an experienced Quran teacher who will help you progress faster and avoid common mistakes.
                        </p>

                        <ul className="space-y-6 mb-8">
                            {[
                                {
                                    title: "Weekly or bi-weekly live sessions",
                                    desc: "Regular Zoom meetings tailored to your schedule",
                                },
                                {
                                    title: "Personalized pronunciation correction",
                                    desc: "Get immediate feedback on your recitation",
                                },
                                {
                                    title: "Private WhatsApp/Telegram support",
                                    desc: "Get answers to your questions between sessions",
                                },
                                {
                                    title: "Access to a real human when you're stuck",
                                    desc: "No more frustration with unanswered questions",
                                },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deepPurple-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-deepPurple-500">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-warmGold-100 border-l-4 border-warmGold-600 p-4 mb-6">
                            <div className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warmGold-600 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <p className="font-medium text-warmGold-700">
                                    LIMITED SLOTS – Coaching Only Open Monthly. Apply now to secure your spot.
                                </p>
                            </div>
                        </div>

                        <a
                            href="#coaching"
                            className="inline-block bg-deepPurple-600 hover:bg-deepPurple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
                        >
                            Apply for Coaching
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoachingDetailsSection
