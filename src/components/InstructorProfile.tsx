export default function InstructorProfile() {
    return (
        <section className="py-20 bg-cream-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-square bg-emerald-100">
                                <div className="absolute inset-0 bg-[url('/images/instructor.jpg')] bg-cover bg-center"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-purple-700/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-serif font-bold">Ustadh Umar Sa&#39;ad</h3>
                                    <p className="opacity-90">Senior Quran Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-gold-700 mb-6">
                            Learn From Someone Who Understands Your Journey
                        </h2>

                        <div className="prose-lg text-warm-gold/90 mb-8">
                            <p>
                                Many years ago, I struggled just like you. The Quran felt distant, the letters foreign.
                                But through <span className="font-semibold text-emerald-600">patient teachers, the relentless effort of my mum</span> and
                                the <span className="font-semibold text-warm-gold-600">right methodology</span>, I went
                                from stumbling to memorizing the whole Quran and teaching over 30 students how to read the Quran from beginner to advanced.
                            </p>

                            <p className="mt-4">
                                Over 6 years, I&#39;ve helped <span className="font-semibold">30+ students{" "}</span>
                                worldwide achieve fluent recitation. My approach combines:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
                                <h4 className="font-serif font-bold text-lg mb-2">Traditional Ijazah</h4>
                                <p>Authentic chain of transmission back to the Prophet ﷺ</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-warm-gold-500">
                                <h4 className="font-serif font-bold text-lg mb-2">Modern Pedagogy</h4>
                                <p>Evidence-based teaching methods for faster retention</p>
                            </div>
                        </div>

                        <div className="bg-deep-purple-700 text-white p-6 rounded-xl">
                            <div className="font-arabic text-3xl text-right mb-3">
                                وَقُرْآنًا فَرَقْنَاهُ لِتَقْرَأَهُ عَلَى النَّاسِ عَلَىٰ مُكْثٍ وَنَزَّلْنَاهُ تَنزِيلًا
                            </div>
                            <p className="italic">
                                &#34;And We have spaced out the Quran (gradually revealed it) so that you may recite it to the people
                                deliberately, and We have sent it down in distinct increments.&#34;
                            </p>
                            <p className="mt-2 font-medium">— Surah Al-Isra 17:106</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}