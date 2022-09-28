module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorTheme: {
          "primary": "#EEBD3F",
          
 "secondary": "#D926A9",
          
 "accent": "#1FB2A6",
          
 "neutral": "#191D24",
          
 "base-100": "#f5f5f4",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

