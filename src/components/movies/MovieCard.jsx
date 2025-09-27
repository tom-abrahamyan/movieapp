import React from "react";
import { useNavigate } from "react-router";

const MovieCard = ({ id, url, title, type }) => {
  const navigate = useNavigate();
  
  const goToDetails = () => {
    navigate(`/moviedetails/${type}/${id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="
      w-[150px] h-auto  
    text-white  
      font-extrabold 
      uppercase 
      rounded-2xl
      m-4 
      shadow-[0px_0px_9px_4px_rgba(0,247,193,0.2)]
      cursor-pointer
      relative
      flex flex-col items-center
      border border-transparent hover:border-blue-400 hover:shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] hover:scale-110 transition-all duration-150 ease-in">
      {/* <div className="
        w-[40px] h-[40px] flex justify-center items-center absolute left-[-1px] top-[-1px] text-2xl font-light z-50
      " style={{borderColor: "#022E34"}}>
        ⭐
      </div> */}
      <img
        className="w-[100%] h-[100%] rounded-2xl "
        src={`https://image.tmdb.org/t/p/w200${url}`}
        alt={title}
      />

      <p className="w-[100%] h-[100%] bg-blue-950/50 absolute flex justify-center items-end opacity-0 hover:opacity-100 transition duration-150">
        {title}
      </p>
    </div>
  );
};

export default React.memo(MovieCard, (prevProps, nextProps) => {
  return (
    prevProps.id === nextProps.id &&
    prevProps.url === nextProps.url &&
    prevProps.title === nextProps.title &&
    prevProps.type === nextProps.type
  );
});
