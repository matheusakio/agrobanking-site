// components/About.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="sobre" className="w-full overflow-hidden bg-[#E9E2D3] py-20">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[280px_1fr_360px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] overflow-hidden rounded-[16px] lg:h-[420px]"
          >
            <Image
              src="/images/imagem-dr-leila.png"
              alt="Dra. Leila Eloy"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-5 left-5 rounded-xl bg-[#073923] p-4 text-white">
              <h3 className="mb-1 font-serif text-lg leading-tight text-white">
                Dra. Leila Eloy
              </h3>

              <p className="text-xs font-medium text-[#C7A441]">
                Coordenadora Jurídica
              </p>

              <p className="text-[10px] text-white/80">
                Agrobanking Brasil
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <motion.h2
              variants={fadeUp}
              className="mb-6 font-serif text-[42px] leading-[1.08] text-[#123326]"
            >
              Advocacia que entende do campo e dos seus desafios.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mb-6 text-base leading-7 text-[#123326]/80"
            >
              Combinamos conhecimento jurídico, experiência prática e visão estratégica para oferecer soluções eficazes em dívidas empresariais e rurais.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-8 text-base leading-7 text-[#123326]/80"
            >
              Nosso compromisso é proteger sua atividade, recuperar seu fôlego financeiro e garantir segurança para você seguir produzindo e crescendo.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit rounded-lg bg-[#C7A441] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#B89333]"
              onClick={() => window.location.href = 'https://wa.me/61993097000'}
            >
              Conheça nossa história
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] overflow-hidden rounded-[16px] lg:h-[420px]"
          >
            <Image
              src="/images/imagem-brasilia.png"
              alt="Brasília"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 right-0 w-[190px] rounded-tl-[18px] bg-[#073923] p-8 text-[#F5EBDD]">
              <p className="font-serif text-lg leading-tight text-[#F5EBDD]">
                Brasília,
                <br />
                nasceu do
                <br />
                campo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}