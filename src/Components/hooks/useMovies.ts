import { useEffect, useState } from "react";
import { SearchedMovie } from "../Interfaces";

export function useMovies(query: string) {
  const [searchedMovies, setSearchedMovies] = useState<SearchedMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://www.omdbapi.com/?apikey=c98c0479&s=${query}`, { signal: controller.signal });
        if (!res.ok) throw new Error("Something went wrong while fetching movies..");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found!");
        setSearchedMovies(data.Search);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setSearchedMovies([]);
      setError("");
      return;
    }
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { searchedMovies, isLoading, error };
}
