export default function CourseCards() {
  const courses = [
    {
      title: "Self-Paced Mastery",
      description: "Learn at your own rhythm with our structured video curriculum",
      price: "$297",
      features: [
        "12 comprehensive modules",
        "Interactive exercises",
        "Downloadable resources",
        "Private community access",
        "Monthly Q&A sessions"
      ],
      cta: "Start Learning",
      popular: false,
      color: "emerald"
    },
    {
      title: "Guided Coaching",
      description: "Personalized instruction with weekly 1:1 sessions",
      price: "$997",
      features: [
        "Everything in Self-Paced",
        "8 private coaching sessions",
        "Personalized feedback",
        "Custom learning plan",
        "Priority support",
        "Certificate of completion"
      ],
      cta: "Get Personal Guidance",
      popular: true,
      color: "deep-purple"
    }
  ];

  return (
    <section id="enroll" className="py-20 bg-cream-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-purple-700 mb-6">
            Choose Your Journey
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Whether you prefer independent learning or personal guidance, we have a path for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`relative rounded-xl shadow-xl overflow-hidden border-2 ${
                course.popular 
                  ? "border-warm-gold-500 scale-105 z-10" 
                  : "border-transparent"
              } transition-transform duration-300 hover:scale-[1.02]`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-warm-gold-500 text-white px-4 py-1 text-sm font-bold transform translate-x-2 translate-y-2 rotate-12">
                  Most Transformative
                </div>
              )}
              
              <div className={`bg-gradient-to-br from-${course.color}-500 to-${course.color}-600 p-8 text-white`}>
                <h3 className="text-3xl font-serif font-bold mb-2">{course.title}</h3>
                <p className="text-lg opacity-90 mb-6">{course.description}</p>
                <div className="text-4xl font-bold mb-6">{course.price}</div>
              </div>
              
              <div className="bg-white p-8">
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 w-5 h-5 text-emerald-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 px-6 rounded-lg font-bold text-white ${
                  course.popular 
                    ? "bg-warm-gold-600 hover:bg-warm-gold-700" 
                    : "bg-emerald-600 hover:bg-emerald-700"
                } transition-colors duration-300`}>
                  {course.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80">
            Need help deciding? <button className="text-emerald-700 font-medium hover:underline">Schedule a free consultation</button>
          </p>
        </div>
      </div>
    </section>
  )
}