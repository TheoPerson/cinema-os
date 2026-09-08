import {
  boolean,
  date,
  index,
  integer,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid
} from "drizzle-orm/pg-core";

export const locationTypeEnum = pgEnum("location_type", ["CINEMA", "HOME"]);
export const languageEnum = pgEnum("viewing_language", ["VO", "VOSTFR", "VF", "OTHER"]);

export const movies = pgTable(
  "movies",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    tmdbId: integer("tmdb_id").notNull(),
    imdbId: text("imdb_id"),
    title: text("title").notNull(),
    originalTitle: text("original_title"),
    releaseDate: date("release_date"),
    runtimeMinutes: integer("runtime_minutes"),
    posterPath: text("poster_path"),
    backdropPath: text("backdrop_path"),
    metadata: jsonb("metadata"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    uniqueIndex("movies_tmdb_id_uq").on(table.tmdbId),
    index("movies_imdb_id_idx").on(table.imdbId)
  ]
);

export const libraryEntries = pgTable(
  "library_entries",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id").notNull(),
    movieId: uuid("movie_id").notNull().references(() => movies.id, { onDelete: "cascade" }),
    favorite: boolean("favorite").default(false).notNull(),
    watchlist: boolean("watchlist").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    uniqueIndex("library_user_movie_uq").on(table.userId, table.movieId),
    index("library_watchlist_idx").on(table.userId, table.watchlist),
    index("library_favorite_idx").on(table.userId, table.favorite)
  ]
);

export const viewings = pgTable(
  "viewings",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("user_id").notNull(),
    movieId: uuid("movie_id").notNull().references(() => movies.id, { onDelete: "cascade" }),
    watchedOn: date("watched_on").notNull(),
    locationType: locationTypeEnum("location_type").notNull(),
    language: languageEnum("language").notNull(),
    personalRating: numeric("personal_rating", { precision: 3, scale: 1 }),
    rewatch: boolean("rewatch").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    index("viewings_user_date_idx").on(table.userId, table.watchedOn),
    index("viewings_user_movie_date_idx").on(table.userId, table.movieId, table.watchedOn)
  ]
);
