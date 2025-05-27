import React from 'react'

const WhyStrugglingSection = () => {
  return (
    <section className="py-16 bg-[#FFFDF5]"> {/* Light cream fallback */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">Why You&lsquo;re Still Struggling</h2>
          <p className="text-xl text-emerald-700 font-medium">(It&lsquo;s Not Your Fault)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Box */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-emerald-100">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800 text-center">
              Most &quot;Beginner&quot; Courses Are Still Too Advanced
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              They assume you already know the basics of Arabic pronunciation or can recognize letters instantly.
            </p>
            <p className="text-lg text-gray-700">
              This leaves true beginners feeling lost and frustrated right from the start.
            </p>
          </div>

          {/* Right Points */}
          <div className="space-y-8">
            {[
              {
                title: 'Courses go too fast',
                description: 'They rush through foundational concepts without proper practice time.',
                iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'They assume prior Arabic knowledge',
                description: 'Many courses skip essential pronunciation basics for non-Arabic speakers.',
                iconPath:
                  'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
              },
              {
                title: 'No one to correct you',
                description: 'Without feedback, you develop bad habits that are hard to unlearn.',
                iconPath:
                  'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
              },
              {
                title: 'Tajweed dumped on you too early',
                description: 'Advanced rules are introduced before you&#39;ve mastered basic reading.',
                iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-800">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyStrugglingSection
