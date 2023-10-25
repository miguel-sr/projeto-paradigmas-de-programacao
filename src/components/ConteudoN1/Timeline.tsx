import { VerticalTimeline } from "react-vertical-timeline-component";
import { zinc } from "tailwindcss/colors";

import Decada1930 from "./Decada1930";
import Decada1940 from "./Decada1940";
import Decada1950 from "./Decada1950";
import Decada1960 from "./Decada1960";
import Historia from "./História";
import Paradgmas from "./Paradgmas";
import Linguagens from "./Linguagens";


import { Paradigms } from "./conteudo-components/paradgms/Paradigms";
import { ModalParadigm } from "./conteudo-components/modal/ModalParadigm";
import { useModalParadigms } from "./conteudo-components/ModalParadigmsProvider";
import { Languages } from "./conteudo-components/languages/Languages";
import { useModalLanguages } from "./conteudo-components/ModalLanguagesProvider";
import { ModalLanguage } from "./conteudo-components/modal/ModalLanguage";



export default function Timeline() {

  const { isModalParadigmOpen } = useModalParadigms();
  const { isModalLanguageOpen } = useModalLanguages();
  return (
    <div>
      <VerticalTimeline lineColor={zinc["200"]}>
        <Historia/>
        <Decada1930 />
        <Decada1940 />
        <Decada1950 />
        <Decada1960 />
        
      </VerticalTimeline>
      <Paradgmas/>
      
      
      
      <Paradigms>
        {isModalParadigmOpen && (
          <ModalParadigm />
        )}
      </Paradigms>
      <br /><Linguagens/>
      <Languages>
          {isModalLanguageOpen && (
            <ModalLanguage />
          )}
      </Languages>
    </div>
  );
    
}
