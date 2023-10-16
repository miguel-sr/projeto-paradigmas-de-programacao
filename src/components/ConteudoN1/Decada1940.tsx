import { purple } from "tailwindcss/colors";
import { PiComputerTowerFill } from "react-icons/pi";

import Eniac from "/src/assets/eniac.webp";
import PontoTimeline from "./PontoTimeline";

export default function Decada1940() {
  return (
    <PontoTimeline
      data="Década de 1940"
      corIcone={purple["500"]}
      icone={<PiComputerTowerFill />}
    >
      <h3 className="font-semibold">Os Primeiros Computadores</h3>
      <div className="flex flex-col">
        <p className="font-normal m-0">
          Durante a Segunda Guerra Mundial, o desenvolvimento de computadores
          eletrônicos acelerou, levando à construção do ENIAC nos Estados Unidos
          em 1945, muitas vezes considerado o primeiro computador eletrônico de
          grande escala.
        </p>
        <img src={Eniac} className="mt-3" alt="Foto do ENIAC" />
      </div>
    </PontoTimeline>
  );
}
