// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { Landmark, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="relative min-h-[720px] w-full overflow-hidden bg-[#062D1D]">
      <Image
        src="/images/fundo.png"
        alt="Produtor rural"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#062D1D_0%,rgba(6,45,29,0.94)_20%,rgba(6,45,29,0.58)_52%,rgba(6,45,29,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(199,164,65,0.28),transparent_28%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#062D1D]/35 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[720px] w-full max-w-[1280px] grid-cols-1 items-center px-8 pt-24 lg:grid-cols-[520px_1fr_270px] lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.18 }}
          className="max-w-[520px]"
        >
          <motion.p variants={fadeUp} className="mb-5 text-sm font-semibold tracking-wider text-[#C7A441]">
            ADVOCACIA ESPECIALIZADA
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-6 font-serif text-[48px] leading-[0.98] tracking-[-0.04em] text-[#F8F5EE] md:text-[62px] lg:text-[68px]"
          >
            Estratégias para
            <br />
            dívidas empresariais
            <br />
            e rurais.
          </motion.h1>

          <motion.p variants={fadeUp} className="mb-5 text-xl font-semibold text-[#C7A441]">
            Negociação • Diagnóstico • Reestruturação
          </motion.p>

          <motion.p variants={fadeUp} className="mb-9 max-w-[480px] text-base leading-7 text-[#F8F5EE]/85">
            Soluções jurídicas personalizadas para proteger o que você construiu e impulsionar o que ainda vai conquistar.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
            <a href="https://wa.me/61993097000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#C7A441] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#B89333]">
              <MessageCircle className="h-4 w-4" />
              Fale com a equipe
            </a>

            <a href="#servicos" className="flex items-center justify-center gap-3 rounded-lg border border-white/65 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
              Nossos serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <div />

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden rounded-[18px] bg-[#073923] p-8 text-white shadow-2xl lg:block"
        >
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#C7A441]/15">
            <Landmark className="h-7 w-7 text-[#C7A441]" strokeWidth={1.5} />
          </div>

          <p className="mb-6 font-serif text-2xl leading-tight text-[#F8F5EE]">
            Direito com conhecimento do campo e visão de negócios.
          </p>

          <p className="mb-8 text-sm leading-relaxed text-[#F8F5EE]/80">
            Entenda antes de decidir.
          </p>

          <div className="h-px w-16 bg-[#C7A441]" />
        </motion.div>
      </div>
    </section>
  )
}