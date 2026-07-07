export default function AppHeader() {
  return (
    <header
      className="w-full text-center px-5 pt-7 pb-[58px] mb-11 border-b border-hrpc-border text-hrpc-text"
      style={{
        backgroundImage:
          'linear-gradient(rgba(31, 41, 77, .045) 1px, transparent 1px), linear-gradient(90deg, rgba(31, 41, 77, .045) 1px, transparent 1px)',
        backgroundColor: '#f9f8f6',
        backgroundSize: '48px 48px, 48px 48px, auto',
      }}
    >
      <a
        href="../../"
        title="Terug naar Leerportaal"
        className="inline-block mx-auto mb-10 rounded-md transition-opacity duration-200 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[6px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/HRPC-logo.webp"
          alt="Het Rechte Pad College"
          className="block mx-auto h-auto opacity-90"
          style={{ width: 'min(360px, 78vw)', filter: 'invert(1)' }}
        />
      </a>
      <h1 className="font-serif text-[clamp(1.5rem,5vw,2rem)] font-bold text-hrpc-text m-0 mb-[0.35rem]">
        Het Gebed
      </h1>
      <p className="font-sans text-[0.9rem] text-hrpc-muted m-0">
        Ontdek en leer alles over het gebed
      </p>
    </header>
  )
}
