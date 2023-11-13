import { useModalLanguages } from "../ModalLanguagesProvider";
import styles from "../modal/styles.module.css";

export const ModalLanguage = () => {
  const { modalLanguageInfo, setIsModalLanguageOpen } = useModalLanguages();

  const closeModal = () => {
    setIsModalLanguageOpen(false);
  };

  const modalImageStyle = {
    backgroundImage: `url(${modalLanguageInfo.imageUrl})`,
  };

  return (
    <div className={styles.content}>
      <div className={styles.modal} style={{ height: "55%" }}>
        <div className={styles.image} style={modalImageStyle}></div>
        <div className={styles.modal__content}>
          <div className={styles.box_content}>
            <h2 className={styles.title}>{modalLanguageInfo.name}</h2>
            <div className={styles.content__text}>
              {modalLanguageInfo.content}
            </div>
          </div>
          <div className={styles.box__options}>
            <button className={styles.option__close} onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
