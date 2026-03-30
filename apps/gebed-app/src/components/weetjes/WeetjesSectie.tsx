'use client'

import { motion } from 'framer-motion'
import type { Weetje } from '@/types'
import { weetjes } from '@/data/weetjes'

function WeetjeKaart({ weetje, index }: { weetje: Weetje; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: 'easeOut' }}
      className="bg-white rounded-[14px] shadow-card border border-[rgba(31,41,77,0.09)] px-[18px] py-4 flex gap-3.5 items-start"
    >
      <span className="text-[1.4rem] flex-shrink-0 mt-0.5">{weetje.icon}</span>
      <div className="flex-1 min-w-0">
        <strong className="block text-[0.875rem] font-bold text-[#1c2340] mb-1">
          {weetje.titel}
        </strong>
        <p className="text-[0.82rem] text-[#5c6e8a] leading-relaxed m-0">{weetje.tekst}</p>
      </div>
    </motion.div>
  )
}

export default function WeetjesSectie() {
  return (
    <section className="mt-6">
      <h2 className="text-[1rem] font-bold mb-3.5 text-[#1c2340]">📚 Weetjes over de ṣalāt</h2>
      <div className="flex flex-col gap-2.5">
        {weetjes.map((w, i) => (
          <WeetjeKaart key={i} weetje={w} index={i} />
        ))}
      </div>
    </section>
  )
}
