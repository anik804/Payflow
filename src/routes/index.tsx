import CommonLayout from "@/components/layout/CommonLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/Faq";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: CommonLayout,
    path: "/",
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "features",
        Component: Features
      },
      {
        path: "pricing",
        Component: Pricing
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        path: "faq",
        Component: FAQ
      }
    ]
  },{
    path: "*",
    Component: NotFound,
  },
  {
    path: "/login",
    Component: Login
  },
  {
    path: "register",
    Component: Register
  },

])