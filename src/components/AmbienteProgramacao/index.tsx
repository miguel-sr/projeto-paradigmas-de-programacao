import CodeMirror, { basicSetup } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";

import { useEffect, useState } from "react";
import "./AmbienteProgramacao.css";

import ObterCodigoPadrao from "../../utils/ObterCodigoPadrao";
import ObterLangExtension from "../../utils/ObterLangExtension";
import Toolbar from "./Toolbar"; 

export default function AmbienteProgramacao() {
  const [codigo, setCodigo] = useState<string>();
  const [linguagemSelecionada, setLinguagemSelecionada] = useState<number>(0);
  const [resultado, setResultado] = useState<string>();

  useEffect(() => {
    setCodigo(ObterCodigoPadrao(linguagemSelecionada));
  }, [linguagemSelecionada]);

  return (
    <section className="w-full h-full mx-auto">
      <Toolbar
        codigo={codigo}
        linguagemSelecionada={linguagemSelecionada}
        setLinguagemSelecionada={setLinguagemSelecionada}
        setResultado={setResultado}
      />
      <div className="flex justify-start items-end w-full">
        <div className="w-1/2 m-3">
          <h1 className="font-semibold text-blue-500 text-2xl mb-3">Código</h1>
          <CodeMirror
            value={codigo}
            className="outline outline-1 outline-zinc-400"
            onChange={(codigo) => setCodigo(codigo)}
            height={`${window.innerHeight - 200}px`}
            extensions={[
              basicSetup(),
              langs[ObterLangExtension(linguagemSelecionada || 0)](),
            ]}
          />
        </div>
        <div className="w-1/2 m-3 border-2">
          <h1 className="font-semibold text-blue-500 text-2xl mb-3">
            Resultado
          </h1>
          <CodeMirror
            editable={false}
            className="outline outline-1 outline-zinc-400"
            value={resultado}
            height={`${window.innerHeight - 200}px`}
          />
        </div>
      </div>
    </section>
  );
}
