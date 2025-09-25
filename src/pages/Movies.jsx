import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetQuery, useGetByGenreQuery,useSearchQuery } from "../api/moviesApi.js";
import MovieCard from "../components/movies/MovieCard.jsx";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Search from "../components/movies/Search.jsx";

const MAX_PAGE = 500;
const Movies = () => {
  let { type } = useParams();
  const [page, setPage] = useState(1);
  const [genreId, setGenreId] = useState(type === "animation" ? 16 : "");
  const [movieTitle, setMovieTitle] = useState("");

  if (type === "animation") {
    type = "movie";
  }

  const normal = useGetQuery({ type, page });
  const byGenre = useGetByGenreQuery({ type, genreId, page });
  const search = useSearchQuery({type, movieTitle});

 
  let movies;
  if (movieTitle) {
    movies = search.data;
  } else if (genreId) {
    movies = byGenre.data;
  } else {
    movies = normal.data;
  }

  const isLoading = normal.isLoading || byGenre.isLoading || search.isLoading;
  const error = normal.error || byGenre.error || search.error;

  const goToPage = (p) => {
    if (p >= 1 && p <= MAX_PAGE) setPage(p);
  };

  if (isLoading) return <p>Loading movies...</p>;
  if (error) return <p>Error fetching movies 😥</p>;

  return (
    <div className="w-[100%] flex flex-col items-center">
      <Search type={type} setGenreId={setGenreId} setMovieTitle={setMovieTitle} />
      <div className="w-[100%] flex flex-col items-center mt-8">
        <h1 className="text-3xl font-light">
          {type === "movie" ? "Movies" : type === "tv" ? "Series" : "not found"}
        </h1>

        <div className="w-[90%] h-auto flex flex-wrap justify-around mt-8">
          {movies?.results?.length > 0 ? (
            movies.results.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                url={movie.poster_path}
                title={movie.title || movie.name}
                type={type}
              />
            ))
          ) : (
            <p>Not Found</p>
          )}
        </div>

        {!movieTitle && ( 
          <div className="flex items-center gap-2 flex-wrap justify-center mt-10">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className="cursor-pointer text-2xl"
            >
              <FaArrowCircleLeft />
            </button>

            {Array.from({ length: 10 }, (_, i) => page + i)
              .filter((pageNum) => pageNum <= MAX_PAGE)
              .map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={
                    pageNum === page
                      ? "font-bold bg-blue-600 p-1.5 rounded-full"
                      : "cursor-pointer"
                  }
                >
                  {pageNum}
                </button>
              ))}

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === MAX_PAGE}
              className="cursor-pointer  text-2xl"
            >
              <FaArrowCircleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default Movies;