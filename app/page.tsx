import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import DifferentiatorsBar from '@/sections/DifferentiatorsBar'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Differentials from '@/sections/Differentials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <DifferentiatorsBar />
        <About />
        <Services />
        <Differentials />
      </main>
      <Footer />
    </div>
  )
}
