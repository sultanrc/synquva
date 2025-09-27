import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
// import Result from "./pages/Result";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  //   { path: "/login", element: <Login /> },
  //   { path: "/signup", element: <Signup /> },
  { path: "/upload", element: <Upload /> },
  { path: "/result", element: <Result /> },
  //   { path: "/result", element: <Result /> },
]);

export default router;
