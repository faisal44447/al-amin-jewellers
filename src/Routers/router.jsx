import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import AddStaf from "../pages/Dashboard/AddStaf/AddStaf.jsx";
import StaffList from "../pages/Dashboard/StaffList/StaffList.jsx";

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
        path: "logIn",
        element: <Login></Login>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      { 
        path: "add-staf", 
        element: <AddStaf />
      },
      { 
        path: "staf-records", 
        element: <StaffList />

      },
    ],
  },
]);

export default router;