import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/superadmin/Dashboard.jsx";
import Posts from "./pages/superadmin/Posts.jsx";
import CreatePosts from "./pages/superadmin/CreatePosts.jsx";
import Drives from "./pages/superadmin/Drives";
import CreateDrive from "./pages/superadmin/CreateDrive";
import TPOList from "./pages/superadmin/TPOList";
import App from "./App";
import { ThemeProvider } from "./components/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/create-post",
        element: <CreatePosts />,
      },
      {
        path: "/drives",
        element: <Drives />,
      },
      {
        path: "/create-drive",
        element: <CreateDrive />,
      },
      {
        path: "/tpo",
        element: <TPOList />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
