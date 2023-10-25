import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type ModalParadigmsContextType = {
  isModalParadigmOpen: boolean;
  modalParadigmInfo: {
    imageUrl: string;
    name: string;
    content: string;
  };
  setIsModalParadigmOpen: Dispatch<SetStateAction<boolean>>;
  setModalParadigmInfo: Dispatch<SetStateAction<{
    imageUrl: string;
    name: string;
    content: string;
  }>>;
};

const ModalParadigmsContext = createContext<ModalParadigmsContextType | undefined>(undefined);

export function ModalParadigmsProvider({ children }: { children: ReactNode }) {
  const [isModalParadigmOpen, setIsModalParadigmOpen] = useState(false);
  const [modalParadigmInfo, setModalParadigmInfo] = useState({
    imageUrl: '',
    name: '',
    content: '',
  });

  const contextValue: ModalParadigmsContextType = {
    isModalParadigmOpen,
    modalParadigmInfo,
    setIsModalParadigmOpen,
    setModalParadigmInfo,
  };

  return (
    <ModalParadigmsContext.Provider value={contextValue}>
      {children}
    </ModalParadigmsContext.Provider>
  );
}

export function useModalParadigms() {
  const context = useContext(ModalParadigmsContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalParadigmsProvider');
  }
  return context;
}
