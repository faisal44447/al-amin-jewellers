import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import StaffList from "../pages/Dashboard/StaffList/StaffList.jsx";
import AddStaff from "../pages/Dashboard/AddStaff/AddStaff.jsx";
import EditStaff from "../pages/Dashboard/EditStaff/EditStaff.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "add-staff",
        element: <AddStaff />
      },
      {
        path: "staff-records",
        element: <StaffList />

      },
      {
        path: "edit-staff/:id",
        element: <EditStaff />
      },
    ],
  },
]);

export default router;