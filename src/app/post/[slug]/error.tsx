"use client"

import Link from "next/link"
import styles from "./styles.module.scss"

export default function Error() {
    return(
        <div className={styles.error}>
            <h1>Ops! Essa página não existe!</h1>
            <Link href="/">
                Voltar para Home
            </Link>
        </div>
    )
}