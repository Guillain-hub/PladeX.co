import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import HomeServices from '@/components/home-services'
import HomeAbout from '@/components/home-about'
import HomePortfolio from '@/components/home-portfolio'
import HomeCTA from '@/components/home-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <HomeServices />
      <HomeAbout />
      <HomePortfolio />
      <HomeCTA />
      <Footer />
    </main>
  )
}
