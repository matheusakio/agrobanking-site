import { Mail, MapPin, Phone, MessageCircle, Camera } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#032F20] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-8 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-[260px_1fr_1.2fr_1fr] lg:gap-20">
          <div>
        <Image
  src="/images/logo.png"
  alt="Agrobanking Brasil"
  width={248}
  height={105}
  unoptimized
  className="mb-10 block h-auto w-[248px] object-contain"
/>

            <p className="max-w-[300px] text-[16px] leading-8 text-white/70">
              Advocacia especializada em dívidas empresariais e rurais, oferecendo soluções jurídicas personalizadas para proteger seu patrimônio.
            </p>
          </div>

          <div>
            <h3 className="mb-9 text-2xl font-bold text-white">Navegação</h3>

            <nav className="flex flex-col gap-6 text-[17px] text-white/70">
              <a href="#home" className="transition hover:text-[#C7A441]">Home</a>
              <a href="#sobre" className="transition hover:text-[#C7A441]">Sobre</a>
              <a href="#servicos" className="transition hover:text-[#C7A441]">Serviços</a>
              <a href="#diferenciais" className="transition hover:text-[#C7A441]">Diferenciais</a>
              <a href="#contato" className="transition hover:text-[#C7A441]">Contato</a>
            </nav>
          </div>

          <div>
            <h3 className="mb-9 text-2xl font-bold text-white">Contato</h3>

            <div className="flex flex-col gap-6 text-[17px] text-white/70">
              <div className="flex items-center gap-4">
                <Phone size={22} className="text-[#C7A441]" />
                <a
                  href="https://wa.me/61993097000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#C7A441]"
                >
                  61 99309-7000
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={22} className="text-[#C7A441]" />
                <a
                  href="mailto:agrobanking.brasil@gmail.com"
                  className="transition hover:text-[#C7A441]"
                >
                  agrobanking.brasil@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin size={22} className="text-[#C7A441]" />
                <span>Brasília - DF</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-9 text-2xl font-bold text-white">Redes Sociais</h3>

            <div className="flex gap-4 items-center">
              <a
                href="https://wa.me/61993097000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#123326] text-[#C7A441] transition hover:bg-[#C7A441] hover:text-white"
                title="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>

              <a
                href="https://www.instagram.com/agrobanking.brasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#123326] text-[#C7A441] transition hover:bg-[#C7A441] hover:text-white"
                title="Instagram"
              >
                <Camera size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-[#C7A441]/30 pt-8 text-center text-sm text-white/50">
          © 2026 Agrobanking Brasil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}