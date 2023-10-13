import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { blue, green } from "tailwindcss/colors";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="16 de Agosto"
        iconStyle={{ background: blue["500"] }}
        icon={<BiCodeAlt className="text-white" />}
      >
        <h3 className="font-semibold">Paradigmas de Programação</h3>
        <h4>Bruno Diniz</h4>
        <p className="font-normal">
          Conteúdo... Donec vulputate ultrices semper. Praesent vitae justo ac
          lectus elementum sollicitudin a sagittis diam. Vestibulum nec congue
          ante. Quisque eu sem a odio aliquet egestas a sed lorem. Pellentesque
          faucibus elit vitae tellus mollis scelerisque.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="23 de Agosto"
        iconStyle={{ background: green["500"] }}
        icon={<BiCodeAlt className="text-white" />}
      >
        <h3 className="font-semibold flex items-center">
          <BsFillBookmarkFill className="text-green-500 mr-1" />
          Paradigmas de Programação
        </h3>
        <h4>Bruno Diniz</h4>
        <p className="font-normal">
          Conteúdo... Donec vulputate ultrices semper. Praesent vitae justo ac
          lectus elementum sollicitudin a sagittis diam. Vestibulum nec congue
          ante. Quisque eu sem a odio aliquet egestas a sed lorem. Pellentesque
          faucibus elit vitae tellus mollis scelerisque.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
