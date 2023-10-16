import colors from "tailwindcss/colors";

import { LuBinary } from "react-icons/lu";
import PontoTimeline from "./PontoTimeline";

export default function Decada1940() {
  return (
    <PontoTimeline
      data="Década de 1940"
      corIcone={colors.purple["500"]}
      icone={<LuBinary />}
    >
      <h3 className="font-semibold">Os Primeiros Computadores</h3>
      <p className="font-normal m-0">
        Durante a Segunda Guerra Mundial, o desenvolvimento de computadores
        eletrônicos acelerou, levando à construção do ENIAC nos Estados Unidos
        em 1945, muitas vezes considerado o primeiro computador eletrônico de
        grande escala.
      </p>
    </PontoTimeline>
  );
}
