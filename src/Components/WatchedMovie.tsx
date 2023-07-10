function WatchedMovie(props: any) {
  return (
    <li key={props.movie.imdbID}>
      <img src={props.movie.Poster} alt={`${props.movie.Title} poster`} />
      <h3>{props.movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{props.movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{props.movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{props.movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
export default WatchedMovie;
