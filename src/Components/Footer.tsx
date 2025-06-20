import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-4 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Title */}
        <div className="flex items-center mb-4 lg:mb-0">
          <Image alt="logo" src="/icons/D2.png" width={80} height={80} />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect p-1 transition-transform transform hover:scale-110 hover:shadow-lg rounded-full"
          >
            <FaFacebookF className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect p-1 transition-transform transform hover:scale-110 hover:shadow-lg rounded-full"
          >
            <FaTwitter className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect p-1 transition-transform transform hover:scale-110 hover:shadow-lg rounded-full"
          >
            <FaInstagram className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-pink-500" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect p-1 transition-transform transform hover:scale-110 hover:shadow-lg rounded-full"
          >
            <FaLinkedinIn className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
