import ListContainer from "./UI/ListContainer";
import WatchedMovie from "./WatchedMovie";

function WatchedMovies(props: any) {
  return (
    <ListContainer>
      {props.movies.map((movie: any) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ListContainer>
  );
}
export default WatchedMovies;
