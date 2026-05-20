// components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { Landmark, Sprout, RefreshCw, FileText } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: Landmark,
      title: 'Dívida Bancária',
      description: 'Negociação de dívidas, revisão de contratos e redução de encargos.',
    },
    {
      icon: Sprout,
      title: 'Dívida Rural',
      description: 'Soluções jurídicas para produtores rurais e operações no campo.',
    },
    {
      icon: RefreshCw,
      title: 'Reestruturação Empresarial',
      description: 'Planejamento e estratégia para empresas superarem crises e retomarem o crescimento.',
    },
    {
      icon: FileText,
      title: 'Consultoria Jurídica',
      description: 'Acompanhamento jurídico preventivo para proteger seu patrimônio e decisões.',
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="servicos" className="w-full overflow-hidden bg-[#062D1D] py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="mb-4 text-sm font-semibold tracking-wider text-[#C7A441]">
            NOSSOS SERVIÇOS
          </p>

          <h2 className="font-serif text-[42px] leading-tight text-[#F5EBDD]">
            Como podemos te ajudar
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
          <div className="order-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:order-1">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -6 }}
                  className="group min-h-[190px] cursor-pointer rounded-2xl border border-[#C7A441]/25 bg-transparent p-6 text-white transition-all hover:border-[#C7A441]/60"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center">
                    <Icon className="h-8 w-8 text-[#C7A441]" strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 h-[360px] w-full overflow-hidden rounded-[18px] lg:order-2"
          >
            <Image
              src="/images/imagem-justica.png"
              alt="Justiça e agro"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}