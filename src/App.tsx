import "./styles/global.css";

import { RouterProvider } from "react-router-dom";
import rotas from "./routes";

function App() {
  return <RouterProvider router={rotas} />;
}

export default App;
