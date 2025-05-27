import React from 'react'

const OfferSection = () => {
  return (
    <section id="enroll" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Here&#39;s What You&#39;ll Get When You Join</h2>
          <p className="text-xl text-gray-300">Everything you need to finally read the Quran with confidence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Course Offer */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-emerald-400">The Complete Quran Reading Course</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Full Course Access</span>
                </div>
                <span className="font-bold">$197 value</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Practice Sheets</span>
                </div>
                <span className="font-bold">$47 value</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span>Duas & Consistency Toolkit</span>
                </div>
                <span className="font-bold">$27 value</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Quran Confidence Community</span>
                </div>
                <span className="font-bold">$97 value</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-2">Total Value: <span className="line-through">$368</span></p>
              <p className="text-3xl font-bold text-emerald-400">$97</p>
              <p className="text-sm text-gray-400">One-time payment</p>
            </div>
            
            <a 
              href="#enroll-course" 
              className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg text-center transition duration-300"
            >
              Enroll in Course
            </a>
          </div>
          
          {/* Coaching Offer */}
          <div className="bg-gray-800 rounded-xl p-8 border-2 border-deepPurple-600">
            <h3 className="text-2xl font-bold mb-6 text-center text-deepPurple-400">Personalized Coaching Program</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deepPurple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Everything in the Course</span>
                </div>
                <span className="font-bold">$368 value</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deepPurple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Weekly 1-on-1 Sessions</span>
                </div>
                <span className="font-bold">$400/month value</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deepPurple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>Personalized Feedback</span>
                </div>
                <span className="font-bold">$300/month value</span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-deepPurple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Private Support Channel</span>
                </div>
                <span className="font-bold">$200/month value</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-2">Total Value: <span className="line-through">$1,268+</span></p>
              <p className="text-3xl font-bold text-deepPurple-400">$297/month</p>
              <p className="text-sm text-gray-400">Minimum 3-month commitment</p>
            </div>
            
            <a 
              href="#apply-coaching" 
              className="block w-full bg-deepPurple-600 hover:bg-deepPurple-700 text-white font-bold py-4 px-6 rounded-lg text-center transition duration-300"
            >
              Apply for Coaching
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferSection