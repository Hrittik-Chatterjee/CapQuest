import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "/login",
      //     element: <Login />,
      //   },
      //   {
      //     path: "/signup",
      //     element: <SignUp />,
      //   },
      //   {
      //     path: "/success",
      //     element: (
      //       <PrivateRoute>
      //         <PaymentSuccess />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/cancel",
      //     element: (
      //       <PrivateRoute>
      //         <PaymentCancel />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/productlist",
      //     element: (
      //       <PrivateRoute>
      //         <ProductList />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/cartProducts",
      //     element: (
      //       <PrivateRoute>
      //         <CartProducts />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/add-products",
      //     element: (
      //       <PrivateRoute>
      //         <AddProducts />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/my-products",
      //     element: (
      //       <PrivateRoute>
      //         <MyProductList />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/products/:id",
      //     element: (
      //       <PrivateRoute>
      //         <ProductDetails />
      //       </PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://ecommerce-dashboard-server-awlu.onrender.com/products/${params.id}`
      //       ),
      //   },
      //   {
      //     path: "products/edit/:id",
      //     element: (
      //       <PrivateRoute>
      //         <EditProducts />
      //       </PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://ecommerce-dashboard-server-awlu.onrender.com/products/${params.id}`
      //       ),
      //   },
    ],
  },
]);
