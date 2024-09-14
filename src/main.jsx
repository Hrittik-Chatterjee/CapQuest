import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";

// import { ToastContainer } from "react-toastify";
import AuthProvider from "./authprovider/AuthProvider.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
        {/* <ToastContainer /> */}
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
