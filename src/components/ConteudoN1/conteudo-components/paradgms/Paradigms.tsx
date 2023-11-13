import { ReactNode } from "react";
import styles from "../paradgms/styles.module.css";
import { Card } from "../card/Card";
import { Carrosel } from "../carrosel/Carrosel";

export type ParadigmsType = {
  children: ReactNode;
};

export const Paradigms = () => {
  return (
    <section className="h-[70vh] flex overflow-hidden relative justify-center items-center text-center bg-teal-700 mb-10">
      <div className="bg-teal-900 h-[150%] w-[70%] rotate-[30deg] absolute left-[60%] -top-[10%]" />
      <div className={styles.grid}>
        <div className={styles.header}>
          <h2 className="text-3xl font-bold py-3 text-white">
            O que são paradigmas?
          </h2>
          <p className="text-zinc-200 w-5/6 font-medium">
            A programação é a forma pela qual os computadores se comunicam, e há
            diversas abordagens para escrever códigos que executam tarefas
            específicas. Cada uma destas abordagens é denominada paradigma de
            programação. Neste artigo, vamos investigar os principais tipos de
            paradigmas de programação, visando auxiliá-lo a aprofundar seu
            conhecimento nas diversas formas de abordar a elaboração de códigos.
          </p>
        </div>
        <div className={styles.main}>
          <Carrosel>
            <Card
              type="Paradigm"
              imageUrl="https://www.cin.ufpe.br/~jndm/plp/imagens/imperativo.jpg"
              name="Paradigma imperativo"
              content="O paradigma imperativo é talvez o mais comum. Ele se concentra em descrever as etapas necessárias para atingir um objetivo. Programadores imperativos fornecem instruções explícitas para o computador, especificando o que fazer e como fazer. Linguagens como C, C++, e Java adotam esse paradigma. O paradigma imperativo, provavelmente o mais difundido, dedica-se a detalhar os passos indispensáveis para alcançar um determinado fim. Os programadores adeptos desse paradigma instruem o computador de forma explícita, especificando minuciosamente os procedimentos e métodos necessários. Linguagens de programação como C, C++ e Java são exemplares na adoção desse modo de programação."
            />
            <Card
              type="Paradigm"
              imageUrl="https://di3xp7dfi3cq.cloudfront.net/media/magefan_blog/10-applications-of-object-oriented-programming.jpeg"
              name="Paradigma Orientado a Objetos"
              content="No paradigma orientado a objetos, o código é estruturado em “objetos” que incorporam dados e funcionalidades. Esses objetos colaboram uns com os outros para executar tarefas específicas. Essa metodologia fomenta a reutilização de código e a encapsulação. Linguagens de programação como Java, Python e C# ilustram exemplarmente essa abordagem orientada a objetos."
            />
            <Card
              type="Paradigm"
              imageUrl="https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/10/logica.jpg"
              name="Paradigma Lógico"
              content="No paradigma lógico, os programas são construídos com base em regras lógicas e fatos. Sistemas lógicos buscam deduzir conclusões a partir dos fatos e regras estabelecidos pelo programador. Um exemplo notório desse paradigma é a linguagem Prolog, que ilustra essa abordagem de forma destacada."
            />
            <Card
              type="Paradigm"
              imageUrl="data:image/jpeg;base64,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"
              name="Paradigma Funcional"
              content="O paradigma funcional tem como fundamento a concepção de que os programas devem ser forjados a partir de funções matemáticas inalteradas. Este modelo evita estados mutáveis e destaca a manutenção da imutabilidade dos dados. Linguagens como Haskell, Lisp e, em certa medida, JavaScript adotam essa abordagem."
            />
            <Card
              type="Paradigm"
              imageUrl="https://arquivo.devmedia.com.br/marketing/img/artigo-introducao-a-programacao-estruturada-24951.png"
              name="Paradigma Estruturado"
              content="O paradigma estruturado destaca a organização do código em arranjos hierárquicos, incentivando a subdivisão do programa em funções ou procedimentos distintamente delineados. Isso aprimora a legibilidade e a manutenção do código. Linguagens de programação como C, Pascal e Fortran exemplificam essa abordagem estruturada."
            />
            <Card
              type="Paradigm"
              imageUrl="https://miro.medium.com/v2/resize:fit:990/1*1exfMNuxFyqj6rZU0hGs8A.png"
              name="Paradigma Procedural"
              content="No paradigma procedural, o código é organizado em procedimentos ou funções que podem ser invocados para desempenhar tarefas específicas. Um exemplo notável de linguagem procedural é o C."
            />
          </Carrosel>
        </div>
      </div>
    </section>
  );
};
