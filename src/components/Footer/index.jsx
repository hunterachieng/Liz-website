import { FaLinkedinIn, FaFigma } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-footer py-1  fixed bottom-0 w-full h-20">
      <div className="flex justify-between  m-2">
        <BsMedium className="bg-icons p-1 text-white text-2xl rounded-full m-1" />
        <FaLinkedinIn className="bg-icons p-1 text-white text-2xl rounded-full m-1" />
        <FaFigma className="bg-icons p-1 text-white text-2xl rounded-full m-1" />
      </div>
      <div><small>Copyright &copy; 2022 Liz Kagimbi</small></div>
    </div>
  );
};
export default Footer;
