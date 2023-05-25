import { useState, useEffect, useContext } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";
import { Helmet } from "react-helmet";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toys, setToys] = useState([]);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    fetch(
      `https://doll-topia-server.vercel.app/myToys/${user?.email}?sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error("Failed to fetch toy data:", error);
      });
  }, [user, sort]);

  const handleUpdateClick = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const handleToyUpdate = (updatedToyData) => {
    fetch(`https://doll-topia-server.vercel.app/updateToy/${selectedToy._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setToys((toys) =>
            toys.map((toy) =>
              toy._id === selectedToy._id ? { ...toy, ...updatedToyData } : toy
            )
          );
          console.log("Toy data updated successfully");
          setSort(sort);
        }
      })
      .catch((error) => {
        console.error("Failed to update toy data:", error);
      });
  };

  const handleDeleteClick = (toyId) => {
    toast.dismiss();
    toast.info(
      <div className="">
        <p className="text-3xl">Are you sure you want to delete?</p>
        <div className="flex my-5 text-2xl justify-center">
          <button
            className="px-4 py-2 mr-2 bg-red-500 text-white rounded"
            onClick={() => {
              deleteToy(toyId);
              toast.dismiss();
            }}>
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => toast.dismiss()}>
            No
          </button>
        </div>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        closeButton: false,
        draggable: false,
        hideProgressBar: true,
      }
    );
  };

  const deleteToy = (toyId) => {
    fetch(`https://doll-topia-server.vercel.app/deleteToy/${toyId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === true) {
          const remaining = toys.filter((toy) => toy._id !== toyId);
          setToys(remaining);
          toast.success("Deleted successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        console.error("Failed to delete toy:", error);
        toast.error("Failed to delete toy", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dolltopia || My Toy</title>
      </Helmet>

      <div className="text-center my-10">
        <select
          value={sort}
          onChange={handleSortChange}
          className="border border-gray-300 bg-blue-900 font-semibold text-white rounded-lg py-2">
          <option value="">Sort</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">S.No</th>
            <th className="px-4 py-2 text-left">Seller</th>
            <th className="px-4 py-2 text-left">Toy Name</th>
            <th className="px-4 py-2 text-left">Sub-category</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Available Quantity</th>
            <th className="px-4 py-2 text-left">Actions</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <tr key={toy._id} className="border-2 font-semibold">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{toy.sellerName}</td>
              <td className="px-4 py-2">{toy.name}</td>
              <td className="px-4 py-2">{toy.subCategory}</td>
              <td className="px-4 py-2">$ {toy.price}</td>
              <td className="px-4 py-2">{toy.availableQuantity}</td>
              <td className="px-4 py-2">
                <button
                  className="flex items-center gap-3 text-blue-500"
                  onClick={() => handleUpdateClick(toy)}>
                  <AiOutlineEdit size={20} /> Update
                </button>
              </td>
              <td className="px-4 py-2">
                <button
                  className="flex items-center gap-3 text-red-500"
                  onClick={() => handleDeleteClick(toy._id)}>
                  <AiOutlineDelete size={20} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal
          toy={selectedToy}
          onClose={() => setShowModal(false)}
          onUpdate={handleToyUpdate}
        />
      )}
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </div>
  );
};

export default MyToy;
