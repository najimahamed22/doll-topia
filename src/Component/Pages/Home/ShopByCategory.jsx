import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showCount, setShowCount] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch toy data from the API endpoint
    setLoading(true);
    fetch("https://doll-topia-server.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
    AOS.init();
  }, []);

  const subCategories = ["fashionDolls", "babyDolls", "collectibleDolls"];

  const handleSeeAll = () => {
    setShowAll(true);
    setShowCount(toys.length);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setShowCount(2);
  };

  return (
    <Tabs>
      <h1 className="text-center font-extrabold text-4xl my-8">
        Dolls Collection
      </h1>
      <TabList className="text-center font-bold text-4xl border-y-2">
        {subCategories.map((subCategory) => (
          <Tab key={subCategory}>{subCategory}</Tab>
        ))}
      </TabList>

      {subCategories.map((subCategory) => (
        <TabPanel key={subCategory}>
          <h2 className="text-3xl text-center mt-5 font-bold mb-4">
            Toys in {subCategory}
          </h2>
          {loading ? (
            <div className="flex justify-center h-screen">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
                alt="Loading..."
                className="w-16 h-16 rounded-full animate-spin"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
              {toys
                .filter((toy) => toy.subCategory === subCategory)
                .slice(0, showCount)
                .map((filteredToy) => (
                  <div
                    key={filteredToy._id}
                    className="bg-white p-4 shadow rounded-lg">
                    <div className="aspect-w-3 h-96 relative">
                      <img
                        data-aos="fade-right"
                        src={filteredToy.pictureUrl}
                        alt={filteredToy.name}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <h3
                        data-aos="fade-down"
                        className="text-xl text-center font-bold mb-2">
                        Toy Name:{" "}
                        {filteredToy.name.length > 25
                          ? `${filteredToy.name.slice(0, 25)}...`
                          : filteredToy.name}
                      </h3>
                      <h2 data-aos="fade-up" className="ms-5">
                        Description:{" "}
                        {filteredToy.description.length > 80
                          ? `${filteredToy.description.slice(0, 80)}...`
                          : filteredToy.description}
                      </h2>
                      <div className="flex mx-10 justify-between">
                        <p className="text-lg font-bold">
                          Price: ${filteredToy.price}
                        </p>
                        <p className="text-lg font-bold">
                          Available Quantity: {filteredToy.availableQuantity}
                        </p>
                        <div className="flex items-center text-lg font-bold mb-2">
                          <p className="">Rating: {filteredToy.rating}</p>
                          <AiFillStar className="text-yellow-500 mr-1" />
                        </div>
                      </div>
                      <Link
                        data-aos="fade-down"
                        to={`/toys/${filteredToy._id}`}
                        className="btn btn-block text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <BsEyeFill className="mr-1" />
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          )}
          {!showAll ? (
            <button
              data-aos="fade-up"
              className="btn btn-block text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4"
              onClick={handleSeeAll}>
              See All
            </button>
          ) : (
            <button
              className="btn btn-block text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4"
              onClick={handleShowLess}>
              Show Less
            </button>
          )}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default ShopByCategory;
