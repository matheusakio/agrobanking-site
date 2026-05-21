'use client'

import { motion } from 'framer-motion'
import {
  Calculator,
  Handshake,
  ShieldCheck,
  FileSignature,
  Users,
  ChartNoAxesCombined,
  Landmark,
  Umbrella,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico preliminar de dívidas',
    description:
      'Perícia contábil, revisão de contratos, análise de passivos e avaliação do risco patrimonial.',
    icon: Calculator,
  },
  {
    number: '02',
    title: 'Negociação extrajudicial',
    description:
      'Reestruturação estratégica de dívidas com foco em aditivos, garantias, taxas e prazos.',
    icon: Handshake,
  },
  {
    number: '03',
    title: 'Jurídico especializado',
    description:
      'Holding familiar, planejamento sucessório, recuperação judicial e proteção patrimonial.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Contratos de arrendamento e parceria',
    description:
      'Estruturação e revisão jurídica para segurança na expansão e operação rural.',
    icon: FileSignature,
  },
  {
    number: '05',
    title: 'Mapeamento organizacional de equipe',
    description:
      'Análise da gestão de pessoas e otimização de recursos para alta performance operacional.',
    icon: Users,
  },
  {
    number: '06',
    title: 'Monitoramento de mercado e variáveis',
    description:
      'Acompanhamento de commodities, clima, câmbio e insumos para decisões estratégicas.',
    icon: ChartNoAxesCombined,
  },
  {
    number: '07',
    title: 'Captação de crédito',
    description:
      'Busca e estruturação de recursos financeiros adequados à operação rural.',
    icon: Landmark,
  },
  {
    number: '08',
    title: 'Gestão de risco e comercialização',
    description:
      'Proteção de preços, hedge, seguros agrícolas e estratégias para preservar rentabilidade.',
    icon: Umbrella,
  },
]

export default function Solucoes360() {
  return (
    <section
      id="solucoes360"
      className="relative overflow-hidden bg-[#F8F5EE] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,164,65,0.10),transparent_36%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[860px] text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#C7A441]">
            PRODUTOR RURAL
          </p>

          <h2 className="font-serif text-[40px] leading-[1.04] tracking-[-0.04em] text-[#123326] lg:text-[64px]">
            Central de inteligência estratégica para a operação rural.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-8 text-[#123326]/72">
            Um fluxo integrado para analisar dívidas, proteger patrimônio,
            reorganizar a operação e fortalecer a tomada de decisão do produtor.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-[980px]">
          {/* Linha central vertical desktop */}
          <svg className="absolute left-1/2 top-0 hidden h-full w-2 -translate-x-1/2 lg:block pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C7A441" />
                <stop offset="50%" stopColor="#0B3B28" />
                <stop offset="100%" stopColor="#C7A441" />
              </linearGradient>
            </defs>
            <path
              d="M 1 0 L 1 720"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* Linha central mobile */}
          <div className="absolute left-7 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-[#C7A441] via-[#0B3B28] to-[#C7A441] lg:hidden" />

          <div className="space-y-10 lg:space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.04 }}
                  className={`relative grid items-center gap-8 lg:grid-cols-[1fr_92px_1fr] ${
                    isLeft ? '' : ''
                  }`}
                >
                  {/* Card esquerdo */}
                  <div className={`${isLeft ? 'lg:block' : 'lg:invisible'} pl-20 lg:pl-0`}>
                    {isLeft && (
                      <StepCard
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        align="right"
                      />
                    )}
                  </div>

                  {/* Ícone central */}
                  <div className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#062D1D] shadow-xl shadow-[#123326]/20 lg:static lg:mx-auto lg:h-[92px] lg:w-[92px] lg:rounded-full lg:border-[10px] lg:border-[#F8F5EE]">
                    <Icon className="h-7 w-7 text-[#C7A441] lg:h-9 lg:w-9" strokeWidth={1.7} />
                  </div>

                  {/* Card direito */}
                  <div className={`${!isLeft ? 'lg:block' : 'lg:invisible'} pl-20 lg:pl-0`}>
                    {!isLeft && (
                      <StepCard
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        align="left"
                      />
                    )}

                    {/* Mobile sempre mostra o card aqui */}
                    <div className="lg:hidden">
                      <StepCard
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        align="left"
                      />
                    </div>
                  </div>

                  {/* Linha sutil de conexão */}
                  <div
                    className={`pointer-events-none absolute top-16 hidden h-24 w-2 bg-gradient-to-b from-transparent via-[#C7A441]/60 to-transparent lg:block ${
                      isLeft
                        ? 'right-[calc(50%-52px)]'
                        : 'left-[calc(50%-52px)]'
                    }`}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-[980px] rounded-[34px] bg-[#062D1D] p-8 text-center shadow-2xl shadow-[#123326]/15 lg:p-12"
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-[#C7A441]">
            AGROBANKING
          </p>

          <h3 className="mx-auto mt-4 max-w-[760px] font-serif text-[34px] leading-[1.08] tracking-[-0.04em] text-[#F8F5EE] lg:text-[52px]">
            Inteligência estratégica para proteger, reorganizar e fortalecer.
          </h3>

          <p className="mx-auto mt-5 max-w-[700px] text-[17px] leading-8 text-white/70">
            Uma visão integrada para conduzir o produtor rural em todas as
            etapas da operação.
          </p>

          <a
            href="https://wa.me/61993097000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-[#C7A441] px-8 py-4 text-[15px] font-bold text-white transition hover:bg-[#B89333]"
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function StepCard({
  number,
  title,
  description,
  align,
}: {
  number: string
  title: string
  description: string
  align: 'left' | 'right'
}) {
  return (
    <article
      className={`rounded-[26px] border border-[#123326]/10 bg-white/85 p-6 shadow-[0_18px_50px_rgba(18,51,38,0.07)] backdrop-blur-sm ${
        align === 'right' ? 'lg:text-right' : 'lg:text-left'
      }`}
    >
      <span className="text-xs font-bold tracking-[0.18em] text-[#C7A441]">
        ETAPA {number}
      </span>

      <h3 className="mt-3 text-[22px] font-bold leading-tight text-[#123326]">
        {title}
      </h3>

      <p className="mt-4 text-[15px] leading-7 text-[#123326]/68">
        {description}
      </p>
    </article>
  )
}