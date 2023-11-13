import { VerticalTimeline } from "react-vertical-timeline-component";
import { zinc } from "tailwindcss/colors";

import Decada1930 from "./Decada1930";
import Decada1940 from "./Decada1940";
import Decada1950 from "./Decada1950";
import Decada1960 from "./Decada1960";

export default function Timeline() {
  return (
    <div>
      <VerticalTimeline lineColor={zinc["200"]}>
        <div className="text-center relative bg-gray-200 py-3">
          <h1 className="text-4xl text-teal-700 font-bold">História</h1>
        </div>
        <Decada1930 />
        <Decada1940 />
        <Decada1950 />
        <Decada1960 />
      </VerticalTimeline>
    </div>
  );
}
