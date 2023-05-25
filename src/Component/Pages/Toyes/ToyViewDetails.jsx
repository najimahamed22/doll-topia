import { FaMoneyBillAlt } from "react-icons/fa";
import { RiStarFill } from "react-icons/ri";
import { AiOutlineStock, AiOutlineCalendar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const ToyViewDetails = () => {
  const toy = useLoaderData();

  return (
    <div className="bg-white rounded-lg w-3/4 mx-auto p-8 shadow-lg">
      <div className="flex justify-center mb-6">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dolltopia || {toy?.name} Details</title>
        </Helmet>
        <h2 className="text-3xl font-bold text-gray-900">
          {toy?.name}: Details
        </h2>
      </div>
      <div className="flex justify-center mb-6">
        <img
          src={toy?.pictureUrl}
          alt={toy?.name}
          className="rounded-lg max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-4 text-xl">
        <div className="flex items-center">
          <FaMoneyBillAlt className="mr-2 text-blue-500" />
          <span className="font-bold text-gray-700">Price:</span>
          <span className="mx-2">${toy?.price}</span>
        </div>
        <div className="flex items-center">
          <RiStarFill className="mr-2 text-yellow-500" />
          <span className="font-bold text-gray-700">Rating: </span>
          <span className="mx-2">{toy?.rating}</span>
          <RiStarFill className="mr-2 text-yellow-500" />
        </div>
        <div className="flex items-center">
          <AiOutlineStock className="mr-2 text-green-500" />
          <span className="font-bold text-gray-700">Available Quantity:</span>
          <span className="mx-2">{toy?.availableQuantity}</span>
        </div>
        <div className="flex items-center">
          <AiOutlineCalendar className="mr-2 text-red-500" />
          <span className="font-bold text-gray-700">Release Date:</span>{" "}
          <span className="mx-2"> {toy?.releaseDate}</span>
        </div>
        <p className="text-gray-700 font-bold">
          Description: {toy?.description}
        </p>
      </div>
    </div>
  );
};

export default ToyViewDetails;
