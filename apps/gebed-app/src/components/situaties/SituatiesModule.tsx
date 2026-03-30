'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'
import { situatieCategorieën, situatieItems, type SituatieCategorie } from '@/data/situaties'

function VraagKaart({
  item,
  index,
}: {
  item: { vraag: string; antwoord: string; bron?: string; nota?: string }
  index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, delay: index * 0.04 }}
      className="bg-white rounded-[12px] shadow-card border border-[rgba(31,41,77,0.09)] overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 cursor-pointer bg-transparent border-none"
      >
        <span className="text-[0.875rem] font-semibold text-[#1c2340] leading-snug">{item.vraag}</span>
        <span className={cn(
          'text-[#5c6e8a] text-[1rem] flex-shrink-0 transition-transform duration-200 mt-0.5',
          open && 'rotate-45',
        )}>+</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 border-t border-[rgba(31,41,77,0.07)]">
              <p className="text-[0.82rem] text-[#5c6e8a] leading-relaxed mt-3">{item.antwoord}</p>
              {item.nota && (
                <div className="mt-3 px-3 py-2 rounded-lg bg-[rgba(31,41,77,0.06)] text-[0.75rem] text-[#1c2340] leading-relaxed">
                  <strong>ℹ️ Ḥanafī standpunt:</strong> {item.nota}
                </div>
              )}
              {item.bron && (
                <p className="mt-2 text-[0.7rem] text-[#9aa8b8] italic">Bron: {item.bron}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function SituatiesModule() {
  const [actief, setActief] = useState<SituatieCategorie>('reizen')

  const activeCat = situatieCategorieën.find((c) => c.id === actief)!
  const items = situatieItems[actief]

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[1rem] font-bold text-[#1c2340] mb-1">🧳 Speciale situaties</h2>
        <p className="text-[0.82rem] text-[#5c6e8a]">
          Ḥanafī fiqh · Bahāre Sharīʿat, Durr al-Mukhtār, Fatāwā ʿĀlamgīrī
        </p>
      </div>

      {/* Categorie tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 [scrollbar-width:none]">
        {situatieCategorieën.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActief(cat.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-[0.8rem] font-semibold',
              'whitespace-nowrap cursor-pointer transition-all duration-150 flex-shrink-0',
              actief === cat.id
                ? 'border-[#1f294d] bg-[rgba(31,41,77,0.08)] text-[#1c2340]'
                : 'border-[rgba(31,41,77,0.09)] bg-white text-[#5c6e8a] hover:border-[rgba(31,41,77,0.2)]',
            )}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={actief}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Categorie uitleg */}
          <div className="px-4 py-3 rounded-[10px] border-l-[4px] border-[#1f294d] bg-[rgba(31,41,77,0.06)] mb-5 text-[0.82rem] text-[#1c2340] leading-relaxed">
            <strong>{activeCat.emoji} {activeCat.label}</strong>
            <br />
            {activeCat.beschrijving}
          </div>

          {/* Accordion vragen */}
          <div className="flex flex-col gap-2.5">
            {items.map((item, i) => (
              <VraagKaart key={i} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
