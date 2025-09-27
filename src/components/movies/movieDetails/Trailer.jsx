import { useGetVideosByIdQuery } from "../../../api/moviesApi";
import { useContext } from "react";
import MovieContext from "./MovieDetailsContext";

const Trailer = () => {
  const { id, type } = useContext(MovieContext);
  const { data, isLoading, error } = useGetVideosByIdQuery({ type, id });

  if (isLoading) return <p className="text-white">Loading trailer...</p>;
  if (error) return <p className="text-red-500">Error fetching trailer 😥</p>;

  const trailer = data.results?.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  );

  if (!trailer) return <p className="text-white">No trailer available 😢</p>;

  return (
    <div className="w-[90%] mx-auto mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Trailer</h2>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Trailer;
