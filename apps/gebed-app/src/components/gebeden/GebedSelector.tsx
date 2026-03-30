'use client'

import { motion } from 'framer-motion'
import type { Gebed } from '@/types'
import { cn } from '@/lib/cn'

interface Props {
  gebeden: Gebed[]
  actieveIndex: number
  onSelect: (index: number) => void
}

export default function GebedSelector({ gebeden, actieveIndex, onSelect }: Props) {
  return (
    <div
      role="tablist"
      className="flex gap-2 mb-5 overflow-x-auto pb-1 scroll-smooth [-webkit-overflow-scrolling:touch]
        [scrollbar-width:thin] [scrollbar-color:rgba(31,41,77,0.08)_rgba(31,41,77,0.09)]"
    >
      {gebeden.map((gebed, index) => {
        const isActief = index === actieveIndex
        return (
          <motion.button
            key={gebed.id}
            role="tab"
            aria-selected={isActief}
            onClick={() => onSelect(index)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'flex-shrink-0 px-4 py-3 rounded-xl text-center min-w-[90px] font-["Plus_Jakarta_Sans",sans-serif]',
              'border-[1.5px] cursor-pointer transition-all duration-[0.18s]',
              isActief
                ? 'border-[#1f294d] bg-[rgba(31,41,77,0.08)]'
                : 'border-[rgba(31,41,77,0.09)] bg-white hover:border-[#d4af37] hover:shadow-card',
            )}
          >
            <span className="block text-[1.5rem] mb-1">{gebed.emoji}</span>
            <span
              className={cn(
                'block text-[0.78rem] font-bold',
                isActief ? 'text-[#1f294d]' : 'text-[#1c2340]',
              )}
            >
              {gebed.naam}
            </span>
            <span className="block text-[0.85rem] text-[#1f294d] mt-0.5">{gebed.arabisch}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
