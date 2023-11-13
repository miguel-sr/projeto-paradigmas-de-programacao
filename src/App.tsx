import "./styles/global.css";

import { RouterProvider } from "react-router-dom";
import rotas from "./routes";
import { ModalParadigmsProvider } from "./components/ConteudoN1/conteudo-components/ModalParadigmsProvider";
import { ModalLanguagesProvider } from "./components/ConteudoN1/conteudo-components/ModalLanguagesProvider";

function App() {
  return <ModalLanguagesProvider><ModalParadigmsProvider><RouterProvider router={rotas} /></ModalParadigmsProvider></ModalLanguagesProvider>;
}

export default App;
