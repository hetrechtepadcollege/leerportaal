'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { Gebed } from '@/types'
import RakatGrid from './RakatGrid'

interface Props {
  gebed: Gebed
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
        className="bg-white rounded-[14px] shadow-card border border-[rgba(31,41,77,0.09)] p-6 mb-6"
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="text-[2.5rem] text-[#1f294d] flex-shrink-0 leading-none pt-1">
            {gebed.arabisch}
          </div>
          <div>
            <h2 className="text-[1.1rem] font-bold text-[#1c2340]">{gebed.naam}</h2>
            <p className="text-[0.82rem] text-[#5c6e8a] mt-1">{gebed.betekenis}</p>
          </div>
        </div>

        {/* Rakat grid + legenda */}
        <RakatGrid items={gebed.rakatItems} />

        {/* Tijdvenster */}
        <div className="flex gap-2.5 items-start mt-5 text-[0.875rem]">
          <span className="text-[1.1rem] flex-shrink-0 mt-0.5">🕐</span>
          <div>
            <strong className="block text-[0.82rem] mb-0.5 text-[#1c2340]">Tijdvenster</strong>
            <span className="text-[#5c6e8a] text-[0.82rem]">{gebed.tijd}</span>
          </div>
        </div>

        {/* Belang */}
        <div className="mt-3 bg-[rgba(212,175,55,0.10)] border-l-[3px] border-[#d4af37] px-4 py-3 rounded-r-[10px] text-[0.82rem] text-[#1c2340] leading-relaxed">
          <strong>💫 Belang</strong>
          <br />
          {gebed.belang}
        </div>

        {/* Bijzonder (optional) */}
        {gebed.bijzonder && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 bg-[rgba(31,41,77,0.08)] border-l-[3px] border-[#1f294d] px-4 py-3 rounded-r-[10px] text-[0.82rem] text-[#1c2340] leading-relaxed"
          >
            <strong>💡 Bijzonder:</strong> {gebed.bijzonder}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
