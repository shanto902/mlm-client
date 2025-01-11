import { z } from "zod";

export const libraryVanSchema = z.object({
  libraryVanId: z.string(),
  status: z
    .enum(["active", "inactive", "in-maintenance"])
    .default("active")
    .optional(),
});
