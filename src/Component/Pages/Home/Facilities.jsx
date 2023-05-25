import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiCar, BiSupport, BiMoney } from "react-icons/bi";

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true,
    });
  }, []);

  return (
    <div className="py-10 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-5">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center mb-10 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
            Our Facilities
          </h1>
          <p className="text-base lg:w-1/2 text-center leading-relaxed text-gray-600">
            We provide a wide range of facilities to enhance your shopping
            experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            data-aos="fade-down"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <BiCar className="mx-auto text-5xl text-blue-600 mb-4" />
            <h2 className="font-semibold text-gray-700 text-xl text-center lg:text-2xl">
              Free Shipping
            </h2>
            <p className="text-sm text-center font-semibold my-3 lg:text-base">
              We provide free product delivery for all products and any
              location.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <BiSupport className="mx-auto text-5xl text-red-600 mb-4" />
            <h2 className="font-semibold text-gray-700 text-xl lg:text-2xl text-center">
              Support 24/7
            </h2>
            <p className="text-sm text-center font-semibold my-3 lg:text-base">
              We provide 24/7 support to assist you with any inquiries.
            </p>
          </div>
          <div
            data-aos="fade-down"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
            <BiMoney className="mx-auto text-5xl text-green-600 mb-4" />
            <h2 className="font-semibold text-center text-gray-700 text-xl lg:text-2xl">
              Money Return
            </h2>
            <p className="text-sm text-center font-semibold my-3 lg:text-base">
              We offer a money return system in case you are not satisfied with
              your purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
