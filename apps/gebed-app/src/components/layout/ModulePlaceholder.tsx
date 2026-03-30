import { moduleEmoji } from '@/data/modules'
import type { Module } from '@/types'

export default function ModulePlaceholder({ module: mod }: { module: Module }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="text-6xl mb-5">{moduleEmoji[mod.id]}</div>
      <h2 className="text-[1.4rem] font-bold text-[#1c2340] mb-3">{mod.label}</h2>
      <p className="text-[#5c6e8a] text-[0.95rem] max-w-md leading-relaxed mb-6">
        {mod.beschrijving}
      </p>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
        bg-[rgba(212,175,55,0.12)] border border-[rgba(212,175,55,0.35)]
        text-[#8a6e00] text-[0.8rem] font-semibold">
        🚧 In ontwikkeling — binnenkort beschikbaar
      </div>
    </div>
  )
}
