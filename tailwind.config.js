module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backdropFilter: { // defaults to {}
        'none': 'none',
        'blur-full': 'blur(1)',
      },
      backgroundImage: theme => ({
        'stryx': 'url(/img/Stryx.png)'
      }),
      colors: {
        'tailwind': '#38B2AC',
        'github': '#181717',
        'twitter': '#1DA1F2',
      },
      transitionProperty: {
        'fadeDown': 'height opacity',
        'border': 'border-width border-color'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover']
    }
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
