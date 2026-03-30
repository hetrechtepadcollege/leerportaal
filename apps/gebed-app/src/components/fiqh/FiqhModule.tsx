'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'
import {
  fiqhCategorieën,
  fiqhItems,
  type FiqhCategorie,
} from '@/data/fiqh'

// ─── Categorie tab ────────────────────────────────────────────────────────────

function CategorieTab({
  meta,
  actief,
  onClick,
}: {
  meta: (typeof fiqhCategorieën)[number]
  actief: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-[0.8rem] font-semibold',
        'whitespace-nowrap cursor-pointer transition-all duration-150 flex-shrink-0',
        actief
          ? cn(meta.borderKleur, meta.bgKleur, 'text-[#1c2340]')
          : 'border-[rgba(31,41,77,0.09)] bg-white text-[#5c6e8a] hover:border-[rgba(31,41,77,0.2)]',
      )}
    >
      <span>{meta.emoji}</span>
      <span>{meta.label}</span>
    </button>
  )
}

// ─── Fiqh item kaart ──────────────────────────────────────────────────────────

function FiqhKaart({
  item,
  index,
  borderKleur,
  bgKleur,
}: {
  item: (typeof fiqhItems)[number]
  index: number
  borderKleur: string
  bgKleur: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, delay: index * 0.04, ease: 'easeOut' }}
      className={cn(
        'bg-white rounded-[12px] border-l-[4px] shadow-card px-5 py-4',
        borderKleur,
      )}
    >
      <h3 className="text-[0.875rem] font-bold text-[#1c2340] mb-1.5">{item.titel}</h3>
      <p className="text-[0.82rem] text-[#5c6e8a] leading-relaxed m-0">{item.omschrijving}</p>
      {item.nota && (
        <div className={cn('mt-2.5 px-3 py-2 rounded-lg text-[0.75rem] text-[#1c2340] leading-relaxed', bgKleur)}>
          <strong>ℹ️ Ḥanafī standpunt:</strong> {item.nota}
        </div>
      )}
      {item.bron && (
        <p className="mt-2 text-[0.7rem] text-[#9aa8b8] italic">
          Bron: {item.bron}
        </p>
      )}
    </motion.div>
  )
}

// ─── Hoofdcomponent ───────────────────────────────────────────────────────────

export default function FiqhModule() {
  const [actieveCategorie, setActieveCategorie] = useState<FiqhCategorie>('voorwaarden')

  const activeMeta = fiqhCategorieën.find((c) => c.id === actieveCategorie)!
  const actieveItems = fiqhItems.filter((i) => i.categorie === actieveCategorie)

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-[1rem] font-bold text-[#1c2340] mb-1">⚖️ Fiqh van het gebed</h2>
        <p className="text-[0.82rem] text-[#5c6e8a]">
          Ḥanafī school · Gebaseerd op BSI N1 (Het Rechte Pad College)
        </p>
      </div>

      {/* Categorie tabs — horizontaal scrollbaar */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
        {fiqhCategorieën.map((meta) => (
          <CategorieTab
            key={meta.id}
            meta={meta}
            actief={actieveCategorie === meta.id}
            onClick={() => setActieveCategorie(meta.id)}
          />
        ))}
      </div>

      {/* Uitleg van de categorie */}
      <AnimatePresence mode="wait">
        <motion.div
          key={actieveCategorie}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className={cn(
            'px-4 py-3 rounded-[10px] border-l-[4px] mb-5 text-[0.82rem] text-[#1c2340] leading-relaxed',
            activeMeta.borderKleur,
            activeMeta.bgKleur,
          )}>
            <strong className="font-bold">{activeMeta.emoji} {activeMeta.label}</strong>
            <br />
            {activeMeta.uitleg}
          </div>

          {/* Items */}
          <div className="flex flex-col gap-3">
            {actieveItems.map((item, i) => (
              <FiqhKaart
                key={item.id}
                item={item}
                index={i}
                borderKleur={activeMeta.borderKleur}
                bgKleur={activeMeta.bgKleur}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
