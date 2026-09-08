import { z } from "zod";

export const logViewingSchema = z.object({
  tmdbId: z.number().int().positive(),
  watchedOn: z.iso.date(),
  locationType: z.enum(["CINEMA", "HOME"]),
  language: z.enum(["VO", "VOSTFR", "VF", "OTHER"]),
  personalRating: z.number().min(0).max(10).multipleOf(0.1).optional(),
  rewatch: z.boolean().default(false)
});

export type LogViewingInput = z.infer<typeof logViewingSchema>;
