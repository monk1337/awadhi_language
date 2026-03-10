# Contributing to Awadhi Website

Thank you for your interest in contributing! This project aims to document and celebrate the Awadhi language and its heritage. Every contribution helps make this resource better for millions of Awadhi speakers and language enthusiasts worldwide.

## How to Contribute

### Reporting Issues

- Use [GitHub Issues](https://github.com/monk1337/awadhi_language/issues) to report bugs or suggest features
- Include screenshots for UI issues
- Describe the expected vs actual behavior
- Mention your browser and device

### Suggesting Content

We especially welcome contributions that:

- Correct historical or linguistic inaccuracies
- Add new data points with credible sources
- Suggest new Awadhi proverbs, folk songs, or cultural references
- Improve translations or transliterations
- Add accessibility improvements

Please open an issue with the **content** label to discuss before submitting.

### Code Contributions

#### Setup

```bash
# Fork and clone
git clone https://github.com/<your-username>/awadhi_website.git
cd awadhi_website

# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev
```

#### Development Workflow

1. **Create a branch** from `master`:
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make your changes** following the conventions below

3. **Test your changes**:
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit** with a clear, concise message:
   ```bash
   git commit -m "Add seasonal festival calendar to culture page"
   ```

5. **Push and open a PR**:
   ```bash
   git push origin feature/your-feature
   ```

#### Code Conventions

- **TypeScript** — All components and data files use TypeScript
- **Tailwind CSS** — Use Tailwind utility classes for styling. Follow the existing color palette (`saffron`, `cream`, `charcoal`, `parchment`, `slate`, `amber`)
- **Component structure** — Place page-specific components in their respective folders under `components/`. Shared/reusable components go in `components/shared/`
- **Data files** — Static content lives in `data/` as typed TypeScript arrays. Keep data separate from components
- **Animations** — Use Framer Motion. Follow existing patterns with `RevealOnScroll` and `ANIMATION_DEFAULTS` from `lib/constants.ts`
- **Images** — Use WebP format, optimized under 200KB. Place in the appropriate `public/images/` subdirectory

#### Project Structure at a Glance

```
app/              → Pages (Next.js App Router)
components/       → React components organized by page/feature
data/             → Static data (songs, proverbs, metrics, etc.)
lib/              → Utilities, constants, font config
types/            → TypeScript interfaces
public/images/    → Optimized WebP images
```

### Adding a New Page

1. Create a directory under `app/` with a `page.tsx`
2. Add the route to the `sections` array in `lib/constants.ts`
3. Use `PageWrapper` for consistent layout
4. Use existing shared components (`SectionHeading`, `Divider`, `PullQuote`, `RevealOnScroll`)

### Adding New Data

1. Create or update a file in `data/`
2. Define a TypeScript interface in `types/index.ts` if needed
3. Import and use in the relevant component

## Content Guidelines

- **Accuracy** — All historical and linguistic claims should be verifiable. Cite sources where possible
- **Neutral tone** — Present information factually. Avoid political framing or charged language
- **Inclusive** — Awadhi belongs to all its speakers. Respect the diversity of the Awadhi-speaking community
- **Bilingual** — When adding Awadhi text, include both Devanagari script and a romanized transliteration

## Pull Request Guidelines

- Keep PRs focused on a single change
- Include a clear description of what changed and why
- Add screenshots for visual changes
- Ensure `npm run build` passes before submitting
- Reference any related issues

## Questions?

Open an issue or reach out to [Lucknow AI Labs](https://lucknowai.github.io/).

Thank you for helping preserve and celebrate Awadhi!
