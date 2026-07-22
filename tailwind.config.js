/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        km: {
          ink: "#0f1b2d",
          page: "#eef3f8",
          blue: "#1f6bff",
          // Text-weight blue - the vivid blue only clears AA against pure white
          "blue-text": "#0f52d9",
          "blue-dark": "#0a4fd6",
          mint: "#2fe6b0",
          body: "#41505f",
          muted: "#5a6b7e",
          faint: "#64748b",
        },
      },
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        floaty: "floaty 2.4s ease-in-out infinite",
      },
      transitionTimingFunction: {
        km: "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};
