import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsPhone: '320px',
        smPhone: '360px',
        basePhone: '400px',
        lgPhone: '440px',
        xlPhone: '480px',
        smTablet: '540px',
        baseTablet: '760px',
        lgTablet: '980px',
        laptop: '1020px',
        desktop: '1440px',
      },
      colors: {
        primary: {
          50: '--theme-50',
          100: '--theme-100',
          200: '--theme-200',
          300: '--theme-300',
          400: '--theme-400',
          500: '--theme-500',
          600: '--theme-600',
          700: '--theme-700',
          800: '--theme-800',
          900: '--theme-900',
          950: '--theme-950',
        },
        backgroundImage: {
          // "image": "url('/image.png')",
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        gloock: ['Gloock', 'serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        jost: ['Jost', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        plexSerif: ['IBM Plex Serif', 'serif'],
        radio: ['Radio Canada', 'sans-serif'],
        roboto: ['Roboto Flex', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        splineSansk: ['Spline Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
