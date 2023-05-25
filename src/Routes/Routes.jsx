import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Pages/Home/Home";
import Login from "../Component/Pages/Login/Login";
import Register from "../Component/Pages/Login/Register";
import AddToy from "../Component/Pages/Toyes/AddToy";
import AllToys from "../Component/Pages/Toyes/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToyViewDetails from "../Component/Pages/Toyes/ToyViewDetails";
import ErrorPage from "../Component/Pages/Shared/ErrorPage";
import Blog from "../Component/Pages/Blog/Blog";
import MyToy from "../Component/Pages/Toyes/Mytoy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <ToyViewDetails></ToyViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://doll-topia-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
