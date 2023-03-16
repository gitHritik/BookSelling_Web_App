module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { left: "0" },
          "100%": { left: "-246%" },
        },
        wiggle: {
          "0%": { transform: "rotate(270deg)" },

          "70%": { transform: "rotate(0deg)" },
          "100%": { transform: "none" },
        },

        fade: {
          "0%": {
            opacity: "0",
            transform: "translateY(45px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
      },

      animation: {
        marquee: "marquee 8s linear finite",
        wiggle: "wiggle 0.4s ease-in-out 1",
        fade: "fade 0.5s ease",
      },
      animationPlayState: {
        // defaults to these values

        paused: "paused",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
