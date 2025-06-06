// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `loader` and `schema` for each collection
const backpacking = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/backpacking" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    since: z.date(),
    until: z.date(),
    elevation: z.number(),
    distance: z.number(),
    description: z.string(),
    author: z.string(),
    youtube: z.optional(z.string()),
    image: z.object({
      src: image(),
      alt: z.string()
    }),
    gpx: z.optional(z.string()),
    strava: z.optional(z.array(z.string())),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = { backpacking };