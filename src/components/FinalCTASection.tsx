import React from 'react'
import Link from 'next/link'

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">You&#39;ve Waited Long Enough</h2>
          
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t-2 border-emerald-600 border-dashed"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-emerald-800 text-xl font-semibold">The Choice Is Yours</span>
            </div>
          </div>
          
          <p className="text-xl mb-8">
            You could stay stuck in the same cycle of frustration... or start your journey with the Quran today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              href="#course" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex flex-col items-center"
            >
              <span className="block text-lg mb-1">Enroll in the Course</span>
              <span className="block text-sm font-normal">Self-paced learning</span>
            </Link>
            
            <Link 
              href="#coaching" 
              className="bg-deepPurple-600 hover:bg-deepPurple-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex flex-col items-center"
            >
              <span className="block text-lg mb-1">Apply for Coaching</span>
              <span className="block text-sm font-normal">Personalized guidance</span>
            </Link>
            
            <Link 
              href="#compare" 
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex flex-col items-center"
            >
              <span className="block text-lg mb-1">Compare Options</span>
              <span className="block text-sm font-normal">See what&#39;s right for you</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection