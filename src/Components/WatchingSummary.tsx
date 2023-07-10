const average = (arr: number[]) => arr.reduce((acc: number, cur: number, i: number, arr: number[]) => acc + cur / arr.length, 0);

function WatchingSummary(props: any) {
  const avgImdbRating = average(props.movies.map((movie: any) => movie.imdbRating));
  const avgUserRating = average(props.movies.map((movie: any) => movie.userRating));
  const avgRuntime = average(props.movies.map((movie: any) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{props.movies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
export default WatchingSummary;
