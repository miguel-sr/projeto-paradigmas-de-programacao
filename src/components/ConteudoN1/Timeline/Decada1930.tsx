import PontoTimeline from "./PontoTimeline";
import { emerald } from "tailwindcss/colors";
import { LuBinary } from "react-icons/lu";

import MaquinaTuring from "/src/assets/Máquina de Turing.jpg";

export default function Decada1930() {
  return (
    <PontoTimeline
      data="Década de 1930"
      corIcone={emerald["500"]}
      icone={<LuBinary />}
    >
      <h3 className="font-semibold">Alan Turing</h3>
      <div className="flex flex-col">
        <p className="font-normal my-1">
          A jornada começa com a Máquina de Turing, um conceito teórico
          inventado por Alan Turing em 1936. Essa máquina imaginária consistia
          em uma fita infinita, uma cabeça de leitura/escrita e um conjunto de
          regras que permitiam realizar cálculos.
        </p>
        <img
          src={MaquinaTuring}
          className="mt-3"
          alt="Imagem ilustrativa da máquina de turing"
        />
      </div>
    </PontoTimeline>
  );
}
