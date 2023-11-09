import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "../../router/Router";

const MainApp = () => (
  <RouterProvider router={Router}>
    <Router />
  </RouterProvider>
);

export default MainApp;
