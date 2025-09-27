import { useGetSimilarByIdQuery } from "../../../api/moviesApi";
import MovieCard from "../MovieCard.jsx";
import { useContext, useMemo } from "react";
import MovieContext from "./MovieDetailsContext";

const SimilarMovies = () => {
  const { id, type } = useContext(MovieContext);

  const {
    data: similarMovies,
    isLoading: similarLoading,
    error: similarError,
  } = useGetSimilarByIdQuery({ type, id });
  const topSimilar = useMemo(() => similarMovies?.results || [], [similarMovies]);

  if (similarLoading) return <p className="text-white">Loading movies...</p>;
  if (similarError)
    return <p className="text-red-500">Error fetching movies 😥</p>;

  return (
    <div className="w-[100%] flex flex-col items-center mt-8">
      <h1 className="text-3xl font-light">Similar Movies</h1>
      <div className="w-[90%] h-auto flex flex-wrap justify-around mt-8">
        {topSimilar.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              url={movie.poster_path}
              title={movie.title || movie.name}
              type={type}
            />
          );
        }) || "Not Found"}
      </div>
    </div>
  );
};

export default SimilarMovies;
