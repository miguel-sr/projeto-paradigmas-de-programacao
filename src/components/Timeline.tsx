import { VerticalTimeline } from "react-vertical-timeline-component";
import { AiFillApple } from "react-icons/ai";
import { zinc } from "tailwindcss/colors";
import PontoTimeline from "./PontoTimeline";

export default function Timeline() {
  return (
    <VerticalTimeline lineColor={zinc["200"]}>
      {/* Semana 1 - Início */}
      <PontoTimeline
        data="Semana 1"
        corIcone="Vermelho"
        icone={<AiFillApple />}
      >
        <h3 className="font-semibold">Paradigmas de Programação</h3>
        <h4>Bruno Diniz</h4>
        <p className="font-normal">
          Conteúdo... Donec vulputate ultrices semper. Praesent vitae justo ac
          lectus elementum sollicitudin a sagittis diam. Vestibulum nec congue
          ante. Quisque eu sem a odio aliquet egestas a sed lorem. Pellentesque
          faucibus elit vitae tellus mollis scelerisque.
        </p>
        <p className="font-normal">
          Conteúdo... Donec vulputate ultrices semper. Praesent vitae justo ac
          lectus elementum sollicitudin a sagittis diam. Vestibulum nec congue
          ante. Quisque eu sem a odio aliquet egestas a sed lorem. Pellentesque
          faucibus elit vitae tellus mollis scelerisque.
        </p>
      </PontoTimeline>
      {/* Semana 1 - Fim */}

      {/* Semana 2 - Início */}
      <PontoTimeline data="Semana 2" corIcone="Roxo" icone={<AiFillApple />}>
        <h3 className="font-semibold">Paradigmas de Programação</h3>
        <h4>Bruno Diniz</h4>
        <p className="font-normal">
          Conteúdo... Donec vulputate ultrices semper. Praesent vitae justo ac
          lectus elementum sollicitudin a sagittis diam. Vestibulum nec congue
          ante. Quisque eu sem a odio aliquet egestas a sed lorem. Pellentesque
          faucibus elit vitae tellus mollis scelerisque.
        </p>
        <p className="font-normal">
          Conteúdo... Donec vulputate ultrices semper. Praesent vitae justo ac
          lectus elementum sollicitudin a sagittis diam. Vestibulum nec congue
          ante. Quisque eu sem a odio aliquet egestas a sed lorem. Pellentesque
          faucibus elit vitae tellus mollis scelerisque.
        </p>
      </PontoTimeline>
      {/* Semana 2 - Fim */}
    </VerticalTimeline>
  );
}
