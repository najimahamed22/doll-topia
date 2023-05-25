import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="my-5">
      <section>
        <div className="container mx-auto bg-gray-800">
          <div className="flex flex-col  md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:mx-10  p-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Welcome to Dolltopia!
              </h2>
              <p className="text-lg mb-6 text-white">
                Discover a world of endless fun and excitement with our amazing
                collection of toys.
              </p>
              <Link
                to="/toys"
                className="text-xl btn bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4">
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://st4.depositphotos.com/1026394/27085/v/450/depositphotos_270852900-stock-illustration-cute-vector-little-princesses-royal.jpg"
                alt="Dolltopia Banner"
                className=" shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
