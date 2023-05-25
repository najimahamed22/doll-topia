import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiUser, FiMapPin, FiShoppingCart, FiBox } from "react-icons/fi";

const DollToysStats = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl md:text-5xl font-bold title-font mb-4 text-gray-900">
            Doll Toys Stats
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold">
            Doll Toys Stats provides key metrics and insights related to doll
            toys, including downloads, users, product files, and places. It
            offers a visually appealing presentation of statistics, enabling
            doll toy businesses and enthusiasts to track performance and make
            informed decisions. This section enhances the user experience by
            showcasing the popularity and engagement of doll toys in a concise
            and organized manner.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              data-aos="fade-up"
              className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiShoppingCart className="text-blue-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Orders</p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiUser className="text-purple-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiBox className="text-green-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                74
              </h2>
              <p className="leading-relaxed">Product</p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 lg:w-1/4 w-full">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiMapPin className="text-yellow-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                46
              </h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DollToysStats;
