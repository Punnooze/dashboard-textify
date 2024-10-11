/** @type {import('tailwindcss').Config} */
module.exports = {
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
        darkBlue: '#0A0F23',
        darkerBlue: '#1C2434',
        highlightBlue: '#4F86F8',
        white: '#FFFFFF',
        accentPurple: '#784FFE',
        lightBlue: '#7AABFF',
        cyan: '#00D2FF',
        lightGray: '#A1A7C1',
        green: '#12C09A',
        red: '#E34A6F',
        // 'background': '#0c0c0c',
        // 'foreground': '#f0f0f0',
        // 'brand-blue': '#0f62fe',
        // 'darkBackground': "#121212",
        // 'cardBackground': "#1E1E1E",
        // 'primaryText': "#FFFFFF",
        // 'secondaryText': "#B0B0B0",
        // 'accentPurple': "#BB86FC",
        // 'accentTeal': "#03DAC6",
        // 'errorColor': "#CF6679",
      },
    },
  },
  plugins: [],
};
