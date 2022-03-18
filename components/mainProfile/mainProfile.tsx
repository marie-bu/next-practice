import Image from 'next/image';
import Tag from '../tag/tag';

import { Photographer } from "../../interfaces";

import styles from './mainProfile.module.scss';

type Props = {
    photographer: Photographer
}

export default function MainProfile({photographer}: Props): JSX.Element | null {
    const imgPath = `/Photographers_ID/${photographer.id}.jpg`

    return (
    <section className={styles.photographer}>
        <div className={styles.photographer_info}>
            <h1 className={styles.photographer_info_name}>{photographer.name}</h1>
            <p className={styles.photographer_info_loc}>{photographer.city}, {photographer.country}</p>
            <p className={styles.photographer_info_tagline}>{photographer.tagline}</p>
            <ul className={styles.photographer_info_tags}>
                { photographer.tags.map((tag: string, i: number) => (
                    <Tag tag={tag} key={i} />
                ))}
            </ul>
        </div>
        <div className={styles.photographer_contact}>
            <button className="btn btn-contact" type="button" aria-label="Contactez-moi">Contactez-moi</button>
        </div>
        <div className={styles.photographer_portrait}>
            <Image src={imgPath} alt="" width="200px" height="200px"/>
        </div>
    </section>
    )
}