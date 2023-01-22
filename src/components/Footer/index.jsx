import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="flex justify-between bg-blue py-1 px-8 fixed bottom-0 w-full sm:pt-8 sm:px-2 xsm:pl-1 xsm:py-2 xsm:flex-col xsm:h-30 sm:h-30 sm:flex-col">
			

			<img
				src="/images/logo/footer-logo.png"
				alt="Footer logo"
				className="sm:w-16  xsm:w-20 sm:pb-5 xsm:pb-5 md:w-25 md:h-20 md:pb-4"
				width={200}
			/>
			<small className="text-white pt-8 xsm:text-xsm font-bold sm:pt-3 sm:bottom-0 sm:absolute xsm:pt-3 xsm:bottom-0 xsm:absolute md:pt-3 md:bottom-0 md:absolute ">
				&copy; 2023 All rights reserved
			</small>
			<div className=" flex justify-between w-3/12 text-white sm:absolute sm:flex-col sm:justify-start sm:right-7 sm:text-sm sm:bottom-0 xsm:absolute xsm:right-2 xsm:text-sm xsm:bottom-0 xsm:flex-col md:w-1/2 lg:w-1/3">
				<div className='py-4 sm:py-0 sm:absolute sm:bottom-10 xsm:py-0 xsm:hidden'>
				<h3 >REACH US</h3>
				<small className='font-bold'>+254 713 129 623</small>
				</div>
				<div className='py-4'>
					<h3 className='sm:hidden xsm:hidden'>FOLLOW US</h3>
					<div className="flex justify-between  xsm:justify-start sm:justify-start sm:absolute sm:right-1 sm:bottom-0 xsm:absolute xsm:right-1 xsm:bottom-0 md:justify-start">
				<FaTwitter className="text-white text-xl m-1 sm:text-l xsm:text-sm" />
				<FaFacebook className="text-white text-xl m-1 sm:text-l xsm:text-sm" />
				<FaInstagram className="text-white text-xl m-1 sm:text-l xsm:text-sm" />
			</div>
				</div>
			<div className='py-4 sm:pb-6 xsm:py-0 xsm:pb-5 xsm:absolute xsm:bottom-0 xsm:-right-2 '>
				<h3 className='sm:hidden xsm:hidden'>HELP</h3>
				<small className='font-bold'>info@tickets4u.co.ke </small>
			</div>
				
			</div>
			
		</div>
	);
};
export default Footer;
