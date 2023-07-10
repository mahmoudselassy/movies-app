import { SearchedMovie as SearchedMovieInterface } from "./Interfaces";
import SearchedMovie from "./SearchedMovie";
import ListContainer from "./UI/ListContainer";
interface SearchedMoviesProps {
  movies: SearchedMovieInterface[];
  onSelectMovie: Function;
}
function SearchedMovies(props: SearchedMoviesProps) {
  return (
    <ListContainer>
      {props.movies?.map((movie: any) => (
        <SearchedMovie movie={movie} key={movie.imdbID} onSelectMovie={props.onSelectMovie} />
      ))}
    </ListContainer>
  );
}
export default SearchedMovies;
