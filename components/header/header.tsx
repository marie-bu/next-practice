import Link from 'next/link';
import Image from "next/image";

import Logo from '../../assets/logo.png';

import styles from './header.module.scss';

export default function Header(): JSX.Element | null {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.logoFisheye}><Image src={ Logo } alt="Fisheye Logo"/></a>
            </Link>
        </header>
    )
}