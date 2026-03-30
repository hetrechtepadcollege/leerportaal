import type { RakatItem, RakatType } from '@/types'
import { cn } from '@/lib/cn'

// ─── Color map per rakat type ─────────────────────────────────────────────────

const borderColorMap: Record<RakatType, string> = {
  'fard': 'border-[#1a7a45]',
  'soenna-mua': 'border-[#1a3a8a]',
  'soenna-ghayr': 'border-[#4f8fd4]',
  'wajib': 'border-[#c96a00]',
  'nafl': 'border-[#b89000]',
}

// ─── Legend items ─────────────────────────────────────────────────────────────

interface LegendItem {
  type: RakatType
  label: string
  textColor: string
  borderColor: string
  bgColor: string
}

const legendItems: LegendItem[] = [
  { type: 'fard',        label: 'Farḍ',                   textColor: 'text-[#1a7a45]', borderColor: 'border-[#1a7a45]', bgColor: 'bg-[rgba(26,122,69,0.08)]' },
  { type: 'soenna-mua',  label: 'Essentiële soenna',       textColor: 'text-[#1a3a8a]', borderColor: 'border-[#1a3a8a]', bgColor: 'bg-[rgba(26,58,138,0.08)]' },
  { type: 'soenna-ghayr',label: 'Niet-essentiële soenna',  textColor: 'text-[#1a60aa]', borderColor: 'border-[#4f8fd4]', bgColor: 'bg-[rgba(79,143,212,0.10)]' },
  { type: 'wajib',       label: 'Wājib',                   textColor: 'text-[#c96a00]', borderColor: 'border-[#c96a00]', bgColor: 'bg-[rgba(201,106,0,0.08)]' },
  { type: 'nafl',        label: 'Nafl',                    textColor: 'text-[#7a5c00]', borderColor: 'border-[#b89000]', bgColor: 'bg-[rgba(184,144,0,0.08)]' },
]

// ─── Components ───────────────────────────────────────────────────────────────

function RakatBox({ item }: { item: RakatItem }) {
  return (
    <div
      className={cn(
        'bg-[#f9f8f6] rounded-[10px] py-3 px-2 text-center border-[3px]',
        borderColorMap[item.type],
      )}
    >
      <div className="text-[1.6rem] font-bold text-[#1f294d]">{item.aantal}</div>
      <div className="text-[0.7rem] text-[#5c6e8a] mt-0.5 font-medium">{item.label}</div>
    </div>
  )
}

function RakatLegenda({ activeTypes }: { activeTypes: Set<RakatType> }) {
  const visible = legendItems.filter((item) => activeTypes.has(item.type))
  if (visible.length === 0) return null

  return (
    <div className="flex flex-wrap gap-1.5 mt-2.5 mb-1">
      {visible.map((item) => (
        <span
          key={item.type}
          className={cn(
            'text-[0.68rem] font-semibold px-[9px] py-0.5 rounded-full border-2',
            item.textColor,
            item.borderColor,
            item.bgColor,
          )}
        >
          {item.label}
        </span>
      ))}
    </div>
  )
}

export default function RakatGrid({ items }: { items: RakatItem[] }) {
  const activeTypes = new Set(items.map((i) => i.type))

  return (
    <>
      <div className="grid gap-2 mb-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}>
        {items.map((item, i) => (
          <RakatBox key={i} item={item} />
        ))}
      </div>
      <RakatLegenda activeTypes={activeTypes} />
    </>
  )
}
