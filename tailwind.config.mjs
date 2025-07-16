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
        light: {
          css: {
            color: "#1f2937", // gray-800
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
              color: "#111827", // gray-900
            },
            h2: {
              fontWeight: "600",
              fontSize: "1.5rem",
              color: "#1f2937", // gray-800
            },
          },
        },
        dark: {
          css: {
            color: "#f9fafb", // VERY bright: gray-50 equivalent
            lineHeight: "1.8",
            fontSize: "1.05rem",
            a: {
              color: "#bfdbfe", // blue-200
              "&:hover": {
                color: "#93c5fd", // blue-300
              },
            },
            h1: {
              color: "#ffffff", // white
              fontWeight: "700",
              fontSize: "2.25rem",
            },
            h2: {
              color: "#f3f4f6", // gray-100
              fontWeight: "600",
              fontSize: "1.5rem",
            },
            h3: {
              color: "#e5e7eb", // gray-200
            },
            code: {
              color: "#f9a8d4", // pink-300
              backgroundColor: "#334155", // slate-700
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
            },
            pre: {
              color: "#f8fafc", // slate-50
              backgroundColor: "#1e293b", // slate-800
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
            blockquote: {
              color: "#e5e7eb", // gray-200
              borderLeftColor: "#64748b", // slate-500
              fontStyle: "italic",
            },
            strong: {
              color: "#ffffff",
            },
            hr: {
              borderColor: "#334155", // slate-700
            },
            "ul > li::marker": {
              color: "#cbd5e1", // slate-300
            },
            "ol > li::marker": {
              color: "#cbd5e1",
            },
            figcaption: {
              color: "#9ca3af", // gray-400
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
