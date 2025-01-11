// const libraryVanSchema = z.object({
//   libraryVanId: z.string().min(1, "Library Van ID is required."),
//   stock: z.number().int().min(0, "Stock must be a non-negative integer."),
// });

import { z } from "zod";
import { libraryVanSchema } from "./libraryVanSchema";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required."),
  author: z.string().min(1, "Author is required."),
  description: z.string().min(1, "Description is required."),
  libraryVans: z.array(libraryVanSchema).optional(),
  price: z.number().positive("Price must be a positive number."),
  publishedYear: z
    .string()
    .regex(/^\d{4}$/, "Published year must be a valid year in YYYY format."),
  ISBN: z.string().optional(),
  language: z.string().min(1, "Language is required."),
});
