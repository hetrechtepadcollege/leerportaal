'use client'

import { motion } from 'framer-motion'
import { dimensieThemas } from '@/data/dimensie'

function ThemaKaart({ thema, index }: { thema: (typeof dimensieThemas)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.25, delay: index * 0.06, ease: 'easeOut' }}
      className="bg-white rounded-[14px] shadow-card border border-[rgba(31,41,77,0.09)] overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[rgba(31,41,77,0.04)] px-5 py-4 border-b border-[rgba(31,41,77,0.07)]">
        <div className="flex items-center gap-3">
          <span className="text-[1.8rem]">{thema.icon}</span>
          <div>
            <h3 className="text-[0.95rem] font-bold text-[#1c2340] leading-tight">{thema.titel}</h3>
            {thema.arabisch && (
              <span className="text-[1.1rem] text-[#5c6e8a]" dir="rtl" lang="ar">
                {thema.arabisch}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        {/* Inleiding */}
        <p className="text-[0.875rem] text-[#1c2340] leading-relaxed mb-4">{thema.inleiding}</p>

        {/* Punten */}
        <ul className="flex flex-col gap-2 mb-4">
          {thema.punten.map((punt, i) => (
            <li key={i} className="flex gap-2.5 text-[0.82rem] text-[#5c6e8a] leading-relaxed">
              <span className="text-[#d4af37] flex-shrink-0 mt-0.5">◆</span>
              <span>{punt}</span>
            </li>
          ))}
        </ul>

        {/* Citaat */}
        {thema.citaat && (
          <blockquote className="border-l-[3px] border-[#d4af37] bg-[rgba(212,175,55,0.08)] px-4 py-3 rounded-r-[10px] mt-3">
            <p className="text-[0.82rem] text-[#1c2340] italic leading-relaxed">
              {thema.citaat.tekst}
            </p>
            <cite className="text-[0.7rem] text-[#5c6e8a] not-italic mt-1.5 block">
              — {thema.citaat.bron}
            </cite>
          </blockquote>
        )}

        {/* Bron */}
        {thema.bron && (
          <p className="mt-3 text-[0.7rem] text-[#9aa8b8] italic">{thema.bron}</p>
        )}
      </div>
    </motion.article>
  )
}

export default function DimensieModule() {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[1rem] font-bold text-[#1c2340] mb-1">💚 Innerlijke dimensie</h2>
        <p className="text-[0.82rem] text-[#5c6e8a]">
          Taṣawwuf · Imām al-Ghazālī · Shaykh Aḥmad Sirhindī
        </p>
      </div>

      {/* Intro banner */}
      <div className="px-4 py-3 rounded-[10px] border-l-[3px] border-[#d4af37] bg-[rgba(212,175,55,0.10)] mb-6 text-[0.82rem] text-[#1c2340] leading-relaxed">
        <strong>Over deze module:</strong> De ṣalāt heeft een uiterlijke en een innerlijke dimensie.
        De fiqh beschrijft de uiterlijke vorm — de Taṣawwuf beschrijft het leven dat erin stroomt.
        Deze module is gebaseerd op het werk van Imām al-Ghazālī (Iḥyāʾ ʿUlūm al-Dīn) en de
        klassieke soefistische traditie binnen de Ahl-us-Sunnah.
      </div>

      <div className="flex flex-col gap-4">
        {dimensieThemas.map((thema, i) => (
          <ThemaKaart key={thema.id} thema={thema} index={i} />
        ))}
      </div>
    </div>
  )
}
