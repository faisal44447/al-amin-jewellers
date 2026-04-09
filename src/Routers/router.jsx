import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main.jsx"; 
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";

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
    ],
  },
]);

export default router;