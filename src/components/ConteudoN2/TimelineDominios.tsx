import { VerticalTimeline } from "react-vertical-timeline-component";
import PontoTimeline from "../ConteudoN1/Timeline/PontoTimeline";
import { blue, green, orange, purple, yellow, zinc } from "tailwindcss/colors";
import { BsCodeSlash } from "react-icons/bs";
import { GiArtificialIntelligence, GiMaterialsScience } from "react-icons/gi";
import { BiStore } from "react-icons/bi";
import { SiPurescript } from "react-icons/si";

export default function TimelineDominios() {
  return (
    <>
      <div className="w-1 bg-zinc-200 h-8 mx-auto" />
      <h1 className="text-4xl text-teal-700 font-bold text-center py-3 bg-zinc-200 max-w-[1170px] mx-auto">
        Domínios de Programação
      </h1>
      <VerticalTimeline lineColor={zinc["200"]}>
        <PontoTimeline corIcone={purple["500"]} icone={<BsCodeSlash />}>
          <p className="font-normal my-1">
            Os domínios de programação representam diversas áreas especializadas
            que englobam tecnologias, linguagens e conceitos específicos no
            desenvolvimento de software e resolução de problemas computacionais.
            Cada domínio é distinto e demanda habilidades particulares.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Aplicações Científicas"
          corIcone={orange["500"]}
          icone={<GiMaterialsScience />}
        >
          <p className="font-normal my-1">
            Aplicações científicas são programas computacionais especializados
            no processamento de dados, cálculos complexos e simulações,
            essenciais para a pesquisa e exploração em diversas áreas
            científicas, como física, química, biologia, engenharia,
            meteorologia e astronomia.
          </p>
          <p className="font-normal my-1">
            Estas ferramentas capacitam cientistas a analisar grandes conjuntos
            de dados, resolver equações matemáticas, simular fenômenos naturais
            e realizar análises estatísticas, contribuindo significativamente
            para o avanço do conhecimento e embasando decisões informadas em
            suas respectivas disciplinas.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Aplicações Comerciais"
          corIcone={blue["500"]}
          icone={<BiStore />}
        >
          <p className="font-normal my-1">
            Aplicações comerciais são programas de computador desenvolvidos para
            atender às necessidades específicas de empresas, facilitando
            operações como vendas, contabilidade, folha de pagamento e controle
            de estoque. Projetadas para aprimorar eficiência e produtividade,
            essas aplicações variam em complexidade, oferecendo recursos como
            relatórios, análises de dados e integração com outras ferramentas
            empresariais.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Aplicações de Inteligência Artificial"
          corIcone={green["500"]}
          icone={<GiArtificialIntelligence />}
        >
          <p className="font-normal my-1">
            A Inteligência Artificial (IA) é uma área da ciência da computação
            que se distingue por sua capacidade de processar conhecimento em vez
            de dados numéricos. Este artigo explora aplicações de IA, destacando
            o uso de computações simbólicas para armazenar e processar
            informações, em contraste com a abordagem tradicional focada em
            dados numéricos.
          </p>
          <p className="font-normal my-1">
            Aplicações de IA são sistemas que representam e manipulam
            conhecimento para tomar decisões e resolver problemas complexos,
            imitando o raciocínio humano. O texto também menciona linguagens de
            programação como LISP e PROLOG, amplamente utilizadas na
            implementação de aplicações de IA.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Linguagens de Scripting"
          corIcone={yellow["500"]}
          icone={<SiPurescript />}
        >
          <p className="font-normal my-1">
            Linguagens de scripting, ou script, são projetadas para escrever
            scripts, que são sequências de comandos executados em ambientes de
            computação. Elas automatizam tarefas, manipulam dados e controlam
            aplicativos. Sua principal característica é serem interpretadas,
            executando o código linha por linha em tempo de execução,
            proporcionando flexibilidade e acessibilidade para rápidas
            modificações.
          </p>
          <p className="font-normal my-1">
            São exemplos o PHP, Javascript, Python entre outras linguagens.
          </p>
        </PontoTimeline>
      </VerticalTimeline>
    </>
  );
}
