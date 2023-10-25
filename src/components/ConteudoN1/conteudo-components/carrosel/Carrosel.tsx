import { ReactNode, useEffect, useRef } from 'react'
import styles from '../carrosel/styles.module.css'

export type CarroselType = {
    children: ReactNode;
}

export const Carrosel = ( { children } : CarroselType) => {
    const carroselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = carroselRef.current;
    
        const handleScroll = (e: any) => {
          if (container) {
            container.scrollLeft += e.deltaY;
            e.preventDefault(); // Impede a rolagem da página
          }
        };
    
        if (container) {
          container.addEventListener('wheel', handleScroll, { passive: false });
        }
    
        return () => {
          if (container) {
            container.removeEventListener('wheel', handleScroll);
          }
        };
      }, []);

    return (
        <div className={styles.carrosel} ref={carroselRef}>
            {children}
        </div>
    )
}