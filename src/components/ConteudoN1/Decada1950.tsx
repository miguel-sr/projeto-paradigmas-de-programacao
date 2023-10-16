import { orange } from "tailwindcss/colors";
import { LuComputer } from "react-icons/lu";

import Univac from "/src/assets/UNIVAC.jpg";
import PontoTimeline from "./PontoTimeline";

export default function Decada1950() {
  return (
    <PontoTimeline
      data="Década de 1950"
      corIcone={orange["500"]}
      icone={<LuComputer />}
    >
      <h3 className="font-semibold">Os Primeiros Computadores</h3>
      <div className="flex flex-col">
        <p className="font-normal m-0">
          Esta década viu o surgimento dos primeiros computadores comerciais,
          como o UNIVAC I, que foi usado para fins de processamento de dados
          empresariais e científicos. A linguagem de programação Fortran também
          foi desenvolvida nessa década.
        </p>
        <img src={Univac} className="mt-3" alt="Foto do UNIVAC I" />
      </div>
    </PontoTimeline>
  );
}
