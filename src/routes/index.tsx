// import App from "@/App";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    // element: <App />,
    Component: Home,
    path: "/",
  }
])