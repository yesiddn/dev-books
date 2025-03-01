import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
// z -> zod schema es una libreria para definir esquemas de datos

// se define la estructura de los datos que vienen en la colección
const books = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    })
  })
});

export const collections = { books }
