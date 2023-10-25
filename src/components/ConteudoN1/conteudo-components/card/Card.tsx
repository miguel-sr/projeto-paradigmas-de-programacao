import { useModalLanguages } from '../ModalLanguagesProvider';
import { useModalParadigms } from '../ModalParadigmsProvider';
import styles from '../card/styles.module.css'

export type CardType = {
    type: string;
    imageUrl: string;
    name: string;
    info?: string;
    content: string;
}

export const Card = ( { type, imageUrl, name, info, content} : CardType ) => {
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`
    };

    const { setIsModalParadigmOpen, setModalParadigmInfo } = useModalParadigms();
    const { setIsModalLanguageOpen, setModalLanguageInfo} = useModalLanguages();

    function openModal(){
        if( type === 'Paradigm' ){

            setModalParadigmInfo({imageUrl, name, content});
            setIsModalParadigmOpen(true);
        }
        if( type === 'Language' ) {
            setModalLanguageInfo({imageUrl, name, content});
            setIsModalLanguageOpen(true);
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.card__image} style={cardStyle}></div>
            <br />
            <label className={styles.card__name}>{name}</label>
            <label className={styles.card__info}>- {info}</label>
            <br />
            <br />
            <button className={styles.card__button} onClick={openModal}>Ver mais</button>
        </div>
    )
}