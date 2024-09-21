import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

import PrivateRoute from "./private/PrivateRoute";

import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import CartProducts from "../pages/CartProducts";
import PaymentSuccess from "../pages/PaymentSuccess";
import PaymentCancel from "../pages/PaymentCancel";
import Register from "../pages/Register";
import UserDetails from "../pages/UserDetails";
import EditProfile from "../pages/EditProfile";
import EditProducts from "../pages/EditProducts";
import AddProducts from "../pages/AddProducts";
import AddedProductsList from "../pages/AddedProductsLists";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/cancel",
        element: (
          <PrivateRoute>
            <PaymentCancel />
          </PrivateRoute>
        ),
      },
      {
        path: "/productlist",
        element: (
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        ),
      },
      {
        path: "/cartProducts",
        element: (
          <PrivateRoute>
            <CartProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/AddedProductsLists",
        element: (
          <PrivateRoute>
            <AddedProductsList />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ecommerce-dashboard-server-awlu.onrender.com/products/${params.id}`
          ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <UserDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ecommerce-dashboard-server-awlu.onrender.com/users/${params.id}`
          ),
      },
      {
        path: "products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ecommerce-dashboard-server-awlu.onrender.com/products/${params.id}`
          ),
      },
    ],
  },
]);
