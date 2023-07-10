import { useState } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import SearchedMoviesBox from "./Components/SearchedMoviesBox";
import WatchedMoviesBox from "./Components/WatchedMoviesBox";
import SearchBar from "./Components/UI/SearchBar";
import ResultsNumber from "./Components/UI/ResultsNumber";
import SearchedMovies from "./Components/SearchedMovies";
import WatchedMovies from "./Components/WatchedMovies";
import Loader from "./Components/UI/Loader";
import ErrorMessage from "./Components/UI/ErrorMessage";
import WatchingSummary from "./Components/WatchingSummary";
import SelectedMovieDetails from "./Components/SelectedMovieDetails";
import { WatchedMovie } from "./Components/Interfaces";
import { useMovies } from "./Components/hooks/useMovies";

function App() {
  const [watchedMovies, setWatchedMovies] = useState<WatchedMovie[]>([]);
  const [query, setQuery] = useState("");
  const { searchedMovies, isLoading, error } = useMovies(query);
  const [selectedMovieId, setSelectedMovieId] = useState("");

  const handleQueryChange = (query: string) => setQuery(query);
  const handleCloseMovie = () => setSelectedMovieId("");
  const handleSelectMovie = (id: string) => setSelectedMovieId((selectedMovieId) => (selectedMovieId === id ? "" : id));
  const handleAddWatchedMovie = (watchedMovie: WatchedMovie) => setWatchedMovies((watchedMovies) => [...watchedMovies, watchedMovie]);

  return (
    <>
      <NavBar>
        <SearchBar query={query} onQueryChange={handleQueryChange} />
        <ResultsNumber value={searchedMovies.length} />
      </NavBar>
      <main className="main">
        <SearchedMoviesBox>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && <SearchedMovies movies={searchedMovies} onSelectMovie={handleSelectMovie} />}
        </SearchedMoviesBox>
        <WatchedMoviesBox>
          {selectedMovieId ? (
            <SelectedMovieDetails key={Math.random()} onCloseMovie={handleCloseMovie} onWatchMovie={handleAddWatchedMovie} selectedMovieId={selectedMovieId} watchedMovies={watchedMovies} />
          ) : (
            <>
              <WatchingSummary movies={watchedMovies} />
              <WatchedMovies movies={watchedMovies} />
            </>
          )}
        </WatchedMoviesBox>
      </main>
    </>
  );
}
export default App;
