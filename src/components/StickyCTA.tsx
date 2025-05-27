'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop
            setIsVisible(scrollPosition > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`hidden lg:block fixed bottom-6 left-0 right-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-full p-3 border border-cream-600">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center pl-4">
                            <div className="bg-emerald-100 text-emerald-800 rounded-full p-2 mr-3">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-cream-700">Limited Time Offer</p>
                                <p className="text-sm text-foreground/80">50% discount ends soon</p>
                            </div>
                        </div>

                        <Link
                            href="#enroll"
                            className="px-6 py-3 bg-warm-gold-600 hover:bg-warm-gold-700 text-white font-bold rounded-full transition-colors duration-300"
                        >
                            Enroll Now - $497 $248
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}