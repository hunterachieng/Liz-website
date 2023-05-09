import { FaLinkedinIn, FaFigma } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { NavLink as Link } from "react-router-dom";

let years = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-footer py-1  fixed bottom-0 w-full h-20">
      <div className="flex justify-between  m-2">
        <a href="https://medium.com/@elizabethkagimbi" target="_blank"><BsMedium className="bg-icons p-1 text-white text-2xl rounded-full m-1" /></a>
        <a href="https://www.linkedin.com/in/elizabeth-wangari-2505a75a/" target="_blank"><FaLinkedinIn className="bg-icons p-1 text-white text-2xl rounded-full m-1" /></a>
       <a href="https://www.figma.com/proto/E9WpErhpqS35WLMypk3yrH/Strategy-presentation?page-id=0%3A1&type=design&node-id=0-4&viewport=2594%2C452%2C0.13&scaling=min-zoom&starting-point-node-id=0%3A4" target="_blank"><FaFigma className="bg-icons p-1 text-white text-2xl rounded-full m-1" /></a> 
      </div>
      <div><small>Copyright &copy; {years} Liz Kagimbi</small></div>
    </div>
  );
};
export default Footer;
