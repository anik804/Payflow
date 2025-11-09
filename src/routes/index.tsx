// import App from "@/App";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    // element: <App />,
    Component: Home,
    path: "/",
    children: [
      {

      }
    ]
  },{
    path: "*",
    Component: NotFound,
  }
])