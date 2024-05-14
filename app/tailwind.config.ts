import { withShurikenUI } from '@shuriken-ui/tailwind'
import { join } from 'pathe'
import defaultTheme from 'tailwindcss/defaultTheme'

/**
 * This is the Tailwind config file for the demo.
 * It extends the default config from @shuriken-ui/tailwind
 *
 * You can add/override your own customizations here.
 */
export default withShurikenUI({
  content: [join(__dirname, `/utils/**/*.ts`)], // Parse the utils folder for demo
  theme: {
    // Custom fonts
    fontFamily: {
      sans: ['Inter Variable', 'sans-serif'],
      heading: ['Inter Variable', 'sans-serif'],
      alt: ['Karla Variable', 'sans-serif'],
      mono: ['Fira Code Variable', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      // Custom colors
      colors: {
        // Custom color shades generate with https://www.tints.dev/brand/4E3CB9
        mauve: {
          50: '#ECEFF9', // Ajustado a un tono más claro
          100: '#CFD8F8', // Ajustado a un tono más claro
          200: '#A6B8F2', // Ajustado hacia el azul indigo
          300: '#7F94EB', // Ajustado hacia el azul indigo
          400: '#4F6DDF', // Ajustado hacia el azul indigo
          500: '#2E4EB9', // Ajustado hacia el azul indigo
          600: '#1E3F92', // Ajustado hacia el azul indigo
          700: '#142C70', // Ajustado hacia el azul indigo
          800: '#0D1D49', // Ajustado hacia el azul indigo
          900: '#080E27', // Ajustado hacia el azul indigo
          950: '#03050F', // Ajustado hacia el azul indigo
        },
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950) / <alpha-value>)',
        },
        muted: {
          50: 'rgb(var(--color-muted-50) / <alpha-value>)',
          100: 'rgb(var(--color-muted-100) / <alpha-value>)',
          200: 'rgb(var(--color-muted-200) / <alpha-value>)',
          300: 'rgb(var(--color-muted-300) / <alpha-value>)',
          400: 'rgb(var(--color-muted-400) / <alpha-value>)',
          500: 'rgb(var(--color-muted-500) / <alpha-value>)',
          600: 'rgb(var(--color-muted-600) / <alpha-value>)',
          700: 'rgb(var(--color-muted-700) / <alpha-value>)',
          800: 'rgb(var(--color-muted-800) / <alpha-value>)',
          900: 'rgb(var(--color-muted-900) / <alpha-value>)',
          950: 'rgb(var(--color-muted-950) / <alpha-value>)',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.65s linear infinite',
      },
    },
  },
})
