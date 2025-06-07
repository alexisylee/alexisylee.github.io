/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    prefix: "",
    theme: {
      container: {
        center: true,
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          // Dracula Theme Colors
          'd-background': '#282a36',
          'd-foreground': '#f8f8f2',
          'darker' : '#252526',
          'dracula-comment': '#6272a4',
          'selection': '#44475a',
          'dracula-purple': '#bd93f9',
          'dracula-pink': '#ff79c6',
          'dracula-green': '#50fa7b',
          'cyan': '#8be9fd',
          'dracula-yellow': '#f1fa8c',
          'dracula-orange': '#ffb86c',
          'dracula-red': '#ff5555',
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "typing": {
            "0%": { width: "0" },
            "100%": { width: "100%" }
          },
          "blink": {
            "0%, 100%": { borderColor: "transparent" },
            "50%": { borderColor: "hsl(var(--foreground))" }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "typing": "typing 3.5s steps(40, end), blink .75s step-end infinite",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }