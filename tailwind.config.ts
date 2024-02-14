import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A19C',
        primaryAcent:'#1f6867',
        secondary: '#CCCDCD',
        borderColor:'#004B49'
      },
      backgroundImage:{
        'hero':'url(/images/hero-background.png)',
        'heardware-gradient-bg':'url(/images/gradient-bg.png)',
        'useCase-bg':'url(/images/useCase-bg.png)'
      },
      

    },
  },
  plugins: [],
}
export default config
