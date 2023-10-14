import { ReactNode } from "react";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {
  red,
  green,
  blue,
  yellow,
  purple,
  orange,
  white,
  zinc,
} from "tailwindcss/colors";

interface IPontoTimelineProps {
  data: string;
  icone: ReactNode;
  corIcone: Cores;
  children: ReactNode[];
}

type Cores = "Vermelho" | "Verde" | "Azul" | "Amarelo" | "Roxo" | "Laranja";

export default function PontoTimeline({
  data,
  icone,
  corIcone,
  children,
}: IPontoTimelineProps) {
  const boxShadow = `0 0 0 4px ${zinc["300"]}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`;

  const estilosParaIcone: { [key in Cores]: React.CSSProperties } = {
    Vermelho: {
      background: red["500"],
      color: white,
      boxShadow: boxShadow,
    },
    Verde: {
      background: green["500"],
      color: white,
      boxShadow: boxShadow,
    },
    Azul: {
      background: blue["500"],
      color: white,
      boxShadow: boxShadow,
    },
    Amarelo: { background: yellow["500"], color: white },
    Roxo: {
      background: purple["500"],
      color: white,
      boxShadow: boxShadow,
    },
    Laranja: {
      background: orange["500"],
      color: white,
      boxShadow: boxShadow,
    },
  };

  const iconStyle = estilosParaIcone[corIcone];

  return (
    <VerticalTimelineElement
      date={data}
      dateClassName="text-white opacity-100"
      iconStyle={iconStyle}
      contentStyle={{ background: zinc["200"] }}
      contentArrowStyle={{ borderRightColor: zinc["200"] }}
      icon={icone}
    >
      {children}
    </VerticalTimelineElement>
  );
}
