import Link from 'next/link'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function AppHeader() {
  return (
    <header className="w-full bg-[#1f294d] px-6 pb-4 pt-4 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-3 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/images/HRPC-logo.png`}
          alt="Het Rechte Pad College"
          width={240}
          height={80}
          className="w-full max-w-[240px] h-auto"
        />
        <div>
          <h1 className="text-[1.8rem] font-bold text-white m-0">Het Gebed</h1>
          <p className="mt-1 text-[0.95rem] text-white/70">
            Ontdek en leer alles over het gebed
          </p>
        </div>
      </div>

      <div className="text-center mt-2">
        <Link
          href="../../"
          className="inline-block text-white/70 font-semibold px-6 py-2 text-[0.85rem] no-underline transition-colors duration-200 hover:text-[#d4af37]"
        >
          ← Terug naar Leerportaal
        </Link>
      </div>
    </header>
  )
}
