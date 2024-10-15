/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        bgDarkBlue: '#0D111B',
        bgLightBlue: '#27324B',
        darkerBlue: '#1C2434',
        darkBlue: '#0A0F23',
        chartBlue: '#36A2EB',
        chartYellow: '#FFCE56',
        chartGreen: '#4BC0C0',
        chartRed: '#FF6384',
        white: '#FFFFFF',
        accentPurple: '#784FFE',
        lightBlue: '#7AABFF',
        cyan: '#00D2FF',
        lightGray: '#A1A7C1',
        green: '#12C09A',
        greenLight: '#12c05a',
        red: '#E34A6F',
        redLight: '#e34a4a',
        textGrey: '#D1D5DB',

        bgLightGrey: '#f3f6fa', // Lighter background with a slight bluish tone
        bgDarkGrey: '#dce3eb', // Soft neutral gray for containers or sections
        darkerGrey: '#e6ebf2', // A darker cool gray that contrasts well with bgLightGrey

        darkGrey: '#6a7486', // Muted dark gray for subtle text and elements
        textDarkGrey: '#2a343f', // Lighter deep dark gray for high-contrast text

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
