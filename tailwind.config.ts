import { Config } from 'tailwindcss'

export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Avenir', 'Helvetica', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config
