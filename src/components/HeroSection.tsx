import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-cream-500 to-cream-700 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/quran-pattern.png')] bg-cover mix-blend-multiply"></div>

            <div className="container mx-auto px-6 py-20 z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-letter ">
                        <span className="typewriter-text block text-deep-purple-700">
                            You were meant to read
                        </span>
                        <span className="text-emerald-600 mt-4 block">
                            the Quran with <span className="text-warm-gold-600">ease</span>.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl  text-deep-purple-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                        The words of Allah should flow from your tongue like gentle water, not feel like a struggle.
                        Our <span className="font-semibold text-emerald-600">personalized guidance</span> makes this possible.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="#enroll"
                            className="px-8 py-4 bg-warm-gold-600 hover:bg-warm-gold-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Begin Your Journey
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="px-8 py-4 bg-transparent border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-medium rounded-full transition-all duration-300"
                        >
                            How It Works
                        </Link>
                    </div>
                </div>

                {/* <div className="mt-20 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-xl">
                        <div className="absolute inset-0 bg-[url('/images/quran-hero.jpg')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-emerald-700/20"></div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div> */}
                <div className="mt-20 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-xl">

                        {/* Base Quran image */}
                        <div className="absolute inset-0 bg-[url('/images/quran-on-stand.jpg')] bg-cover bg-center z-10"></div>

                        {/* Calligraphy swirl overlay */}
                        <div className="absolute inset-0 bg-[url('/images/calligraphy-pattern.jpg')] bg-contain bg-center bg-no-repeat opacity-25 z-20"></div>

                        {/* Parchment texture */}
                        <div className="absolute inset-0 bg-[url('/images/parchment-overlay.jpg')] bg-cover bg-center opacity-20 z-30"></div>

                        {/* Emerald tint for mood */}
                        <div className="absolute inset-0 bg-emerald-700/20 z-40"></div>

                    </div>
                </div>

                {/* Bouncing Down Arrow CTA */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}