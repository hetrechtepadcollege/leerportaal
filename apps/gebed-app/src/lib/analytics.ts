interface GoatCounter {
  count: (opts: { path: string }) => void
}

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

/** GoatCounter event tracker — no-op if the script hasn't loaded yet. */
export function trackEvent(path: string): void {
  if (typeof window !== 'undefined' && window.goatcounter) {
    window.goatcounter.count({ path })
  }
}
