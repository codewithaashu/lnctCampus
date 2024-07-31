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
import RegisteredStudents from "./components/dashboard/superadmin/RegisteredStudents";
import DrivesBox from "./components/dashboard/superadmin/DrivesBox";
import StudentDetails from "./components/dashboard/superadmin/StudentDetails";
import { Toaster } from "sonner";
import Profile from "./pages/superadmin/Profile";
import ChangePassword from "./pages/superadmin/ChangePassword";

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
        children: [
          {
            path: "/drives",
            element: <DrivesBox />,
          },
          {
            path: "/drives/student-register",
            element: <RegisteredStudents />,
          },
          {
            path: "/drives/view-student",
            element: <StudentDetails />,
          },
        ],
      },
      {
        path: "/create-drive",
        element: <CreateDrive />,
      },
      {
        path: "/tpo",
        element: <TPOList />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
