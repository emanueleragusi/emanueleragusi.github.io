module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: '#0f172a',
        accent: '#2563eb',
        surface: 'var(--surface)',
        panel: 'var(--panel)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
      },
    },
  },
};
