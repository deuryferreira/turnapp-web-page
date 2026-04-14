import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    authorRole: z.string(),
    authorAvatar: z.string(),
    excerpt: z.string(),
    content: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
