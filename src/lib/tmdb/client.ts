import { z } from "zod";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const searchResultSchema = z.object({
  page: z.number(),
  results: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      original_title: z.string(),
      release_date: z.string().optional().default(""),
      poster_path: z.string().nullable(),
      backdrop_path: z.string().nullable(),
      vote_average: z.number()
    })
  )
});

export type TMDBSearchResult = z.infer<typeof searchResultSchema>["results"][number];

function getToken() {
  const token = process.env.TMDB_ACCESS_TOKEN;
  if (!token) throw new Error("TMDB_ACCESS_TOKEN is required");
  return token;
}

export async function searchTMDBMovies(query: string) {
  const url = new URL(`${TMDB_BASE_URL}/search/movie`);
  url.searchParams.set("query", query);
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("language", "en-US");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      accept: "application/json"
    },
    next: { revalidate: 60 * 30 }
  });

  if (!response.ok) {
    throw new Error(`TMDB search failed: ${response.status}`);
  }

  return searchResultSchema.parse(await response.json()).results;
}

export function tmdbPosterUrl(path: string | null, size = "w500") {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
}
