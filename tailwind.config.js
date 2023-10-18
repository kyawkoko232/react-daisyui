// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{js,ts,jsx,tsx,html}",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/animation/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    container: {

    },
    extend: {
      spacing: {
        'mobile': '1rem',
      },

      fontFamily: {
        'roboto': ['Roboto', 'Padauk'],
        'poppins': ['Poppins', 'Padauk']
      },
      fontSize: {
      },

    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },

  },

  daisyui: {
    themes: true,
    darkTheme: "dark",
    logs: true,
       mytheme: {
          "primary": "#74e02c",
          "secondary": "#a009f2",
          "accent": "#df45f7",
          "neutral": "#1c1b22",
          "base-100": "#323e49",
          "info": "#88ddf7",
          "success": "#29c285",
          "warning": "#e4c111",
          "error": "#fb4c46",
        },
  },

  plugins: [require("daisyui")],
}