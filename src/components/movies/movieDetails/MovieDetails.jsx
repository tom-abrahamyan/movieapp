import { useParams } from "react-router";
import { useGetByIdQuery } from "../../../api/moviesApi";
import MovieContext from "./MovieDetailsContext";
import SimilarMovies from "./SimilarMovies";
import Actors from "./Actor";
import MovieInfo from "./MovieInfo";
import Trailer from "./Trailer";

const MovieDetails = () => {
  const { type, id } = useParams();

  const {
    data: movie,
    isLoading: movieLoading,
    error: movieError,
  } = useGetByIdQuery({ type, id });

  if (movieLoading) return <p className="text-white">Loading movies...</p>;
  if (movieError)
    return <p className="text-red-500">Error fetching movies 😥</p>;

  return (
    <>
      <MovieContext.Provider value={{ id: movie?.id, type }}>
        <MovieInfo movie={movie || {}} />
        <Trailer />
        <Actors />
        <SimilarMovies />
      </MovieContext.Provider>
    </>
  );
};

export default MovieDetails;
