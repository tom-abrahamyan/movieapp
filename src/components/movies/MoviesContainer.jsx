import { useNavigate } from "react-router";

import MovieCard from "./MovieCard";

const MoviesContainer = ({ data, contentTitle = "Movies", type }) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(`/${type}`);
  };
  return (
    <div className="w-[90%] mt-10 flex flex-col items-center">
      <div className="w-[98%] flex justify-between items-center">
        <h2
          className="w-[150px] font-bold 
    text-center p-2.5  rounded-t-full bg-cyan-400 shadow-[0px_0px_13px_1px_rgba(0,233,255,1)]">
          {contentTitle}
        </h2>

        <button onClick={goTo} className="text-cyan-400 cursor-pointer">
          see all →
        </button>
      </div>
      <div className="w-[100%] flex justify-around flex-wrap p-2  shadow-[0px_0px_13px_1px_rgba(0,233,255,1)] rounded-2xl">
        {data.results.slice(0, 5).map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            url={movie.poster_path}
            title={movie.title || movie.name}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
