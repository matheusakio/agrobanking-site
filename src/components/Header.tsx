'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#062D1D]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1280px] items-center justify-between px-8 lg:px-10">
        <a href="#home" className="flex shrink-0 items-center">
         <Image
  src="/images/logo.png"
  alt="Agrobanking Brasil"
  width={255}
  height={108}
  priority
  unoptimized
  className="block h-auto w-[255px] object-contain"
/>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-white transition hover:text-[#C7A441]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/61993097000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-3 rounded-lg bg-[#C7A441] px-7 py-4 text-[15px] font-bold text-white transition hover:bg-[#B89333] lg:flex"
        >
          <MessageCircle size={21} />
          Fale com a equipe
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="text-white lg:hidden"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#062D1D]/95 backdrop-blur-md border-t border-[#C7A441]/20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-8 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-medium text-white/90 hover:text-[#C7A441] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/61993097000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-lg bg-[#C7A441] px-7 py-4 text-[15px] font-bold text-white transition hover:bg-[#B89333]"
            >
              <MessageCircle size={21} />
              Fale com a equipe
            </a>
          </div>
        </div>
      )}
    </header>
  )
}