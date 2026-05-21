import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import DifferentiatorsBar from '@/sections/DifferentiatorsBar'
import Solucoes360 from '@/sections/Soluctions'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Differentials from '@/sections/Differentials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Header />

      <main className="w-full flex-1 overflow-hidden">
        <Hero />
        <DifferentiatorsBar />
        <Solucoes360 />
        <About />
        <Services />
        <Differentials />
      </main>

      <Footer />
    </div>
  )
}