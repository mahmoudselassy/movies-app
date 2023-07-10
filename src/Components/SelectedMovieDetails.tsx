import { useEffect, useState } from "react";
import Rating from "./UI/Rating";
import Loader from "./UI/Loader";
import { WatchedMovie } from "./Interfaces";
interface SelectedMovieDetailsProps {
  watchedMovies: WatchedMovie[];
  selectedMovieId: string;
  onWatchMovie: Function;
  onCloseMovie: React.MouseEventHandler<HTMLButtonElement>;
}
function SelectedMovieDetails(props: SelectedMovieDetailsProps) {
  const [movie, setMovie] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRate, setUserRate] = useState(0);
  const isWatched = props.watchedMovies.map((movie: any) => movie.imdbID).includes(props.selectedMovieId);
  const watchedUserRating = props.watchedMovies.find((movie: any) => movie.imdbID === props.selectedMovieId)?.userRating;
  const handleUserRate = (rate: number) => setUserRate(rate);
  const handleWatchMovie = () => {
    props.onWatchMovie({
      imdbID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      runtime: Number(movie.Runtime.replace(" min", "")),
      imdbRating: Number(movie.imdbRating),
      userRating: Number(userRate),
    });
    //setUserRate(0);
  };
  useEffect(() => {
    const fetchSelectedMovie = async () => {
      setIsLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=c98c0479&i=${props.selectedMovieId}`);
      const data = await res.json();
      setIsLoading(false);
      setMovie(data);
    };
    if (props.selectedMovieId) fetchSelectedMovie();
  }, [props.selectedMovieId]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="details">
          <button className="btn-back" onClick={props.onCloseMovie}>
            &larr;
          </button>
          <header>
            <img src={movie.Poster} alt="" />
            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} • {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐️</span>
                {movie.imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            {!isWatched ? (
              <>
                <Rating maxRate={10} onUserRate={handleUserRate} />
                {userRate > 0 && (
                  <button className="btn-add" onClick={handleWatchMovie}>
                    + Add to list
                  </button>
                )}
              </>
            ) : (
              <p>
                You rated with movie {watchedUserRating} <span>⭐️</span>
              </p>
            )}
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>{movie.Actors}</p>
            <p>Directed by. {movie.Director}</p>
          </section>
        </div>
      )}
    </>
  );
}
export default SelectedMovieDetails;
