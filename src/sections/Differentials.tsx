// components/Differentials.tsx
'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, MapPin } from 'lucide-react'

export default function Differentials() {
  const differentials = [
    {
      icon: Award,
      title: 'Especialização',
      description: 'Foco exclusivo em dívidas empresariais e rurais',
    },
    {
      icon: Users,
      title: 'Atendimento Próximo',
      description: 'Relação direta e personalizada com cada cliente',
    },
    {
      icon: Target,
      title: 'Estratégias Eficazes',
      description: 'Soluções comprovadas e resultados consistentes',
    },
    {
      icon: MapPin,
      title: 'Brasília - DF',
      description: 'Localização estratégica no coração do país',
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="diferenciais" className="w-full overflow-hidden bg-[#E9E2D3] py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_300px]">
          <div className="order-2 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mb-12"
            >
              <p className="mb-4 text-sm font-semibold tracking-wider text-[#C7A441]">
                NOSSOS DIFERENCIAIS
              </p>

              <h2 className="font-serif text-[42px] leading-tight text-[#123326]">
                Por que escolher a Agrobanking Brasil?
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {differentials.map((item) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="text-center"
                  >
                    <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center">
                      <Icon className="h-8 w-8 text-[#123326]" strokeWidth={1.6} />
                    </div>

                    <h3 className="mb-2 text-base font-bold text-[#123326]">
                      {item.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-[#123326]/70">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="order-1 rounded-[18px] bg-[#073923] p-8 text-white lg:order-2"
          >
            <h3 className="mb-4 font-serif text-2xl leading-tight text-white">
              Pronto para dar o próximo passo?
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Nossa equipe está pronta para analisar seu caso e apresentar caminhos possíveis.
            </p>

            <a
              href="https://wa.me/61993097000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-[#C7A441] px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#B89333]"
            >
              Fale com a equipe
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}