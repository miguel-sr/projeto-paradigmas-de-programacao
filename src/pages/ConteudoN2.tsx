import TimelineAvaliacaoLinguagem from "../components/ConteudoN2/TimelineAvaliacaoLinguagem";
import TimelineCapacidadeEscrita from "../components/ConteudoN2/TimelineCapacidadeEscrita";
import TimelineDominios from "../components/ConteudoN2/TimelineDominios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ConteudoN2() {
  return (
    <>
      <Navbar />
      <section>
        <TimelineDominios />
        <div className="w-full bg-teal-700 py-5">
          <h1 className="text-white font-bold text-3xl text-center">
            Primitivas
          </h1>
          <p className="text-zinc-200 font-medium w-1/2 mx-auto text-center">
            Primitivas são comandos básicos que uma linguagem de programação
            entrega para um programador. São utilizados para a realização de
            tarefas simples como atribuição de valores a variáveis, entrada e
            saída de dados, e operações matemáticas e lógicas.
          </p>
        </div>
        <TimelineAvaliacaoLinguagem />
        <div className="w-full bg-teal-700 py-5">
          <h1 className="text-white font-bold text-3xl text-center">
            Capacidade de Escrita
          </h1>
          <p className="text-zinc-200 font-medium w-1/2 mx-auto text-center">
            A capacidade de escrita, ou writability, é a medida de quão
            facilmente uma linguagem pode ser utilizada para criar programas
            para um domínio de problema escolhido. A maioria das características
            da linguagem que afeta a legibilidade também afeta a capacidade de
            escrita (escrever um programa exige uma releitura frequente da parte
            que já foi escrita pelo programador) e é essencial para a manutenção
            de sistemas
          </p>
        </div>
        <TimelineCapacidadeEscrita />
      </section>
      <Footer />
    </>
  );
}
