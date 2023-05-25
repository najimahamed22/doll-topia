import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://doll-topia-server.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://doll-topia-server.vercel.app/searchByName/${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dolltopia || All Toys</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold mb-4">All Toys</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="border border-gray-400 rounded px-4 py-2"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center h-screen">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
            alt="Loading..."
            className="w-16 h-16 rounded-full animate-spin"
          />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {" "}
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">S.No</th>
                <th className="px-4 py-2 text-left">Seller</th>
                <th className="px-4 py-2 text-left">Toy Name</th>
                <th className="px-4 py-2 text-left">Sub-category</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Available Quantity</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <tr key={toy._id} className="border-2">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{toy.sellerName}</td>
                  <td className="px-4 py-2">{toy.name}</td>
                  <td className="px-4 py-2">{toy.subCategory}</td>
                  <td className="px-4 py-2">{toy.price}</td>
                  <td className="px-4 py-2">{toy.availableQuantity}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/toys/${toy._id}`}
                      className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToys;
