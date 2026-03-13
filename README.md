# Transparently

La burocrazia italiana, spiegata.

Transparently e un sito editoriale costruito con Astro per spiegare in linguaggio chiaro temi di burocrazia, diritto del lavoro, identita digitale e servizi pubblici italiani, con rimandi a fonti ufficiali.

## Stack

- Astro 5.18.1
- Tailwind CSS 4.2.1
- TypeScript
- Astro Content Collections con file Markdown
- Deploy statico su Vercel

## Avvio locale

```bash
npm install
npm run dev
```

Build di produzione:

```bash
npm run build
```

## Struttura

```text
.
├── astro.config.mjs
├── package.json
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── articoli/
│   │   └── glossario/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── src/content.config.ts
├── tailwind.config.mjs
├── tsconfig.json
└── vercel.json
```

## Note

- Le collection Astro sono definite in `src/content.config.ts`.
- Il footer usa come placeholder il repository `https://github.com/davide-colombo/transparently`.
