import { Config } from 'tailwindcss'

export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: ['Inter', 'Avenir', 'Helvetica', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
    },
  },
  plugins: [],
} satisfies Config
