import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage"));
const ConteudoN1 = lazy(() => import("../pages/ConteudoN1"));
const ConteudoN2 = lazy(() => import("../pages/ConteudoN2"));
const IDE = lazy(() => import("../pages/IDE"));

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Homepage />} />
      <Route path="conteudo-n1" element={<ConteudoN1 />} />
      <Route path="conteudo-n2" element={<ConteudoN2 />} />
      <Route path="ide" element={<IDE />} />
    </Route>
  )
);

export default rotas;
