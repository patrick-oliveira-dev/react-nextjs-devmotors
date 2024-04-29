import { ReactNode } from 'react'
import styles from './style.module.scss'

export function Container({ children }: {children: ReactNode}) {


    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}