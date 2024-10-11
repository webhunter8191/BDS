import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#7C6A46] py-8">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl text-white font-bold tracking-tight">
          MernHolidays.com
        </span>
        <span className="flex space-x-6">
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white text-xl hover:text-gray-300 transition duration-300"
          >
            <FaInstagram />
          </a>
        </span>
        <span className="text-white flex gap-6">
          <p className="cursor-pointer hover:text-gray-300 transition duration-300">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:text-gray-300 transition duration-300">
            Terms of Service
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
