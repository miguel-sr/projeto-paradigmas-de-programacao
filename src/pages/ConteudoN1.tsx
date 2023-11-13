import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timeline from "../components/ConteudoN1/Timeline";
import { Paradigms } from "../components/ConteudoN1/conteudo-components/paradgms/Paradigms";
import { ModalParadigm } from "../components/ConteudoN1/conteudo-components/modal/ModalParadigm";
import { useModalParadigms } from "../components/ConteudoN1/conteudo-components/ModalParadigmsProvider";
import { useModalLanguages } from "../components/ConteudoN1/conteudo-components/ModalLanguagesProvider";
import { ModalLanguage } from "../components/ConteudoN1/conteudo-components/modal/ModalLanguage";
import { Languages } from "../components/ConteudoN1/conteudo-components/languages/Languages";

export default function ConteudoN1() {
  const { isModalParadigmOpen } = useModalParadigms();
  const { isModalLanguageOpen } = useModalLanguages();

  return (
    <>
      <Navbar />
      <section>
        <Timeline />
        <Paradigms />
        {isModalParadigmOpen && <ModalParadigm />}
        <Languages />
        {isModalLanguageOpen && <ModalLanguage />}
      </section>
      <Footer />
    </>
  );
}
