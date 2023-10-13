import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage"));

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Homepage />} />
    </Route>
  )
);

export default rotas;
