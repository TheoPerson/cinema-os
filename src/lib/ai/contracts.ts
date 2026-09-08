import { z } from "zod";

export const aiIntentSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("search"),
    query: z.string().min(1),
    unseenOnly: z.boolean().optional(),
    minImdbRating: z.number().min(0).max(10).optional(),
    maxRuntimeMinutes: z.number().int().positive().optional(),
    genres: z.array(z.string()).optional()
  }),
  z.object({
    kind: z.literal("personal_stats"),
    metric: z.enum([
      "summary",
      "top_directors",
      "top_actors",
      "genres",
      "languages",
      "cinema_vs_home",
      "rewatch_rate"
    ])
  }),
  z.object({
    kind: z.literal("action"),
    action: z.enum([
      "add_to_watchlist",
      "remove_from_watchlist",
      "set_favorite",
      "log_viewing"
    ]),
    tmdbId: z.number().int().positive(),
    payload: z.record(z.string(), z.unknown()).optional()
  })
]);

export type AIIntent = z.infer<typeof aiIntentSchema>;

export type AIInterpretInput = {
  message: string;
  context?: {
    currentMovieIds?: number[];
    summary?: string;
  };
};

export interface AIProvider {
  interpret(input: AIInterpretInput): Promise<AIIntent>;
}
