'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { Gebed } from '@/types'
import RakatGrid from './RakatGrid'

interface Props {
  gebed: Gebed
}

// Badge kleur per gebed (vergelijkbaar met Tajweed categoriebadges)
const badgeKleur: Record<string, string> = {
  fajr:    'bg-[#e8edf8] text-[#1f294d]',
  dhuhr:   'bg-[#fff4dc] text-[#8a6200]',
  asr:     'bg-[#fff4dc] text-[#8a6200]',
  maghrib: 'bg-[#ffeee8] text-[#8a3200]',
  isha:    'bg-[#e8edf8] text-[#1f294d]',
  witr:    'bg-[#f0eaff] text-[#5a2d9e]',
}

const badgeLabel: Record<string, string> = {
  fajr:    'Ochtend',
  dhuhr:   'Middag',
  asr:     'Middag/namiddag',
  maghrib: 'Avond',
  isha:    'Nacht',
  witr:    'Na ʿIshā · Wājib',
}

export default function GebedDetail({ gebed }: Props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={gebed.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(31,41,77,0.10)] border border-[rgba(31,41,77,0.07)] p-6 mb-5"
      >
        {/* Badge + Arabic header */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div>
            <span className={`inline-block text-[0.68rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-2 ${badgeKleur[gebed.id] ?? 'bg-[#eef1f8] text-[#3d4f6e]'}`}>
              {badgeLabel[gebed.id] ?? gebed.betekenis}
            </span>
            <h2 className="text-[1.25rem] font-bold text-[#1c2340] leading-tight">{gebed.naam}</h2>
            <p className="text-[0.82rem] text-[#7a8aaa] mt-0.5">{gebed.betekenis}</p>
          </div>
          <div className="text-[2.8rem] text-[#1f294d] leading-none flex-shrink-0 font-arabic pt-1">
            {gebed.arabisch}
          </div>
        </div>

        {/* Rakat grid */}
        <RakatGrid items={gebed.rakatItems} />

        {/* Tijdvenster */}
        <div className="flex gap-2.5 items-start mt-5">
          <span className="text-[1.1rem] flex-shrink-0 mt-0.5">🕐</span>
          <div>
            <strong className="block text-[0.78rem] font-bold mb-0.5 text-[#1c2340]">Tijdvenster</strong>
            <span className="text-[#7a8aaa] text-[0.82rem]">{gebed.tijd}</span>
          </div>
        </div>

        {/* Belang */}
        <div className="mt-4 bg-[rgba(212,175,55,0.08)] border-l-[3px] border-[#d4af37] px-4 py-3 rounded-r-xl text-[0.82rem] text-[#1c2340] leading-relaxed">
          <strong className="text-[#7a6200]">💫 Belang</strong>
          <br />
          {gebed.belang}
        </div>

        {/* Bijzonder (optional) */}
        {gebed.bijzonder && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 bg-[rgba(31,41,77,0.05)] border-l-[3px] border-[#1f294d] px-4 py-3 rounded-r-xl text-[0.82rem] text-[#1c2340] leading-relaxed"
          >
            <strong className="text-[#1f294d]">💡 Bijzonder:</strong> {gebed.bijzonder}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
