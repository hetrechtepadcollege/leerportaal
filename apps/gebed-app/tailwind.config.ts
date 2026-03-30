import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1f294d',
          dim: 'rgba(31, 41, 77, 0.08)',
          border: 'rgba(31, 41, 77, 0.12)',
          dark: '#172540',
        },
        gold: {
          DEFAULT: '#d4af37',
          bg: 'rgba(212, 175, 55, 0.10)',
          border: 'rgba(212, 175, 55, 0.32)',
        },
        bg: '#f9f8f6',
        card: '#ffffff',
        hrpc: {
          text: '#1c2340',
          muted: '#5c6e8a',
          border: 'rgba(31, 41, 77, 0.09)',
        },
        // Rakat type colors
        rakat: {
          fard: '#1a7a45',
          'soenna-mua': '#1a3a8a',
          'soenna-ghayr': '#4f8fd4',
          wajib: '#c96a00',
          nafl: '#b89000',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 4px rgba(31, 41, 77, 0.06), 0 4px 16px rgba(31, 41, 77, 0.07)',
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}

export default config
