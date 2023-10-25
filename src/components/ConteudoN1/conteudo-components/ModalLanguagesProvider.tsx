import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type ModalLanguagesContextType = {
  isModalLanguageOpen: boolean;
  modalLanguageInfo: {
    imageUrl: string;
    name: string;
    content: string;
  };
  setIsModalLanguageOpen: Dispatch<SetStateAction<boolean>>;
  setModalLanguageInfo: Dispatch<SetStateAction<{
    imageUrl: string;
    name: string;
    content: string;
  }>>;
};

const ModalLanguagesContext = createContext<ModalLanguagesContextType | undefined>(undefined);

export function ModalLanguagesProvider({ children }: { children: ReactNode }) {
  const [isModalLanguageOpen, setIsModalLanguageOpen] = useState(false);
  const [modalLanguageInfo, setModalLanguageInfo] = useState({
    imageUrl: '',
    name: '',
    content: '',
  });

  const contextValue: ModalLanguagesContextType = {
    isModalLanguageOpen,
    modalLanguageInfo,
    setIsModalLanguageOpen,
    setModalLanguageInfo,
  };

  return (
    <ModalLanguagesContext.Provider value={contextValue}>
      {children}
    </ModalLanguagesContext.Provider>
  );
}

export function useModalLanguages() {
  const context = useContext(ModalLanguagesContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalLanguagesProvider');
  }
  return context;
}
