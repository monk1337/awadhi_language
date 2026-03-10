# Awadhi: The Story of 38 Million Speakers

A comprehensive, interactive website documenting the history, literature, culture, and linguistic heritage of Awadhi, one of North India's oldest literary languages spoken by over 38 million people.

**Live site:** [awadhi.vercel.app](https://awadhi.vercel.app)

## About

Awadhi is the language of the Ramcharitmanas, the Hanuman Chalisa, and some of the most important literary works in Indian history. Yet most people have never heard of it. This website tells that story through data, maps, timelines, and interactive visuals.

### What you'll find

- **Origin Story** — Trace Awadhi from its Prakrit roots through its golden age of literature
- **The Map** — 23 districts across Uttar Pradesh, Nepal's Terai, and a global diaspora from Fiji to South Africa
- **Sound & Script** — What makes Awadhi linguistically distinct from Hindi
- **Literary Giants** — Tulsidas, Jayasi, Kabir, and seven centuries of literary achievement
- **Living Culture** — Folk songs, cuisine, proverbs, and festivals
- **The Data Wall** — Key statistics and demographic data
- **Curiosities** — Awadhi's hidden connections to Bollywood, global religion, and pop culture

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations |
| [Recharts](https://recharts.org/) | 3 | Data visualization |
| [React Simple Maps](https://www.react-simple-maps.io/) | 3 | Geographic maps |
| [Lenis](https://lenis.darkroom.engineering/) | 1 | Smooth scrolling |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Vercel Analytics](https://vercel.com/analytics) | — | Web analytics |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/monk1337/awadhi_language.git
cd awadhi_website

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
awadhi_website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── history/            # Origin Story
│   ├── map/                # Geographic distribution
│   ├── language/           # Sound & Script
│   ├── literary-giants/    # Tulsidas, Jayasi, Kabir
│   ├── culture/            # Folk songs, cuisine, proverbs
│   ├── data/               # Data Wall
│   └── surprises/          # Curiosities
├── components/
│   ├── landing/            # Homepage components
│   ├── timeline/           # History page components
│   ├── map/                # Map visualizations
│   ├── language/           # Linguistics components
│   ├── literary/           # Literary Giants components
│   ├── culture/            # Culture page components
│   ├── data-wall/          # Data visualization components
│   ├── surprises/          # Curiosities components
│   ├── layout/             # Navigation, Footer, etc.
│   └── shared/             # Reusable components
├── data/                   # Static data files (JSON-like TS)
├── lib/                    # Utilities, constants, fonts
├── types/                  # TypeScript type definitions
└── public/images/          # Optimized WebP images
```

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Quick overview:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## Credits

Built by [Lucknow AI Labs](https://lucknowai.github.io/) & Uttar Pradesh AI Labs.

## License

This project is open source under the [MIT License](LICENSE).
