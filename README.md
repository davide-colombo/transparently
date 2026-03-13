# Transparently

**La burocrazia italiana, spiegata.**

Transparently è una guida civica indipendente che spiega la burocrazia italiana in linguaggio chiaro, con rimandi verificabili alle fonti ufficiali. Il progetto nasce dall'osservazione che le informazioni sui diritti dei lavoratori, sull'identità digitale, sul fisco e sulla sanità pubblica esistono — ma sono disperse in siti istituzionali difficili da navigare e scritte in un linguaggio che esclude chi non è già esperto.

Il sito si rivolge in particolare ai giovani italiani alle prime esperienze lavorative: chi firma il primo contratto, chi attiva SPID per la prima volta, chi deve capire cosa sono il TFR o il CCNL senza avere un avvocato in famiglia.

## Principi

Ogni contenuto pubblicato su Transparently rispetta tre regole:

1. **Verificabilità** — ogni articolo cita le fonti ufficiali (leggi su normattiva.it, siti degli enti pubblici, documenti ministeriali) con link diretti.
2. **Chiarezza** — i termini tecnici, gli acronimi e il gergo burocratico sono sempre spiegati. Il sito include un glossario navigabile e tooltip inline che mostrano la definizione di un termine al click, senza interrompere la lettura.
3. **Indipendenza** — Transparently non è affiliato con alcuna istituzione governativa, partito politico o azienda.

## Funzionalità

- **Articoli tematici** in prosa, organizzati per area (contratti di lavoro, identità digitale, fisco e previdenza, sanità).
- **Glossario** raggruppato per categoria, con definizioni brevi e link alle fonti ufficiali.
- **Tooltip inline** — cliccando su un termine tecnico evidenziato in un articolo, un popup mostra la definizione e il link alla pagina del glossario, senza lasciare la pagina.
- **Fonti ufficiali** citate in fondo a ogni articolo con link completi.

## Stack tecnico

| Componente | Tecnologia |
|---|---|
| Framework | Astro 5.x |
| Styling | Tailwind CSS 4.x |
| Contenuti | MDX + Markdown con frontmatter YAML |
| Tipografia | Instrument Serif (titoli) + IBM Plex Sans (corpo) |
| Deploy | Vercel (statico) |

## Avvio locale

```bash
git clone https://github.com/davide-colombo/transparently.git
cd transparently
npm install
npm run dev
```

Il sito è disponibile su `http://localhost:4321`.

Build di produzione:

```bash
npm run build
```

Output statico generato in `dist/`.

## Struttura del progetto

```
src/
├── components/       # Componenti Astro (Nav, Footer, T, SourcesSection, ...)
├── content/
│   ├── articoli/     # Articoli in MDX con frontmatter YAML
│   └── glossario/    # Entry glossario in Markdown
├── layouts/          # Layout globale
├── pages/            # Rotte del sito
└── styles/           # CSS globale e configurazione Tailwind
```

## Contribuire contenuti

Transparently è un progetto aperto. Se vuoi segnalare un errore, proporre un nuovo articolo o aggiungere un termine al glossario, apri una issue su GitHub.

Prima di contribuire, leggi le note sulla licenza qui sotto.

## Licenza

Il codice sorgente è distribuito sotto [licenza MIT](./LICENSE).

I contenuti editoriali (articoli, glossario, testi) sono distribuiti sotto [Creative Commons BY-NC-SA 4.0](./CONTENT_LICENSE).
