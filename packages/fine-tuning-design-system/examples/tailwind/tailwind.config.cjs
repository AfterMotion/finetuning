/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./**/*.html', './**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          amber: {
            DEFAULT: '#F09320',
            50: 'var(--color-amber-50)',
            500: '#F09320',
            600: '#D47911',
            700: '#A85A09',
          },
          teal: {
            DEFAULT: '#4694B1',
            400: '#6BAEC6',
            500: '#4694B1',
            700: '#2B5E70', /* Safe text teal */
            800: '#1C4453',
          },
        },
        obsidian: {
          DEFAULT: '#070D18',
          900: '#0F172A',
          950: '#070D18',
        },
        surface: {
          canvas: 'var(--color-bg-canvas)',
          base: 'var(--color-bg-surface)',
          elevated: 'var(--color-bg-surface-elevated)',
          card: 'var(--color-bg-surface-card)',
        },
        fg: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
          info: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        glowAmber: '0 0 28px rgba(240, 147, 32, 0.28)',
        glowTeal: '0 0 28px rgba(70, 148, 177, 0.28)',
      }
    },
  },
  plugins: [],
};

