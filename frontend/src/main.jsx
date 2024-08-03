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
import AdminDashboard from "./pages/admin/AdminDashboard";
import Students from "./pages/admin/Students";
import Jobs from "./pages/admin/Jobs";
import CreateJobs from "./pages/admin/CreateJobs";
import CreateAdminPost from "./pages/admin/CreateAdminPost";
import Coordinators from "./pages/admin/Coordinators";
import { superAdminMenus } from "./db/superAdminMenus";
import { adminMenus } from "./db/adminMenus";
import Student from "./pages/admin/Student";
import StudentPage from "./pages/admin/StudentPage";

//super-admin routes
const superAdminRoutes = [
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
];

//admin routes
const adminRoutes = [
  {
    path: "/",
    element: <AdminDashboard />,
  },
  {
    path: "/students",
    element: <StudentPage />,
    children: [
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/students/view-student",
        element: <Student />,
      },
    ],
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/create-job",
    element: <CreateJobs />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/create-post",
    element: <CreateAdminPost />,
  },
  {
    path: "/coordinators",
    element: <Coordinators />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
];

const userType = "admin";

//function for fetch routes according to user type
const getUserType = () => {
  if (userType === "superAdmin") {
    return superAdminRoutes;
  } else if (userType === "admin") {
    return adminRoutes;
  }
};

//function for fetch sidebar menus according to user type
const getMenu = () => {
  if (userType === "superAdmin") {
    return superAdminMenus;
  } else if (userType === "admin") {
    return adminMenus;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App menus={getMenu(userType)} />,
    children: getUserType(userType),
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
