import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // You can handle the form submission here
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("https://doll-topia-server.vercel.app/addtoy", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        toast.success("Toy added successfully!"); // Display success toast
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to add toy."); // Display error toast
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 md:py-6 flex justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dolltopia || Add A Toy</title>
      </Helmet>
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden shadow-md">
        <div className="py-6 px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Add Toy</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {errors.pictureUrl && (
              <span className="text-red-500 mb-2">Picture URL is required</span>
            )}

            <div className="mb-4">
              <label className="block text-lg text-gray-800 font-semibold mb-2">
                Picture URL of the toy
              </label>
              <input
                className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("pictureUrl", { required: true })}
                type="url"
                placeholder="Picture URL of the toy"
              />
            </div>

            {errors.name && (
              <span className="text-red-500 mb-2">Name is required</span>
            )}

            <div className="mb-4">
              <label className="block text-lg text-gray-800 font-semibold mb-2">
                Name of the toy
              </label>
              <input
                className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
            </div>

            {user && (
              <>
                <input
                  className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={user.email}
                  {...register("sellerEmail", { required: true })}
                  placeholder="Seller email"
                  type="email"
                />

                <input
                  className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={user.displayName}
                  {...register("sellerName", { required: true })}
                  placeholder="Seller name"
                />
              </>
            )}

            {errors.subCategory && (
              <span className="text-red-500 mb-2">
                Sub-category is required
              </span>
            )}

            <select
              className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("subCategory", { required: true })}>
              <option value="">Select a sub-category</option>
              <option value="babyDolls">Baby Dolls</option>
              <option value="fashionDolls">Fashion Dolls</option>
              <option value="collectibleDolls">Collectible Dolls</option>
            </select>
            {errors.releaseDate && (
              <span className="text-red-500 mb-2">
                Release date is required
              </span>
            )}

            <div className="mb-4">
              <label className="block text-lg text-gray-800 font-semibold mb-2">
                Release Date
              </label>
              <input
                className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("releaseDate", { required: true })}
                type="date"
                placeholder="Release Date"
              />
            </div>

            {errors.price && (
              <span className="text-red-500 mb-2">Price is required</span>
            )}

            <input
              className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("price", { required: true })}
              placeholder="Price"
              type="number"
            />

            {errors.rating && (
              <span className="text-red-500 mb-2">Rating is required</span>
            )}

            <input
              className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("rating", { required: true, min: 0 })}
              placeholder="Rating"
              type="number"
              max="5"
            />

            {errors.availableQuantity && (
              <span className="text-red-500 mb-2">
                Available quantity is required
              </span>
            )}

            <input
              className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("availableQuantity", { required: true })}
              placeholder="Available quantity"
              type="number"
            />

            <textarea
              className="w-full py-2 px-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("description")}
              placeholder="Detail description"
            />

            <div className="flex items-center justify-center">
              <button className="w-full text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500">
                Add a Toy
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddToy;
