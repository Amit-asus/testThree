import React from "react";
import { store } from  "../Redux/store.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import UserLogin from "../Features/auth/UserLogin.jsx";
import AdminLogin from "../Features/auth/AdminLogin.jsx";
import AdminDashboard from "../Features/auth/AdminDashboard.jsx";
import CompanyList from "../Features/ListPage/CompanyList.jsx";
import CreateJobs from "../Features/form/CreateJobs.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />,
  },

  // { path: "/user-login", element: <UserLogin /> },

  { path: "/admin-login", element: <AdminLogin /> },

  { path: "/admin-dashboard", element: <AdminDashboard /> },
  { path: "/company-list", element: <CompanyList /> },
 
  {
    path: "/create-job",
    element: <CreateJobs />,
  },

  {
    path: "/show-job",
    element: <CreateJobs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
