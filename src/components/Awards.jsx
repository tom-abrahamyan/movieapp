import { useNavigate } from "react-router";
import awardsImage from "../assets/golden_globe.png";


const Awards = () => {
  const navigate = useNavigate();
 
  const goTo = () => {
    navigate(`/movie`);
  };
  return (
    <div
      onClick={goTo}
      className="w-[90%] h-[490px] mt-11 bg-cover bg-bottom "
      style={{ backgroundImage: `url(${awardsImage})` }}></div>
  );
};

export default Awards;
