import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ toy, onClose, onUpdate }) => {
  const [updatedToyData, setUpdatedToyData] = useState({
    pictureUrl: toy.pictureUrl,
    name: toy.name,
    subCategory: toy.subCategory,
    price: toy.price,
    rating: toy.rating,
    availableQuantity: toy.availableQuantity,
    description: toy.description,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedToyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(updatedToyData);
    onClose();
    toast.success("Toy updated successfully");
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="bg-white w-full md:w-1/2 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Update Toy</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Picture URL:
            <input
              type="text"
              name="pictureUrl"
              value={updatedToyData.pictureUrl}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={updatedToyData.name}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Sub-category:
            <select
              name="subCategory"
              value={updatedToyData.subCategory}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full">
              <option value="">Select a sub-category</option>
              <option value="babyDolls">Baby Dolls</option>
              <option value="fashionDolls">Fashion Dolls</option>
              <option value="collectibleDolls">Collectible Dolls</option>
            </select>
          </label>
          <label className="block mb-2">
            Price:
            <input
              type="number"
              name="price"
              value={updatedToyData.price}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Rating:
            <input
              type="number"
              name="rating"
              value={updatedToyData.rating}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Available Quantity:
            <input
              type="number"
              name="availableQuantity"
              value={updatedToyData.availableQuantity}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Description:
            <textarea
              name="description"
              value={updatedToyData.description}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"></textarea>
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
              Update
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Modal;
