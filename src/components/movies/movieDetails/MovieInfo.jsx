const MovieInfo = ({ movie }) => (
  <div
    className="w-[90%] mt-11 bg-cover bg-center rounded-2xl relative overflow-hidden min-h-[500px] mx-auto"
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
    }}>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>

    <div className="relative z-10 flex flex-col md:flex-row gap-8 p-6 text-white">
      {/* Poster */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-xl shadow-lg max-h-[450px] object-cover"
        />
      </div>

      {/* Info */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold">{movie.title}</h1>
        <p className="text-gray-300 italic mt-1">{movie.tagline}</p>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          {movie.overview}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm md:text-base">
          <p>⭐ Rating: {movie.vote_average}</p>
          <p>📅 Release: {movie.release_date}</p>
          <p>⏳ Runtime: {movie.runtime} min</p>
        </div>

        {/* Genres */}
        <div className="mt-4 flex flex-wrap gap-3">
          {movie.genres?.map((genre) => (
            <span
              key={genre.id}
              className="bg-blue-600/70 px-3 py-1 rounded-full text-xs md:text-sm">
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Production Companies */}
    <div className="relative z-10 mt-6 p-6 flex flex-wrap gap-6 justify-center">
      {movie.production_companies?.map((company) =>
        company.logo_path ? (
          <img
            key={company.id}
            src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
            alt={company.name}
            className="h-10 md:h-14 object-contain bg-white/10 rounded-lg p-2"
          />
        ) : (
          <span
            key={company.id}
            className="text-gray-400 text-xs md:text-sm italic">
            {company.name}
          </span>
        )
      )}
    </div>
  </div>
);

export default MovieInfo;
