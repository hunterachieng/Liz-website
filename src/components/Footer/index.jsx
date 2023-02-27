import { FaLinkedinIn, FaFigma } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { NavLink as Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-footer py-1  fixed bottom-0 w-full h-20">
      <div className="flex justify-between  m-2">
        <Link to="https://medium.com/@elizabethkagimbi" target="_blank"><BsMedium className="bg-icons p-1 text-white text-2xl rounded-full m-1" /></Link>
        <Link to="https://www.linkedin.com/in/elizabeth-wangari-2505a75a/" target="_blank"><FaLinkedinIn className="bg-icons p-1 text-white text-2xl rounded-full m-1" /></Link>
       <Link ><FaFigma className="bg-icons p-1 text-white text-2xl rounded-full m-1" /></Link> 
      </div>
      <div><small>Copyright &copy; 2022 Liz Kagimbi</small></div>
    </div>
  );
};
export default Footer;
