import { useModalLanguages } from "../ModalLanguagesProvider";
import { useModalParadigms } from "../ModalParadigmsProvider";

export type CardType = {
  type: string;
  imageUrl: string;
  name: string;
  info?: string;
  content: string;
};

export const Card = ({ type, imageUrl, info, name, content }: CardType) => {
  const { setIsModalParadigmOpen, setModalParadigmInfo } = useModalParadigms();
  const { setIsModalLanguageOpen, setModalLanguageInfo } = useModalLanguages();

  function openModal() {
    if (type === "Paradigm") {
      setModalParadigmInfo({ imageUrl, name, content });
      setIsModalParadigmOpen(true);
    }
    if (type === "Language") {
      setModalLanguageInfo({ imageUrl, name, content });
      setIsModalLanguageOpen(true);
    }
  }

  return (
    <article
      className="w-52 mx-3 bg-white cursor-pointer h-[280px] hover:scale-110 transition-[transform] duration-300"
      onClick={openModal}
    >
      <div
        className="aspect-square bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <h3 className="py-3 font-bold">{name}</h3>
      <p>{info}</p>
    </article>
  );
};
