import { useNavigate } from "react-router";
import kidsImage from "../assets/kids.png";

const KidsContainer = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(`/animation`);
  };

  return (
    <div
      className="w-[90%] h-[490px] mt-11 bg-cover bg-bottom flex justify-center items-end"
      style={{ backgroundImage: `url(${kidsImage})` }}>
      <div className="text-center mb-6 bg-black/30 p-4 rounded">
        <h1 className="text-[16px] sm:text-[20px] md:text-2xl lg:text-4xl font-light text-white">
          Family-friendly streaming
        </h1>
        <p className="mt-2 text-white text-sm sm:text-base md:text-lg">
          Create kids profiles, set parental controls, and choose rating levels.
        </p>
        <button 
          onClick={goTo}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Watch Cartoons
        </button>
      </div>
    </div>
  );
};

export default KidsContainer;
