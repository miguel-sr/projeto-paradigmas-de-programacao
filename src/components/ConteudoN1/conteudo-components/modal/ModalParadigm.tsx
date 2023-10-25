import { useModalParadigms } from '../ModalParadigmsProvider';
import styles from '../modal/styles.module.css'

export const ModalParadigm = () => {

    const { modalParadigmInfo, setIsModalParadigmOpen } = useModalParadigms();
    
    const closeModal = () => {
        setIsModalParadigmOpen(false);
    };

    const modalImageStyle = {
        backgroundImage: `url(${modalParadigmInfo.imageUrl})`
    }

    return(
        <div className={styles.content}>
            <div className={styles.modal}>
                <div className={styles.image} style={modalImageStyle}>
                </div>
                <div className={styles.modal__content}>
                    <div className={styles.box_content}>
                        <h2 className={styles.title}>{modalParadigmInfo.name}</h2>
                        <div className={styles.content__text}>{modalParadigmInfo.content}</div>
                    </div>
                    <div className={styles.box__options}>
                        <button className={styles.option__close} onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}