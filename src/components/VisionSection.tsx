export default function VisionSection() {
  return (
    <section className="py-20 bg-warm-gold-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-emerald-100">
                {/* Placeholder for before/after video */}
                <div className="absolute inset-0 flex items-center justify-center bg-[url('/images/quran-learning.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-deep-purple-700"></div>
                  <button className="z-10 w-16 h-16 bg-warm-gold-500 rounded-full flex items-center justify-center hover:bg-warm-gold-600 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream-500 mb-6">
              What if learning felt like being guided?
            </h2>

            <p className="text-xl text-foreground/90 mb-8">
              Imagine opening the Quran and feeling <span className="font-semibold text-warm-gold-700 bg-cream-500 px-1 py-0.5 rounded-lg">confidence</span> instead of hesitation.
              Our method transforms your relationship with the Quran through:
            </p>

            <ul className="space-y-4 text-cream-500">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-cream-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-lg">Personalized feedback from native Arabic instructors</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-cream-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-lg">Proven techniques that make complex rules intuitive</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-cream-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-lg">A supportive community of learners at your level</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4 text-cream-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-lg">Flexible learning that fits your schedule</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}