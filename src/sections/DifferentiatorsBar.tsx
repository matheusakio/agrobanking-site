'use client'

import { motion } from 'framer-motion'
import { Scale, Leaf, ShieldCheck, Handshake } from 'lucide-react'

export default function DifferentiatorsBar() {
  const items = [
    { icon: Scale, title: 'Atuação estratégica e personalizada' },
    { icon: Leaf, title: 'Foco no agronegócio e no produtor rural' },
    { icon: ShieldCheck, title: 'Segurança jurídica e proteção patrimonial' },
    { icon: Handshake, title: 'Soluções para empresas e pessoas físicas' },
  ]

  return (
    <section className="w-full overflow-hidden border-b border-[#D8D0C0] bg-[#F8F5EE]">
      <div className="mx-auto w-full max-w-[1280px] px-8 lg:px-10">
        <div className="grid min-h-[110px] grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-0">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`flex items-center gap-4 lg:px-8 ${
                  index < 3 ? 'lg:border-r lg:border-[#D8D0C0]' : ''
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E2DDCF]">
                  <Icon className="h-6 w-6 text-[#123326]" strokeWidth={1.6} />
                </div>

                <h3 className="max-w-[210px] text-sm font-semibold leading-snug text-[#123326]">
                  {item.title}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}