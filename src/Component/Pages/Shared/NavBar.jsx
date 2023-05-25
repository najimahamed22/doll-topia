import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="inline-flex gap-5">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
              alt="Logo"
              className="h-12 w-15 rounded-full border-white border-2 ml-2"
            />
          </div>
          <Link to="/" className="text-white text-2xl font-bold">
            Dolltopia
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            aria-label="toggle menu"
            onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:w-auto`}>
        <div className="px-2 pt-2 pb-2 sm:flex">
          <NavLink
            to="/"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
            Home
          </NavLink>

          <NavLink
            to="/toys"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
            All Toys
          </NavLink>
          <NavLink
            to="/blogs"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
            Blog
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="/addtoy"
                exact="true"
                className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
                Add A Toy
              </NavLink>
              <NavLink
                to="/mytoys"
                exact="true"
                className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
                My Toys
              </NavLink>
              <p>
                <button
                  onClick={handleLogOut}
                  className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
                  Logout
                </button>
              </p>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                exact="true"
                className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2">
                Login
              </NavLink>
            </>
          )}

          <div>
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="h-12 w-15 rounded-full border-white border-2 ml-2"
                title={user.displayName || ""}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;
