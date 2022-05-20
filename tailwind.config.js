module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#a5b4fc",
          "secondary": "#f43f5e",
          "accent": "#4ade80",
          "neutral": "#292524",
          "base-100": "#ffffff",
          "info": "#38bdf8",
          "success": "#fcd34d",
          "warning": "#4b5563",
          "error": "#F87272",
        },
      },
      {
        dark: {
          "primary": "#a5b4fc",
          "secondary": "#cc3ed6",
          "accent": "#f9c2b8",
          "neutral": "#1F252D",
          "base-100": "#4b5563",
          "info": "#4ECAE9",
          "success": "#0C5A4C",
          "warning": "#ffffff",
          "error": "#F64C51",
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
