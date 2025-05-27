'use client';
import { useState } from 'react'

export default function CurriculumModule() {
  const [activeModule, setActiveModule] = useState<number | null>(0)

  const modules = [
    {
      title: "Foundations of Recitation",
      description: "Master the Arabic alphabet and basic pronunciation rules",
      lessons: [
        "Proper articulation points (Makharij)",
        "Characteristics of letters (Sifaat)",
        "Introduction to Tajweed symbols",
        "Practice with short surahs"
      ],
      verse: {
        arabic: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
        translation: "And recite the Quran with measured recitation"
      }
    },
    {
      title: "Rules of Noon & Meem",
      description: "Learn the essential rules that affect 40% of Quranic text",
      lessons: [
        "Idgham (merging)",
        "Ikhfa (hiding)",
        "Iqlab (conversion)",
        "Idhar (clear pronunciation)"
      ],
      verse: {
        arabic: "سَنُقْرِئُكَ فَلَا تَنْسَىٰ",
        translation: "We will make you recite, so you will not forget"
      }
    },
    {
      title: "Advanced Tajweed",
      description: "Elevate your recitation with pro-level techniques",
      lessons: [
        "Rules of Madd (elongation)",
        "Heavy vs light letters",
        "Stopping rules (Waqf)",
        "Rhythm and melody (Maqamat)"
      ],
      verse: {
        arabic: "وَرَتَّلْنَاهُ تَرْتِيلًا",
        translation: "And We have spaced it distinctly"
      }
    }
  ]

  return (
    <section className="py-20 bg-warm-gold-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream-500 mb-6">
            What You&#34;ll Master
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Our curriculum is designed to take you from basics to beautiful recitation in logical steps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="mb-6 border border-cream-600 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActiveModule(activeModule === index ? null : index)}
                className={`w-full flex justify-between items-center p-6 text-left ${activeModule === index ? 'bg-cream-600' : 'bg-cream-500 hover:bg-cream-550'
                  } transition-colors duration-300`}
              >
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-warm-gold-700">
                    Module {index + 1}: {module.title}
                  </h3>
                  <p className="text-warm-gold/90 mt-1">{module.description}</p>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${activeModule === index ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {activeModule === index && (
                <div className="p-6 bg-white border-t border-cream-600">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="text-lg font-semibold mb-4">Lessons Include:</h4>
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="flex-shrink-0 w-5 h-5 text-emerald-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-cream-100 p-5 rounded-lg border border-cream-600">
                      <div className="font-scheherazade text-3xl text-right leading-relaxed text-deep-purple-700 mb-3">
                        {module.verse.arabic}
                      </div>
                      <div className="text-sm text-foreground/80 italic">
                        {module.verse.translation}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}