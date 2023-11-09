import React from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "../views/home/Home";
import { HOME } from "./routes";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Home />}
      path={HOME}
      //   loader={async ({ params }) => {
      //     return fetch(`/fake/api/teams/${params.teamId}.json`);
      //   }}
      //   action={async ({ request }) => {
      //     return updateFakeTeam(await request.formData());
      //   }}
      //   errorElement={<ErrorBoundary />}
    />
  )
);
export default Router;
