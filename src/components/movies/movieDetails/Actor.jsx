import { useGetCreditsByIdQuery } from "../../../api/moviesApi";
import { useContext } from "react";
import MovieContext from "./MovieDetailsContext";

const Actors = () => {
  const { id, type } = useContext(MovieContext);
  const { data, isLoading, error } = useGetCreditsByIdQuery({ type, id });

  if (isLoading) return <p className="text-white">Loading actors...</p>;
  if (error) return <p className="text-red-500">Error fetching actors 😥</p>;

  return (
    <div className="w-[90%] mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Cast</h2>
      <div className="flex overflow-x-auto gap-4 pb-4">
        {data.cast?.map((actor, index) => (
          <div
            key={`${actor.id}-${index}`}
            className="min-w-[120px] flex flex-col items-center">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://placehold.co/200x300?text=No+Image"
              }
              alt={actor.name}
              className="w-28 h-36 object-cover rounded-lg mb-2"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/200x300?text=No+Image";
              }}
            />
            <p className="text-white text-sm font-semibold text-center">
              {actor.name}
            </p>
            <p className="text-gray-400 text-xs text-center">
              {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
