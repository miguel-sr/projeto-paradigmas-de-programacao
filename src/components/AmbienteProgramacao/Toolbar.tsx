import api from "../../lib/axios";

import "./AmbienteProgramacao.css";

export default function Toolbar({
  codigo,
  linguagemSelecionada,
  setLinguagemSelecionada,
  setResultado,
}: {
  codigo: string | undefined;
  linguagemSelecionada: number;
  setLinguagemSelecionada: React.Dispatch<React.SetStateAction<number>>;
  setResultado: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const listaDeLinguagens = [
    {
      id: 86,
      name: "C#",
      version: 7,
    },
    {
      id: 1,
      name: "C++",
      version: 1,
    },
    {
      id: 5,
      name: "Fortran",
      version: 1,
    },
    {
      id: 10,
      name: "Java",
      version: 1,
    },
    {
      id: 56,
      name: "Node.js",
      version: 1,
    },
    {
      id: 116,
      name: "Python 3.x",
      version: 1,
    },
  ];

  async function CompilarCodigo() {
    if (linguagemSelecionada == undefined) return;

    const compilerVersionId =
      listaDeLinguagens?.find((x) => x.id == linguagemSelecionada)?.version ||
      1;

    const submissionData = {
      compilerId: linguagemSelecionada,
      compilerVersionId: compilerVersionId,
      source: `${codigo}`,
    };

    try {
      const resposta = await api.post("sphere/submissions", { submissionData });
      setResultado(`${resposta.data.resultadoCompilado}`);
    } catch (error: any) {
      setResultado(`${error.response.data.resultadoCompilado}`);
    }
  }

  return (
    <div className="bg-zinc-700 p-3 flex space-x-5">
      <button
        className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 text-white font-semibold px-5 py-1"
        onClick={() => (location.href = "/")}
      >
        Voltar
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 transition-colors duration-300 text-white font-semibold px-5 py-1"
        onClick={() => CompilarCodigo()}
      >
        Compilar Código
      </button>
      <select
        className="w-32"
        onChange={(x) => setLinguagemSelecionada(parseInt(x.target.value))}
      >
        <option defaultChecked value={undefined}>
          Selecione
        </option>
        {listaDeLinguagens.map((x) => (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        ))}
      </select>
    </div>
  );
}
