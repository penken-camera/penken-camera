import typography from "@tailwindcss/typography";

export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            lineHeight: "1.8",
            fontSize: "1.05rem",
            a: {
              color: "#2563eb",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h1: {
              fontWeight: "700",
              fontSize: "2.25rem",
            },
            h2: {
              fontWeight: "600",
              fontSize: "1.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
