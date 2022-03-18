import Image from 'next/image';
import Link from 'next/link';

import { Photographer } from '../../interfaces';
import Tag from '../tag/tag';

import styles from './profile.module.scss';

type Props = {
    photographer: Photographer
}

export default function Profile({ photographer }: Props): JSX.Element | null {
    const slug = `/profile/${photographer.id}`
    const imgPath = `/Photographers_ID/${photographer.id}.jpg`

    return <li className={styles.profile}>
                <Link href={slug}>
                    <a aria-label={ photographer.name }>
                        <h2 className={styles.name}>{ photographer.name }</h2>
                        <img className={styles.portrait} src={imgPath} alt=""/>
                    </a>
                </Link>
                <div>
                    <p className={styles.location}>{ photographer.city }, { photographer.country }</p>
                    <p className={styles.tagline}>{ photographer.tagline }</p>
                    <p className={styles.price}>{ photographer.price }€/jour</p>
                </div>
                <ul className={styles.profile_tags}>
                    { photographer.tags.map((tag: string, i: number) => (
                        <Tag tag={tag} key={i} />
                    ))}
                </ul>
            </li>
}

// use img or Image ???