import MoviesContainer from "../components/movies/MoviesContainer";
import Carousel from "../components/Carousel";
import KidsContainer from "../components/KidsContainer";
import { useGetQuery } from "../api/moviesApi";
import Awards from "../components/Awards";



const Home = () => {
  const { data: movies, isLoading, error } = useGetQuery({type:"movie"});
  
  const { data: tvShows, isLoading: isLoadingTV, error: errorTV} = useGetQuery({type:"tv"});

  if (isLoading || isLoadingTV) return <p>Loading movies...</p>;
  if (error || errorTV) return <p>Error fetching movies 😥</p>;

  

  return (
    <>
      <Carousel data={movies.results.slice(0,5)} />
      <MoviesContainer  data={movies} contentTitle="Popular Movies" type="movie"/>
      <Awards />
     
      <KidsContainer />
      <MoviesContainer  data={tvShows} contentTitle="Series" type="tv" />
    </>
  );
};

export default Home;
