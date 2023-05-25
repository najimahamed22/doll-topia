import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
          alt="Loading..."
          className="w-16 h-16 rounded-full animate-spin"
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoute;
