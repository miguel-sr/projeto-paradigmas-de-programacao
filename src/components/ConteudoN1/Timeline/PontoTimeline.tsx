import "react-vertical-timeline-component/style.min.css";
import { ReactNode } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { white, zinc } from "tailwindcss/colors";

interface IPontoTimelineProps {
  data?: string;
  icone: ReactNode;
  corIcone: string;
  children: ReactNode;
}

const boxShadow = `0 0 0 4px ${zinc["300"]}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`;

export default function PontoTimeline({
  data,
  icone,
  corIcone,
  children,
}: IPontoTimelineProps) {
  return (
    <VerticalTimelineElement
      date={data}
      dateClassName="text-teal-700 font-bold text-lg opacity-80"
      iconStyle={{
        background: corIcone,
        color: white,
        boxShadow: boxShadow,
      }}
      contentStyle={{ background: zinc["200"] }}
      contentArrowStyle={{ borderRightColor: zinc["200"] }}
      icon={icone}
    >
      {children}
    </VerticalTimelineElement>
  );
}
