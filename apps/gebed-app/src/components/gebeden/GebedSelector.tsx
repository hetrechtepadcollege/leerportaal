'use client'

import { motion } from 'framer-motion'
import type { Gebed } from '@/types'
import { cn } from '@/lib/cn'

interface Props {
  gebeden: Gebed[]
  actieveIndex: number
  onSelect: (index: number) => void
}

// Tijdlabel per gebed
const tijdLabel: Record<string, string> = {
  fajr: 'Voor zonsopgang',
  dhuhr: 'Middag',
  asr: 'Middag/namiddag',
  maghrib: 'Bij zonsondergang',
  isha: 'Nacht',
  witr: 'Na ʿIshā',
}

export default function GebedSelector({ gebeden, actieveIndex, onSelect }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-6">
      {gebeden.map((gebed, index) => {
        const isActief = index === actieveIndex
        return (
          <motion.button
            key={gebed.id}
            role="tab"
            aria-selected={isActief}
            onClick={() => onSelect(index)}
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              'flex flex-col items-center justify-between p-3 rounded-xl text-center cursor-pointer',
              'transition-all duration-200 border',
              isActief
                ? 'bg-[#1f294d] border-[#1f294d] shadow-md text-white'
                : 'bg-white border-transparent shadow-[0_1px_4px_rgba(31,41,77,0.10)] text-[#1c2340] hover:border-[#1f294d]/20 hover:shadow-md',
            )}
          >
            <span className="text-[1.4rem] mb-1 leading-none">{gebed.emoji}</span>
            <span className={cn(
              'block text-[0.78rem] font-bold leading-tight mb-1',
              isActief ? 'text-white' : 'text-[#1c2340]',
            )}>
              {gebed.naam}
            </span>
            <span className={cn(
              'block text-[1rem] leading-none mt-auto',
              isActief ? 'text-white/80' : 'text-[#1f294d]',
            )}>
              {gebed.arabisch}
            </span>
            <span className={cn(
              'block text-[0.62rem] mt-1.5 leading-tight',
              isActief ? 'text-white/60' : 'text-[#8898b0]',
            )}>
              {tijdLabel[gebed.id] ?? ''}
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}
