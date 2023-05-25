import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4  mb-3">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
              alt="Dolltopia"
              className="h-21 w-21 rounded-full border-white border-2 ml-2"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 ">
            <h4 className="text-white text-2xl font-bold mb-4">Contact Us</h4>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2 my-2 h-7 w-7" />
              <span className="text-xl">123-456-7890</span>
            </div>
            <div className="flex items-center my-2">
              <FaEnvelope className="mr-2 h-7 w-7" />
              <span className="text-xl">info@dolltopia.com</span>
            </div>
            <div className="flex items-start my-2">
              <FaMapMarkerAlt className="mr-2 h-7 w-7 mt-0.5" />
              <span className="text-xl">123 Main St, City, State, 12345</span>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4  mb-1">
            <h4 className="text-white text-2xl font-bold md:ms-10 mb-4">
              Follow Us
            </h4>
            <div className="flex">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <AiFillFacebook className="text-white text-6xl hover:text-gray-300" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4">
                <AiFillTwitterCircle className="text-white text-6xl hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer">
                <AiFillInstagram className="text-white text-6xl hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-gray-300 my-4 font-semibold">
          Dolltopia is a vibrant Toy Marketplace offering a wide range of toys
          for children of all ages. From classic dolls to interactive playsets,
          we provide a diverse selection of high-quality toys that inspire
          imagination and creativity. Discover the joy of play at Dolltopia and
          find the perfect toys for endless fun and learning.
        </p>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Dolltopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
