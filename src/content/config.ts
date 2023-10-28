import { z, defineCollection } from 'astro:content';

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
  }),

 });

export const collections = {
  'thoughts': thoughtsCollection,
};

