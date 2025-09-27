import { useMemo } from "react";
import MoviesContainer from "../components/movies/MoviesContainer";
import Carousel from "../components/Carousel";
import KidsContainer from "../components/KidsContainer";
import { useGetQuery } from "../api/moviesApi";
import Awards from "../components/Awards";

const Home = () => {
  const { data: movies, isLoading, error } = useGetQuery({ type: "movie" });
  const {
    data: tvShows,
    isLoading: isLoadingTV,
    error: errorTV,
  } = useGetQuery({ type: "tv" });
  const topMovies = useMemo(() => movies?.results?.slice(0, 5) || [], [movies]);

  if (isLoading || isLoadingTV) return <p>Loading movies...</p>;
  if (error) return <p>Error fetching movies: {error.message}</p>;
  if (errorTV) return <p>Error fetching TV shows: {errorTV.message}</p>;

  return (
    <>
      <Carousel data={topMovies} />
      <MoviesContainer
        data={movies || {}}
        contentTitle="Popular Movies"
        type="movie"
      />
      <Awards />

      <KidsContainer />
      <MoviesContainer data={tvShows || {}} contentTitle="Series" type="tv" />
    </>
  );
};

export default Home;
