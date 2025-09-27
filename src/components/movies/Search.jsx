import { useState } from "react";
import { tvGenres, movieGenres } from "../../api/genres";
import moviesWorldImage from "../../assets/moviesWorldImage.jpg";

const Search = ({ type, setGenreId, setMovieTitle }) => {
  const [term, setTerm] = useState("");
 const [activeGenre, setActiveGenre] = useState(""); 

  let genres = [];
  if (type === "movie") {
    genres = movieGenres;
  } else {
    genres = tvGenres;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieTitle(term);
    setTerm("");
  };
  const handleGenreClick = (id) => {
    setGenreId(id);
    setActiveGenre(id); 
  };
  return (
    <div
      className="relative w-[90%]  min-h-[350px] rounded-2xl  mt-11 bg-cover  bg-bottom flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${moviesWorldImage})` }}>
      <div className="absolute -scale-z-50 inset-0 bg-black/20 backdrop-blur-xs"></div>
      <form
        onSubmit={handleSubmit}
        className="z-10 flex  flex-wrap justify-center items-center">
        <input
          className="sm:w-[100%] md:w-[250px] p-3"
          type="text"
          placeholder="Search movies..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="bg-blue-600/70 p-4 rounded">search</button>
      </form>
      <div className=" z-10  w-[80%] mt-12 flex flex-wrap justify-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-xs md:text-sm cursor-pointer ${
            activeGenre === "" ? "bg-orange-500" : "bg-blue-600/70"
          }`}
          onClick={() => handleGenreClick("")}>
          All
        </span>
        {genres.map((genre) => (
          <span
            key={genre.id}
            className={`px-3 py-1 rounded-full text-xs md:text-sm cursor-pointer ${
              activeGenre === genre.id ? "bg-orange-500" : "bg-blue-600/70"
            }`}
            onClick={() => handleGenreClick(genre.id)}>
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Search;
