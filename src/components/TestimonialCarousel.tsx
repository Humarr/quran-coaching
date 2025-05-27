'use client';
import { useState } from 'react'

export default function TestimonialCarousel() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    const testimonials = [
        {
            name: "Aisha Khan",
            role: "Medical Student, Canada",
            content: "After years of failed attempts, I can now read Surah Yasin fluently. My parents cried when they heard me recite during Ramadan.",
            audio: "/audio/aisha-before-after.mp3",
            before: "Struggled with basic letters",
            after: "Now leads family tarawih"
        },
        {
            name: "Omar Farooq",
            role: "Software Engineer, UK",
            content: "The personalized feedback helped me correct mistakes I didn't even know I was making. I went from 20% accuracy to 95% in tajweed rules.",
            audio: "/audio/omar-before-after.mp3",
            before: "Couldn't distinguish similar sounds",
            after: "Received ijazah in Hafs recitation"
        },
        {
            name: "Fatima Abdullah",
            role: "Homemaker, Malaysia",
            content: "As a revert, I felt so behind. The supportive community and Ustadh Ahmad's patience made all the difference. Now I teach my children.",
            audio: "/audio/fatima-before-after.mp3",
            before: "Knew only a few short surahs",
            after: "Memorized Juz Amma with tajweed"
        }
    ]

    return (
        <section className="py-20 bg-warm-gold-700">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream-700 mb-6">
                        Real Transformations
                    </h2>
                    <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
                        Don&#39;t take our word for it—hear from students who&#39;ve walked this path.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden p-8 mb-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl font-serif">
                                    {testimonials[activeTestimonial].name.charAt(0)}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center mb-2">
                                    <h3 className="text-xl font-serif font-bold text-deep-purple-700 mr-3">
                                        {testimonials[activeTestimonial].name}
                                    </h3>
                                    <span className="text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                                        {testimonials[activeTestimonial].role}
                                    </span>
                                </div>
                                <p className="text-warm-gold-700/90 mb-4">
                                    {testimonials[activeTestimonial].content}
                                </p>

                                <div className="flex items-center">
                                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-cream-600 hover:bg-cream-700 transition-colors duration-300 mr-4">
                                        <svg className="w-6 h-6 text-warm-gold-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                                        </svg>
                                    </button>
                                    <div className="text-sm text-warm-gold-700/70">
                                        <p>Before: {testimonials[activeTestimonial].before}</p>
                                        <p>After: {testimonials[activeTestimonial].after}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeTestimonial === index ? 'bg-warm-gold-600' : 'bg-cream-600'
                                    }`}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-cream-600 text-warm-gold-700 p-6 rounded-xl text-center">
                        <div className="text-4xl font-serif font-bold mb-2">30+</div>
                        <p>Students Transformed</p>
                    </div>
                    <div className="bg-cream-600 border border-warm-gold-500/70 text-warm-gold p-6 rounded-xl text-center">
                        <div className="text-4xl font-serif font-bold mb-2">17</div>
                        <p>Years Teaching Experience</p>
                    </div>
                    <div className="bg-warm-gold-600 text-white p-6 rounded-xl text-center">
                        <div className="text-4xl font-serif font-bold mb-2">100%</div>
                        <p>Satisfaction Guarantee</p>
                    </div>
                </div>
            </div>
        </section>
    )
}