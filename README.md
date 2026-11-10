# Emanuele Ragusi – Personal Website

[![Live site](https://img.shields.io/badge/live-emanueleragusi.github.io-2563eb?style=flat-square)](https://emanueleragusi.github.io)
[![Hosted on GitHub Pages](https://img.shields.io/badge/hosted%20on-GitHub%20Pages-0f172a?style=flat-square&logo=github)](https://pages.github.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Personal website of **Emanuele Ragusi**, Management Engineering student at Politecnico di Torino, with a focus on process improvement, AI automation and technology.

🔗 **https://emanueleragusi.github.io**

## Overview

A single-page portfolio presenting my profile, selected projects, education and international experience, skills and languages, and community involvement. The site is built as static HTML styled with Tailwind CSS and needs no runtime framework.

**Sections:** About · Selected projects · Education & international experience · Skills & languages · Community & volunteering

## Features

- Responsive layout for mobile and desktop
- Light/dark mode toggle, remembered via `localStorage`
- Scroll progress bar and reveal-on-scroll animations (`IntersectionObserver`), with `prefers-reduced-motion` support
- Self-hosted Inter and JetBrains Mono fonts (no external font requests)
- Accessible controls (ARIA labels, semantic structure)
- CV on request via pre-filled email or WhatsApp message
- Legal notice and privacy policy pages

## Tech stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) 3.4.17 (class-based dark mode, custom theme tokens via CSS variables)
- Vanilla JavaScript
- GitHub Pages for hosting

## Project structure

```text
.
├── index.html            # Main page
├── legal-notice.html
├── privacy.html
├── photo.jpg
├── src/
│   └── input.css         # Tailwind entry point and custom styles
├── assets/
│   ├── css/styles.css    # Compiled and minified CSS (generated)
│   ├── js/main.js        # Theme toggle, progress bar, reveal animations, CV links
│   └── fonts/            # Inter and JetBrains Mono (woff2) with licenses
├── tailwind.config.js
└── package.json
```


## Contact

- Email: emanueleragusi@proton.me
- GitHub: [@emanueleragusi](https://github.com/emanueleragusi)

## License

© 2026 Emanuele Ragusi. All rights reserved. Fonts are licensed under the SIL Open Font License (see `assets/fonts/`).
