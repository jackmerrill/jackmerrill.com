import { defineCollection, z } from "astro:content";

const workCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      link: z.string().optional(),
    }),
});

export const collections = {
  work: workCollection,
};
