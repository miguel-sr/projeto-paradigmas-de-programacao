import { VerticalTimeline } from "react-vertical-timeline-component";
import PontoTimeline from "../ConteudoN1/Timeline/PontoTimeline";
import colors from "tailwindcss/colors";
import { AiOutlineControl, AiOutlineOrderedList } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { SiCompilerexplorer, SiDatabricks } from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

export default function TimelineAvaliacaoLinguagem() {
  return (
    <>
      <div className="w-1 bg-zinc-200 h-8 mx-auto" />
      <h1 className="text-4xl text-teal-700 font-bold text-center py-3 bg-zinc-200 max-w-[1170px] mx-auto">
        Características de Avaliação de uma Linguagem
      </h1>
      <VerticalTimeline lineColor={colors.zinc["200"]}>
        <PontoTimeline
          data="Legibilidade"
          corIcone={colors.cyan["500"]}
          icone={<AiOutlineOrderedList />}
        >
          <p className="font-normal my-1">
            A legibilidade é um critério de avaliação que diz respeito à
            facilidade com que os programas podem ser lidos e entendidos. Este
            entendimento é importante para a manutenção dos programas.
          </p>
          <p className="font-normal my-1">
            A legibilidade pode ser avaliada por meio das seguintes
            características:
          </p>
          <ul className="ml-4">
            <li>
              <b>1.</b> Simplicidade global;
            </li>
            <li>
              <b>2.</b> Ortogonalidade;
            </li>
            <li>
              <b>3.</b> Instruções de controle;
            </li>
            <li>
              <b>4.</b> Tipos de dados e estruturas;
            </li>
            <li>
              <b>5.</b> Sintaxe.
            </li>
          </ul>
        </PontoTimeline>
        <PontoTimeline
          data="Legibilidade"
          corIcone={colors.indigo["500"]}
          icone={<BiWorld />}
        >
          <h1 className="font-semibold">Simplicidade Global</h1>
          <p className="font-normal my-1">
            Refere-se ao princípio de que um sistema ou programa deve ser
            projetado e implementado de forma simples e fácil de entender. Isso
            facilita a manutenção, a depuração e a colaboração entre os
            programadores.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Legibilidade"
          corIcone={colors.emerald["500"]}
          icone={<SiDatabricks />}
        >
          <h1 className="font-semibold">Ortogonalidade</h1>
          <p className="font-normal my-1">
            A ortogonalidade em programação significa que as funcionalidades do
            sistema ou da linguagem de programação são independentes umas das
            outras, de modo que uma mudança em uma parte do sistema não afeta
            outras partes. Isso torna o sistema mais flexível e menos propenso a
            bugs.
          </p>
          <p className="font-normal my-1">
            Ortogonalidade em uma linguagem de programação significa que um
            conjunto relativamente pequeno de construções primitivas pode ser
            combinado a um número relativamente pequeno de formas para construir
            as estruturas de controle e de dados da linguagem.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Legibilidade"
          corIcone={colors.fuchsia["500"]}
          icone={<AiOutlineControl />}
        >
          <h1 className="font-semibold">Instruções de controle</h1>
          <p className="font-normal my-1">
            Refere-se às estruturas de controle em um programa, como
            condicionais (if, else), loops (for, while), e instruções de desvio
            (goto). Elas permitem que um programa tome decisões e execute
            diferentes ações com base em condições ou itere sobre um conjunto de
            dados.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Legibilidade"
          corIcone={colors.pink["500"]}
          icone={<TbDatabase />}
        >
          <h1 className="font-semibold">Tipos de dados e estruturas</h1>
          <p className="font-normal my-1">
            Refere-se aos diferentes tipos de valores que podem ser armazenados
            em uma variável ou estrutura de dados, como números inteiros,
            números de ponto flutuante, strings, etc. As estruturas de dados são
            maneiras de organizar e armazenar esses tipos de dados, como arrays,
            listas, pilhas, filas, árvores, entre outros.
          </p>
        </PontoTimeline>
        <PontoTimeline
          data="Legibilidade"
          corIcone={colors.blue["500"]}
          icone={<SiCompilerexplorer />}
        >
          <h1 className="font-semibold">Sintaxe</h1>
          <p className="font-normal my-1">
            A sintaxe se refere às regras gramaticais e à estrutura de um código
            em uma linguagem de programação específica. Cada linguagem de
            programação tem sua própria sintaxe, que deve ser seguida para que o
            código seja correto e compreensível para o compilador ou
            interpretador da linguagem
          </p>
        </PontoTimeline>
      </VerticalTimeline>
    </>
  );
}
