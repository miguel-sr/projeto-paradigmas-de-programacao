import { ReactNode } from "react";
import styles from "../carrosel/styles.module.css";

export type CarroselType = {
  children: ReactNode;
};

export const Carrosel = ({ children }: CarroselType) => {
  return <div className={styles.carrosel}>{children}</div>;
};
