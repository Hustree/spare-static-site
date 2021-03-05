const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1200px"
      }
    },
    screens: {
      'sm': {'min':'640px'},
      'md': {'min':'768px'},
      'lg': {'min':'1024px'},
      'xl': {'min':'1280px'},
      '2xl': {'min':'1300px'},
      '3xl': {'min':'1600px'},
      '4xl': {'min':'1920px'},
    },
    extend: {
      fontFamily: {
        'source-pro': ['var(--spare-font-family-primary)', 'sans-serif', ...defaultTheme.fontFamily.sans],
        'noto-sans': ['var(--spare-font-family-secondary)', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'spare-primary': 'var(--spare-color-primary)',
        'spare-secondary': 'var(--spare-color-secondary)',
        'spare-tertiary': 'var(--spare-color-tertiary)',
        'spare-red-dark': 'var(--spare-color-red-dark)',
        'spare-red-light': 'var(--spare-color-red-light)',
        'spare-yellow-dark': 'var(--spare-color-yellow-dark)',
        'spare-yellow-light': 'var(--spare-color-yellow-light)',
        'spare-orange-dark': 'var(--spare-color-orange-dark)',
        'spare-orange-light': 'var(--spare-color-orange-light)',
        'spare-blue-dark': 'var(--spare-color-blue-dark)',
        'spare-blue-light': 'var(--spare-color-blue-light)',
        'spare-green-dark': 'var(--spare-color-green-dark)',
        'spare-green-light': 'var(--spare-color-green-light)',
        'spare-green-lighter': 'var(--spare-color-green-lighter)',
        'spare-gray-dark': 'var(--spare-color-spare-gray-dark)',
        'spare-gray-light': 'var(--spare-color-spare-gray-light)',
      },
      borderRadius: {},
      boxShadow: {},
      zIndex: {}
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    padding: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    container: [],
  }
}
