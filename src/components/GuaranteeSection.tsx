import React from 'react'

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">7-Day No-Risk Guarantee</h2>
          
          <p className="text-xl mb-6">
            Try the course for 7 days. If you don&#39;t love it, just email me — you&#39;ll get a full refund, no questions asked.
          </p>
          
          <div className="max-w-lg mx-auto bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> For the coaching program, the guarantee applies to your first payment only. After your first session, if you feel it&#39;s not right for you, we&#39;ll refund you in full.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteeSection