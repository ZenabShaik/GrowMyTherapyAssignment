/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        surface: "#DCDDE4",        // main lavender-grey
        surfaceSoft: "#C9CBD6",    // secondary sections
        card: "#F7F7FA",           // cards / inputs

        // Text
        heading: "#3F4358",        // primary headings
        body: "#5C6076",           // paragraphs
        muted: "#2F2F3A",          // footer/legal

        // Accents
        accent: "#E6D89A",         // CTA background
        accentBorder: "#C6B874",   // CTA border
        divider: "#B5B7C3",        // lines / separators
      },
    },
  },
  plugins: [],
};
