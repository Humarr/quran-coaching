import HeroSection from '@/components/HeroSection'
import PainPoints from '@/components/PainPoints'
import VisionSection from '@/components/VisionSection'
import CourseCards from '@/components/CourseCards'
import CurriculumModule from '@/components/CurriculumModule'
import InstructorProfile from '@/components/InstructorProfile'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import GuaranteeBadge from '@/components/GuaranteeBadge'
import FinalCTA from '@/components/FinalCTA'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <PainPoints />
      <VisionSection />
      <CourseCards />
      <CurriculumModule />
      
      {/* Additional sections would be imported and placed here */}
      <InstructorProfile />
      <TestimonialCarousel />
      <GuaranteeBadge />
      <FinalCTA />
      
      {/* Sticky CTA for mobile */}
      {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 z-50">
        <div className="container mx-auto">
          <button className="w-full py-3 px-6 bg-warm-gold-600 hover:bg-warm-gold-700 text-white font-bold rounded-full transition-colors duration-300">
            Begin Your Quran Journey
          </button>
        </div>
      </div> */}
      <StickyCTA/>
    </main>
  )
}