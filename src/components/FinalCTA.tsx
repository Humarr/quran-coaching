export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-deep-purple-600 to-deep-purple-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/quran-pattern-light.png')] bg-repeat"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
            You&#39;ve waited long enough...
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
            Every day you delay is another day without the <span className="font-semibold">joy</span> of connecting 
            with Allah&#39;s words. Take the first step now—your future self will thank you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-warm-gold-500 hover:bg-warm-gold-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Enroll Now - 50% Off Today
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-full transition-all duration-300">
              Speak to a Guide
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 mr-2 animate-pulse text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm font-medium">Offer expires in 23:59:59</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </div>
    </section>
  )
}