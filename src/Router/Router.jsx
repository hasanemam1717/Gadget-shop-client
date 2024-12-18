import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layouts/Dashboard.jsx/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Overview from "../Layouts/Dashboard.jsx/Overview";
import SellerRoute from "./SellerRoute";
import MyProducts from "../Components/Dashboard/seller/MyProducts";
import AddProducts from "../Components/Dashboard/seller/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/dashboard/myProducts",
        element:<MyProducts></MyProducts>
        // element: (
        //   <SellerRoute>
        //     <MyProducts></MyProducts>
        //   </SellerRoute>
        // ),
      },
      {
        path: "/dashboard/addProduct",
        element:<AddProducts></AddProducts>
        // element: (
        //   <SellerRoute>
        //    <AddProducts></AddProducts>
        //   </SellerRoute>
        // ),
      },
    ],
  },
]);

export default router;
