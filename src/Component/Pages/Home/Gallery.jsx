import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://doll-topia-server.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const pictureUrls = data.slice(0, 9).map((toy) => toy.pictureUrl);
          setImages(pictureUrls);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    AOS.init();
  }, []);

  return (
    <div className="container my-5 mx-auto">
      <h2 className="text-4xl text-center font-bold my-4">Image Gallery</h2>
      {loading ? (
        <div className="flex justify-center h-screen">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
            alt="Loading..."
            className="w-16 h-16 rounded-full animate-spin"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-gray-200 p-2 rounded-md"
              data-aos="fade-up">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
