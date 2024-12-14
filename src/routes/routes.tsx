import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { librarianPaths } from "./librarian.routes";
import { memberPaths } from "./member.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/librarian",
    element: <App />,
    children: routeGenerator(librarianPaths),
  },
  {
    path: "/member",
    element: <App />,
    children: routeGenerator(memberPaths),
  },
]);

export default router;
