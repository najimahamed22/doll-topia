import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <NavBar></NavBar>
        <div className="flex-1 h-full">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
