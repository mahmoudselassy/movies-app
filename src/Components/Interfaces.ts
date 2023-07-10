export interface SearchedMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}
export interface WatchedMovie extends SearchedMovie {
  runtime: number;
  imdbRating: number;
  userRating: number;
}
