import { SearchedMovie as SearchedMovieInterface } from "./Interfaces";

interface SearchedMovieProps {
  movie: SearchedMovieInterface;
  onSelectMovie: Function;
}
function SearchedMovie(props: SearchedMovieProps) {
  return (
    <li key={props.movie.imdbID} onClick={() => props.onSelectMovie(props.movie.imdbID)}>
      <img src={props.movie.Poster} alt={`${props.movie.Title} poster`} />
      <h3>{props.movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{props.movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
export default SearchedMovie;
