"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { X, Menu } from "lucide-react"
import { ServiceProps } from '@/utils/model/home.type'

export function Submenu( { services }: {services: ServiceProps[]}) {

    console.log(services)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {

            if(window.innerWidth > 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

    }, [isOpen])

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return(
        <section className={styles.submenu}>

            <div className={styles.submenuIcon} onClick={toggleMenu}>
                <Menu size={34} color='#121212'/>
                Menu
            </div>


            <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>

                {isOpen && (
                    <button onClick={toggleMenu} className={styles.closeBtn}><X size={54} color='#121212'/></button>
                )}


                {services.map((service)=>(
                    <li key={service.description}>
                        <Link href="www.google.com">{service.description}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}