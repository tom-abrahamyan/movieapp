import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[100%] h-28 mt-24 flex flex-col justify-center items-center gap-8">

      <div className="flex justify-around items-center flex-wrap text-4xl gap-5 cursor-pointer">
        <FaFacebookSquare />
        <FaInstagramSquare/>
        <FaLinkedin />
        <FaYoutubeSquare />
        <FaSquareXTwitter />
      </div>
      <div>© 2025 MovieApp. All rights reserved.</div>
    </footer>
  )
}

export default Footer