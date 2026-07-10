import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

function cleanId({ entry }: { entry: string; base: URL; data: Record<string, unknown> }) {
  return entry.replace(/\.(md|mdx)$/, '');
}

const logs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/logs", generateId: cleanId }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const notebook = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notebook", generateId: cleanId }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { logs, notebook };
