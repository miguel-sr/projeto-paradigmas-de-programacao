import { VerticalTimeline } from "react-vertical-timeline-component";
import PontoTimeline from "../ConteudoN1/Timeline/PontoTimeline";
import colors from "tailwindcss/colors";
import { BsFillPencilFill, BsStack } from "react-icons/bs";
import { FaEquals, FaUserAlt } from "react-icons/fa";

export default function TimelineCapacidadeEscrita() {
  return (
    <VerticalTimeline lineColor={colors.zinc["200"]}>
      <PontoTimeline
        data="Capacidade de Escrita"
        corIcone={colors.indigo["500"]}
        icone={<BsFillPencilFill />}
      >
        <h1 className="font-semibold">Simplicidade e Ortogonalidade</h1>
        <p className="font-normal my-1">
          Caso uma linguagem de programação tenha um grande número de diferentes
          construções, alguns programadores podem não estar familiarizados com
          todas elas. Isso pode levar ao uso inadequado de alguns recursos e ao
          desuso de outros que podem ser mais elegantes ou mais eficientes.
        </p>
        <p className="font-normal my-1">
          Um número menor de construções primitivas e um conjunto consistente de
          regras para combiná-las (ortogonalidade) é muito melhor do que existir
          um grande número de primitivas.
        </p>
        <p className="font-normal my-1">
          Uma ortogonalidade demasiada pode resultar em prejuízo para a
          capacidade de escrita, pois erros ao escrever programas podem não ser
          detectados, uma vez que quase todas as combinações de primitivas são
          permitidas. É preciso existir um equilíbrio
        </p>
      </PontoTimeline>
      <PontoTimeline
        data="Capacidade de Escrita"
        corIcone={colors.emerald["500"]}
        icone={<BsStack />}
      >
        <h1 className="font-semibold">Suporte para Abstração</h1>
        <p className="font-normal my-1">
          A abstração é a capacidade de definir e, depois, de usar estruturas ou
          operações complexas de uma maneira que permita ignorar muitos dos
          detalhes de implementação. Isto é possível, por exemplo, por meio da
          implementação de métodos.
        </p>
        <p className="font-normal my-1">
          Se criarmos métodos para manipular uma estrutura de dados do tipo
          pilha (inserir dados na pilha – empilhar, retirar dados da pilha –
          desempilhar e assim por diante) outros desenvolvedores poderão,
          posteriormente, manipular uma pilha apenas chamando estes métodos, sem
          necessidade de conhecer os detalhes da nossa implementação.
        </p>
      </PontoTimeline>
      <PontoTimeline
        data="Capacidade de Escrita"
        corIcone={colors.red["500"]}
        icone={<FaEquals />}
      >
        <h1 className="font-semibold">Expressividade</h1>
        <p className="font-normal my-1">
          A expressividade é a capacidade de que operadores muito poderosos
          permitam que uma grande quantidade de computação seja realizada com um
          programa muito pequeno. Um exemplo de expressividade, utilizando a
          linguagem Python, é o operador de atribuição (sinal de igualdade =)
        </p>
      </PontoTimeline>
      <PontoTimeline
        data="Capacidade de Escrita"
        corIcone={colors.purple["500"]}
        icone={<FaUserAlt />}
      >
        <h1 className="font-semibold">Confiabilidade</h1>
        <p className="font-normal my-1">
          Um programa é considerado confiável se ele se comportar de acordo com
          as suas especificações sob todas as condições. Isto pode ser
          verificado por meio de inúmeros testes que devem ser realizados antes
          do software ser disponibilizado aos usuários.
        </p>
      </PontoTimeline>
    </VerticalTimeline>
  );
}
