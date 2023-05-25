import { useState, useEffect } from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import DollToysStats from "./DollToysStats";
import Facilities from "./Facilities";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import { Helmet } from "react-helmet";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace this with your actual data fetching logic
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dolltopia || Home</title>
      </Helmet>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
            alt="Loading..."
            className="w-16 h-16 rounded-full animate-spin"
          />
        </div>
      ) : (
        <>
          <Banner />
          <Gallery />
          <ShopByCategory />
          <Facilities />
          <DollToysStats />
          <ContactUs />
        </>
      )}
    </div>
  );
};

export default Home;
