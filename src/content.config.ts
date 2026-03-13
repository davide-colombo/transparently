import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  articoli: defineCollection({
    loader: glob({
      base: './src/content/articoli',
      pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      updated: z.date().optional(),
      verified: z.date().optional(),
      verification_notes: z.string().optional(),
      regional_scope: z.string().nullable().default(null),
      category: z.enum([
        'contratti-lavoro',
        'identita-digitale',
        'fisco-previdenza',
        'sanita',
      ]),
      tags: z.array(z.string()).default([]),
      sources: z.array(
        z.object({
          name: z.string(),
          url: z.string().url(),
        }),
      ).default([]),
      difficulty: z.enum(['base', 'intermedio', 'avanzato']).default('base'),
      draft: z.boolean().default(false),
    }),
  }),
  glossario: defineCollection({
    loader: glob({
      base: './src/content/glossario',
      pattern: '**/*.md',
    }),
    schema: z.object({
      term: z.string(),
      definition: z.string(),
      relatedArticles: z.array(z.string()).default([]),
      sources: z.array(
        z.object({
          name: z.string(),
          url: z.string().url(),
        }),
      ).default([]),
      category: z.enum([
        'contratti-lavoro',
        'identita-digitale',
        'fisco-previdenza',
        'sanita',
        'generale',
      ]),
    }),
  }),
};
