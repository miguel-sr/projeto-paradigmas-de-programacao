import { red } from "tailwindcss/colors";
import { BiSolidNetworkChart } from "react-icons/bi";

import PontoTimeline from "./PontoTimeline";

export default function Decada1960() {
  return (
    <PontoTimeline
      data="Década de 1960"
      corIcone={red["500"]}
      icone={<BiSolidNetworkChart />}
    >
      <h3 className="font-semibold">ARPANET</h3>
      <p className="font-normal my-1">
        A década de 1960 foi marcada pela miniaturização e popularização dos
        computadores. Surgiram os primeiros mainframes, e a IBM lançou o IBM
        System/360, que estabeleceu padrões de compatibilidade. A ARPANET,
        precursora da Internet, foi desenvolvida nos Estados Unidos.
      </p>
    </PontoTimeline>
  );
}
