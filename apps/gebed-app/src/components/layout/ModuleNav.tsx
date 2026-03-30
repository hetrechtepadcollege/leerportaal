'use client'

import { cn } from '@/lib/cn'
import { modules, moduleEmoji } from '@/data/modules'
import type { ModuleId } from '@/types'

interface Props {
  actief: ModuleId
  onSelect: (id: ModuleId) => void
}

export default function ModuleNav({ actief, onSelect }: Props) {
  return (
    <nav className="w-full bg-white border-b border-[#e2e6ef]">
      <div className="max-w-[900px] mx-auto px-5 py-3 flex gap-2 overflow-x-auto
        [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {modules.map((mod) => {
          const isActief = mod.id === actief
          return (
            <button
              key={mod.id}
              onClick={() => !(!mod.beschikbaar) && onSelect(mod.id as ModuleId)}
              disabled={!mod.beschikbaar && !isActief}
              title={!mod.beschikbaar ? 'Binnenkort beschikbaar' : mod.beschrijving}
              className={cn(
                'flex items-center gap-2 px-4 py-[7px] rounded-full text-[0.82rem] font-semibold',
                'whitespace-nowrap transition-all duration-200 flex-shrink-0',
                isActief
                  ? 'bg-[#1f294d] text-white shadow-sm'
                  : mod.beschikbaar
                    ? 'text-[#3d4f6e] hover:bg-[#eef1f8]'
                    : 'text-[#9ba9c0] cursor-not-allowed',
              )}
            >
              <span>{moduleEmoji[mod.id]}</span>
              <span>{mod.label}</span>
              {!mod.beschikbaar && (
                <span className="text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full
                  bg-[#eef1f8] text-[#9ba9c0] ml-0.5">
                  binnenkort
                </span>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
