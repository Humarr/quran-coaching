export default function PainPoints() {
  const painPoints = [
    {
      title: "The Frustration",
      description: "Stumbling over words that should flow smoothly",
      icon: "😣"
    },
    {
      title: "The Doubt",
      description: "Wondering if you're even pronouncing correctly",
      icon: "🤔"
    },
    {
      title: "The Isolation",
      description: "Feeling alone in your learning journey",
      icon: "😔"
    },
    {
      title: "The Guilt",
      description: "Knowing you could be closer to the Quran than you are",
      icon: "😞"
    }
  ];

  return (
    <section className="py-20 bg-cream-600 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-purple-700 mb-6">
            You&#39;ve tried before...
          </h2>
          <p className="text-xl text-deep-purple max-w-3xl mx-auto">
            Maybe with apps, books, or even teachers who didn&#39;t understand your struggles.
            The Quran deserves better—and so do you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-warm-gold-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-warm-gold-500"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-cream-600 mb-3">
                {point.title}
              </h3>
              <p className="text-foreground/80">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center ">
          <p className="text-xl font-medium text-emerald-700 max-w-3xl mx-auto b-2 border-warm-gold">
            &#34;And We have certainly made the Quran easy for remembrance, so is there any who will remember?&#34;
            <span className="block mt-2 text-lg text-emerald font-bold">— Surah Al-Qamar 54:17</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream-600 to-transparent"></div>
    </section>
  )
}