import React from 'react'

const testimonials = [
  {
    quote: "I tried to learn Quran reading for years... this was the first time it finally clicked.",
    name: "Aisha K.",
    location: "London, UK",
    rating: 5
  },
  {
    quote: "The step-by-step approach made all the difference. I'm now reading Surahs I never thought I could!",
    name: "Mohammed R.",
    location: "Toronto, Canada",
    rating: 5
  },
  {
    quote: "My tajweed improved dramatically with the personalized feedback from the coaching sessions.",
    name: "Fatima A.",
    location: "Dubai, UAE",
    rating: 5
  },
  {
    quote: "As a complete beginner, I appreciated how patient and clear the instruction was.",
    name: "Yusuf T.",
    location: "Sydney, Australia",
    rating: 5
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-emerald-200">Real people, real progress in their Quran reading journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg italic mb-6">
                &quot;{testimonial.quote}&quot;;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-emerald-200 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection