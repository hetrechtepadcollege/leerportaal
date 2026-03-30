'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { modules, moduleEmoji } from '@/data/modules'
import type { ModuleId } from '@/types'

interface Props {
  actief: ModuleId
  onSelect: (id: ModuleId) => void
}

export default function ModuleNav({ actief, onSelect }: Props) {
  return (
    <nav className="w-full bg-[#1f294d]/95 border-b border-white/10">
      <div className="max-w-[900px] mx-auto px-5 flex gap-1 overflow-x-auto
        [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {modules.map((mod) => {
          const isActief = mod.id === actief
          return (
            <button
              key={mod.id}
              onClick={() => onSelect(mod.id as ModuleId)}
              className={cn(
                'flex items-center gap-2 px-4 py-3 text-[0.82rem] font-semibold whitespace-nowrap',
                'border-b-2 transition-all duration-200 cursor-pointer bg-transparent',
                'relative flex-shrink-0',
                isActief
                  ? 'border-[#d4af37] text-white'
                  : mod.beschikbaar
                    ? 'border-transparent text-white/60 hover:text-white/90 hover:border-white/30'
                    : 'border-transparent text-white/35 cursor-not-allowed',
              )}
              disabled={!mod.beschikbaar && !isActief}
              title={!mod.beschikbaar ? 'Binnenkort beschikbaar' : mod.beschrijving}
            >
              <span>{moduleEmoji[mod.id]}</span>
              <span>{mod.label}</span>
              {!mod.beschikbaar && (
                <span className="text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full
                  bg-white/10 text-white/40 ml-0.5">
                  binnenkort
                </span>
              )}
              {isActief && (
                <motion.div
                  layoutId="module-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d4af37]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
