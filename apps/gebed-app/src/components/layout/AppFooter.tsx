import Link from 'next/link'

export default function AppFooter() {
  return (
    <>
      {/* Bottom portal link */}
      <div className="text-center my-2">
        <Link
          href="../../"
          className="inline-block text-[#5c6e8a] font-semibold px-6 py-2 text-[0.85rem] no-underline transition-colors duration-200 hover:text-[#1f294d]"
        >
          ← Terug naar Leerportaal
        </Link>
      </div>

      <footer className="bg-[rgba(31,41,77,0.08)] text-[#1c2340] text-center px-5 py-4 text-[0.875rem] border-t border-[rgba(31,41,77,0.09)] mt-auto">
        <p>© 2026 Het Rechte Pad College</p>
        <a
          href="https://www.hetrechtepad.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1f294d] no-underline font-semibold transition-colors duration-200 hover:text-[#d4af37]"
        >
          www.hetrechtepad.nl
        </a>
      </footer>
    </>
  )
}
